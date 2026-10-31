


const array = [32, 12, 4, 55, 7];


function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++
        right--
    }

    return arr;
}

// const result = reverse(array)
// console.log("Result", result)



const reverse2 = (arr) => {
   let reversed = [];


   for (let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i])
   }

   return reversed
}


const res = reverse2(array);
console.log("Result2", res)