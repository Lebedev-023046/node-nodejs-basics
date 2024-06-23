import * as fs from 'node:fs';
import readline from 'node:readline';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writeStream = fs.createWriteStream(resolve(__dirname, './files/fileToWrite.txt'), {encoding: 'utf8'})

    rl.question('Enter data to write: ', (data) => {
        console.log(data)
        writeStream.write(data)
        rl.close()
    })
};

await write();