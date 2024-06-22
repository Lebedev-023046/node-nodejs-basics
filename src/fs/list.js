import * as fs from 'node:fs/promises';

const list = async () => {
    try {
        const fileNameArr = await fs.readdir('./files')
        fileNameArr.forEach(fileName => {
            console.log(fileName)
        })
    } catch (error) {
        throw new Error('FS operation failed')
    }

};

await list();