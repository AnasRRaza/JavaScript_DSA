


const arr1 = [4, 3, 12]

const arr2 = [2, 3, 10, 14, 4]

function commonElement(arr1, arr2) {

    let result = []

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }




    return result
}


const result = commonElement(arr1, arr2)
console.log('res', result)