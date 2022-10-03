// PROBLEM 1

// checking sum zero in given array.
// output => [4,-4]

// const arr = [-5, -3, -4, -2, 0, 2, 4, 6, 8];

// let sumZero = (arr) => {
//   for (let num of arr) {
//     console.log("outer")
//     for (let j = 1; j < arr.length; j++) {
//       console.log("Inner")
//       if (num + arr[j] === 0) {
//         return [num, arr[j]];
//       }
//     }
//   }
// }
// let result = sumZero(arr);
// console.log(result);

// some changes for demo

// const arr = [-5, -3, 0, 2, 4, 6, -4, 8];

// function sumPairZero(inp) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right--
//     } else {
//       left++
//     }
//   }
// }
// let result = sumPairZero(arr);
// console.log(result);
