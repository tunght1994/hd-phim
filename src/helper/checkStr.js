const checkStr = (str , number) => {
    return str.length > number ? str.slice(0, number) + "..." : str
}

export default checkStr