import * as fs from 'node:fs/promises';

const rename = async () => {
    try {
        await fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await rename();