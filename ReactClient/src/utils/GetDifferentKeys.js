function GetDifferentKeys(obj1, obj2) {

    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    const differentKeys = []

    for(const key of allKeys){
        if(obj1[key] != obj2[key])
            differentKeys.push(key)
    }

    return differentKeys
}

export default GetDifferentKeys