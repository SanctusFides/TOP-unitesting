function reverseString(string) {
    let reversed = "";
    for (let i = string.length; i >= 0; i--) {
        reversed += string.charAt(i);
    }
    return reversed;
}

module.exports = reverseString