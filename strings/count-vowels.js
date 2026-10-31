



function countVowels(str) {

    const clean = str.toLowerCase()

    // const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // if (vowels.includes(clean[i])) {
        //     count++
        // }

        if (clean[i] === 'a' || clean[i] === 'e' || clean[i] === 'i' || clean[i] === 'o' || clean[i] === 'u'){
             count++
        }
    }

    return count;
}


const result = countVowels("muskan");
console.log(result)