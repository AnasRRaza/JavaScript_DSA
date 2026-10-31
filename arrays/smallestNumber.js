const array = [32, 12, 4, 55, 7];


function findLow(arr) {
    let low = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i]
        }
    }

    return low;
}


const lowest = findLow(array)
console.log('Lowest', lowest)
