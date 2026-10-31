

function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed;
}


const result = reverse("Anas Raza")
console.log("Reversed: ", result)
