import * as fs from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const readStream = fs.createReadStream(resolve(__dirname, './files/fileToRead.txt'))

    readStream.on('data', (chunk) => {
        console.log(chunk.toString())
    })
};

await read();