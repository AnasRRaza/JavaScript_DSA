


function average (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
}

const array = [3, 5, 3];

const result = average(array)
console.log('result', result)