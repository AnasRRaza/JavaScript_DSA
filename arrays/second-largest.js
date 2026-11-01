


function secondLargest(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }

    return arr[arr.length - 2];
}


const array = [4, 23, 33, 9, 40]

const result = secondLargest(array);
console.log('Result', result)