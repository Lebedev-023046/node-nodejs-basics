import { Worker } from 'worker_threads';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import { cpus } from 'os';
const numCPUs = cpus().length;

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const workers = []
    const results = []

    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(resolve(__dirname, './worker.js'))
        worker.on('message', (data) => {
            results.push(data)

            if (numCPUs === results.length) {
                console.log('All workers have finished')
                console.log(results)
            }
        })

        worker.on('error', () => {
            results.push({ status: 'error', data: null });
            console.error(`Worker error: ${error}`);
        })

        const startNumber = 10 + i
        worker.postMessage(startNumber)

        workers.push(worker)
    }
};

await performCalculations();