import * as fs from "fs";
import { BinaryWriter, File, type IFile } from "csbinary";

export class PackentDumpWriter {
  private filename: string;
  private file: IFile;
  private writer: BinaryWriter;
  private startTime = process.hrtime.bigint();

  constructor(version: string) {
    this.filename = `dumps/${version}-${Date.now()}.bin`;
    this.file = File(fs.openSync(`${this.filename}`, "w"));
    this.writer = new BinaryWriter(this.file);
    this.writer.writeString(version);
  }
  writeServerbound(buffer: Buffer) {
    const time = process.hrtime.bigint() - this.startTime;
    this.writer.writeChar("S");
    this.writer.writeInt64(time);
    this.writer.writeInt32(buffer.length);
    this.writer.writeBuffer(buffer);
    this.writer.flush();
  }

  writeClientbound(buffer: Buffer) {
    const time = process.hrtime.bigint() - this.startTime;
    this.writer.writeChar("C");
    this.writer.writeInt64(time);
    this.writer.writeInt32(buffer.length);
    this.writer.writeBuffer(buffer);
    this.writer.flush();
  }

  flush() {
    this.writer.flush();
  }

  close() {
    this.writer.flush();
    this.file.close();
    this.writer.close();
  }
}
