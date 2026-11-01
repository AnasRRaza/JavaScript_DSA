


const arr1 = [4, 3, 12]

const arr2 = [2, 3, 10, 14]


function mergeArray(arr1, arr2) {

    // let result = []

    // for (let i = 0; i < arr1.length + arr2.length; i++) {
    //     if (i < arr1.length) {
    //         result[i] = arr1[i];
    //     } else {
    //         result[i] = arr2[i - arr1.length];
    //     }
    // }

    // return result.sort((a, b) => a - b)


    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
    }

    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i])
    }

    return result
}

console.log(mergeArray(arr1, arr2))