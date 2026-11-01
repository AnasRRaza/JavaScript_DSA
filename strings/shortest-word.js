




function shortestWord(str) {
    const words = str.split(" ");


    let shortest = words[0];
    for(const word of words){
        if(word.length < shortest.length){
            shortest = word
        }
    }

    return shortest;
}


const result = shortestWord("I am anas i");
console.log('result', result)