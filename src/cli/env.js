const parseEnv = () => {

    const envObj = process.env

    const keysWithProperPrefix = Object.keys(envObj).filter(key => key.startsWith('RSS'))
    const properKeyValuePairs = keysWithProperPrefix.forEach(key => console.log(`${key}=${envObj[key]}`))
};

parseEnv();