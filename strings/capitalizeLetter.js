



function capitalizeLetter (sentence) {

    let result = "";
    let capitalNext = true;

    for(const char of sentence){
        result += capitalNext ? char.toUpperCase() : char;
        capitalNext = char === " ";
    }

    return result
}



const result = capitalizeLetter("i am anas raza");
console.log("Result ", result)