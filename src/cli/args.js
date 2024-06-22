const parseArgs = () => {
    const customArgs = process.argv.slice(2)
    console.log(customArgs)

    for (let i = 0; i < customArgs.length; i += 2) {
        const argumentName = customArgs[i];
        const argumentValue = customArgs[i + 1];
        console.log(`${argumentName} is ${argumentValue}`)

    }
};

parseArgs();