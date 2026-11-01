


function sumOfAll (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum
}

const array = [3, 5, 3, 45];

const result = sumOfAll(array)
console.log('result', result)