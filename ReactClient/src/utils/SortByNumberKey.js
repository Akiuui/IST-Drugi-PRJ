function SortByNumberKey(array, key, asc=true) {
    return [...array].sort((a,b) => {
        if(asc){
            return a[key] - b[key]
        }else{
            return b[key] - a[key]
        }
    })
}

export default SortByNumberKey