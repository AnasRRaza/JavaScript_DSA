



function factorial(num) {
    if (num < 0) return undefined

    let result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

const result = factorial(5);

// console.log('result', result)


function factorialRecursive(num) {
    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;

    return num * factorialRecursive(num - 1)
}

const res = factorialRecursive(5);

console.log('res', res)

