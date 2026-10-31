


const longestWord = (sentence) => {
    const words = sentence.split(" ")

    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest;
}


const result = longestWord("I am a software developer")
console.log("Result: ", result)
