const ipConverter = (ip = '127.0.0.1') => {
    let result = 0;
    const numbers = ip.split('.');
    for (let i = 0; i < numbers.length; i++) {
        result = result << 8;
        result += parseInt(numbers[i]);
    }
    return result;
}

console.log(ipConverter('10.0.0.1'));