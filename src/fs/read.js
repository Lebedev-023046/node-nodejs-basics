import * as fs from 'node:fs/promises';

const read = async () => {
    try {
        const fileContent = await fs.readFile('./files/fileToRead.txt', 'utf8')
        console.log(fileContent)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read();