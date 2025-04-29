import * as fs from "fs";
import { BinaryReader, File, type IFile } from "csbinary";
import { createDeserializer } from 'bedrock-protocol/src/transforms/serializer.js';

export class PacketDumpReader {
  version: string;
  private filename: string;
  private file: IFile;
  private reader: BinaryReader;
  private deserializer: {
    parsePacketBuffer: (buffer: Buffer) => any,
    proto: { setVariable(name: 'ShieldItemID', id: string): void }
  };

  constructor(filename: string) {
    this.filename = filename;
    this.file = File(fs.openSync(this.filename, "r"));
    this.reader = new BinaryReader(this.file);
    this.version = this.reader.readString();
    this.deserializer = createDeserializer(this.version);
    this.deserializer.proto.setVariable('ShieldItemID', 380 as any);
  }

  canRead() {
    return this.file.canRead;
  }

  read() {
    try {
      const type = this.reader.readChar() as 'S' | 'C';
      const time = this.reader.readInt64();
      const length = this.reader.readInt32();
      const buffer = this.reader.readBytes(length);
      const data = this.deserializer.parsePacketBuffer(buffer);

      if (data.data.name === 'item_registry' || data.data.name === 'start_game') {
        for (const state of data.data.params.itemstates ?? []) {
          if (state.name === 'minecraft:shield') {
            this.deserializer.proto.setVariable('ShieldItemID', state.runtime_id)
            break
          }
        }
      }

      return {
        time,
        type,
        buffer,
        data
      };
    } catch (e) {
      return null;
    }
  }

  close() {
    this.file.close();
    this.reader.close();
  }
}
