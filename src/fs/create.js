import * as fs from 'node:fs/promises';

const create = async () => {
    try {
        await fs.writeFile('./files/fresh.txt', '', {flag: 'w'})
        await fs.appendFile('./files/fresh.txt', 'I am fresh and young')
    } catch (err) {
        throw err
    }

};

await create();