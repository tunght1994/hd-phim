const checkStr = (str , number) => {
    return str?.length > number ? str.substr(0, number) + '...' : str
}

export default checkStr