import { createServer as createServerHttp } from 'http';
import * as fs from 'node:fs/promises';
import { release, version } from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const loadJSON = async (fileName) => {
    try {
        const jsonFileContent = await fs.readFile(fileName, 'utf-8')
        return JSON.parse(jsonFileContent)
    } catch (error) {
        // throw new Error('FS operation failed: ', error)
        console.log(error)
    }
}

const random = Math.random();

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

let unknownObject;

if (random > 0.5) {
    unknownObject = await loadJSON(`${__dirname}/files/a.json`)
} else {
    unknownObject = await loadJSON(`${__dirname}/files/b.json`)
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log('OBJECT: ', unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    myServer, unknownObject
};

