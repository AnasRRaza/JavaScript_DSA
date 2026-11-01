



function countEven(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        }else {
            odd++
        }
    }

    return { even, odd }
}


const result = countEven([4, 2, 5, 7, 1])
console.log('res', result)