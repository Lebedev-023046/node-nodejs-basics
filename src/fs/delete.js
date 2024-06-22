import * as fs from 'node:fs/promises';

const remove = async () => {
    try {
        await fs.rm('./files/fileToRemove.txt')
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();