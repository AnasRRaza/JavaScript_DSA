
function fibonacci (n) {


    let prev = 0;
    let curr = 1;

    for(let i = 0; i < n; i++){
        let next = prev + curr;
        prev = curr
        curr = next
    }

    return prev

}

const res = fibonacci(6)

console.log('res', res)






// 0, 1, 1, 2, 3, 5, 

function fibonacciRecursion(num) {
    if (num < 2) return num

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
}


const result = fibonacciRecursion(6);

console.log('result', result)

