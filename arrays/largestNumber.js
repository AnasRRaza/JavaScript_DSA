

const array = [32, 12, 4, 55, 7];


function findLarge(arr) {
    let high = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i]
        }
    }

    return high
}

const largest = findLarge(array)
console.log('Largest', largest)
