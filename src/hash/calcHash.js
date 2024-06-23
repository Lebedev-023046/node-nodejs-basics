import { createHash, randomBytes } from 'crypto';
import { createReadStream } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const hash = createHash('sha256')
    const readStream = createReadStream(resolve(__dirname, './files/fileToCalculateHashFor.txt'))

    readStream.on('data', (chunk) => {
        hash.update(chunk)
    })

    readStream.on('end', () => {
        const hashResult = hash.digest('hex')
        console.log(hashResult)
    })

};

await calculateHash();