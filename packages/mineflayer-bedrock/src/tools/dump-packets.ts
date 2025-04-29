import { Relay, type Version } from 'bedrock-protocol';
import { PackentDumpWriter } from './utils/packet-dump-writter.ts';

main();

function main(): void {
    const version: Version = '1.21.70' as any;
    const relay = new Relay({
        version,
        host: '127.0.0.1',
        port: 19150,
        enableChunkCaching: false,

        destination: {
            host: '127.0.0.1',
            port: 19132,
            offline: true
        }
    });

    relay.on('connect', player => {
        const writter = new PackentDumpWriter('1.21.70');
        player.on('clientbound', (_, des) => {
            writter.writeClientbound(des.fullBuffer)
        })
        player.on('serverbound', (_, des) => {
            writter.writeServerbound(des.fullBuffer)
        })
    })

    relay.listen()
}
