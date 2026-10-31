



function sumOfDigits(num) {
    let result = 0;

    const str = String(num);

    for (let i = 0; i < str.length; i++){
        result += Number(str[i])
    }

    return result
}

const result = sumOfDigits(14);
console.log('result', result)