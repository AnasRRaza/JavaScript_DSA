


const isPalindrome = (words) => {

    const word = words.toLowerCase()

    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) return false

        left++
        right--
    }

    return true
}

const result = isPalindrome("madam")

console.log("Result: ", result)


