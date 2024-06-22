import * as fs from 'node:fs/promises';

const copy = async () => {
    try {
        const filesData = await fs.readdir('./files', 'utf8')

        await fs.mkdir('./files_copy')

        filesData.forEach( async fileName => {
            const fileContent = await fs.readFile(`./files/${fileName}`, 'utf8')
            await fs.writeFile(`./files_copy/${fileName}`, fileContent, {flag: 'w'})
            console.log(fileContent)
        })

    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
