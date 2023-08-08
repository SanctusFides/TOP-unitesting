function caesarCipher(word, factor) {
  let codedWord = "";
  let letterValue = 0;

  for (let i = 0; i < word.length; i++) {
    letterValue = word.charCodeAt(i);
    let letter = word.charAt(i);
    //check if letter is lowercase or uppercase
    if (letter === letter.toLowerCase()) {
      if (letterValue + factor > 122) {
        let newValue = String.fromCharCode(letterValue + factor - 26);
        console.log(newValue);
        codedWord += newValue;
      } else {
        codedWord += String.fromCharCode(letterValue + factor);
      }
    } else if (letter === letter.toUpperCase())
      if (letterValue + factor > 90) {
        let newValue = String.fromCharCode(letterValue + factor - 26);
        console.log(newValue);
        codedWord += newValue;
      } else {
        codedWord += String.fromCharCode(letterValue + factor);
      }
  }
  return codedWord;
}

module.exports = caesarCipher;