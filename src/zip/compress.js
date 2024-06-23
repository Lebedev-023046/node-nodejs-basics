import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));


const readStream = createReadStream(resolve(__dirname, './files/fileToCompress.txt'))
const writeStream = createWriteStream(resolve(__dirname, './files/archive.gz'))

const compressStream = zlib.createGzip()

const compress = async () => {
    readStream.pipe(compressStream).pipe(writeStream)
};

await compress();