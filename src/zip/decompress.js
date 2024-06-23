import { createReadStream, createWriteStream } from 'node:fs';
import { Transform } from 'node:stream';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

class DecompressStream extends Transform {

    constructor () {
        super()
        this.decompressedData = []
    }

    _transform(chunk, encoding, callback) {
        this.decompressedData.push(chunk)
        callback()
    }

    _flush(callback) {
        const concatenatedChunks = Buffer.concat(this.decompressedData)
        zlib.unzip(concatenatedChunks, (err, decompressedData) => {
            if(err) {
                callback(err)
                return
            }
            this.push(decompressedData)
            callback()
        })
    }
}

const __dirname = dirname(fileURLToPath(import.meta.url));



const readStream = createReadStream(resolve(__dirname, './files/archive.gz'))
const writeStream = createWriteStream(resolve(__dirname, './files/decompressedData.txt'))

const decompress = async () => {
    const decompressStream = new DecompressStream()
    readStream.pipe(decompressStream).pipe(writeStream)
};

await decompress();