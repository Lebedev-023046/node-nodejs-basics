import { Transform } from 'node:stream';
class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('')
        this.push(reversedChunk)
        callback()
    }
}


const transform = async () => {

    const reverseTransform = new ReverseTransform()

    process.stdin.pipe(reverseTransform).pipe(process.stdout)

};

await transform();