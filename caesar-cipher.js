function caesarCipher(word, factor) {
    let codedWord = "";
    let letterValue = 0;
  
    for (let i = 0; i < word.length; i++) {
      letterValue = word.charCodeAt(i);
      console.log(letterValue);
      let letter = word.charAt(i);
    
      if (letterValue+factor > 122) {
        let newValue = String.fromCharCode(letterValue + factor - 26);
        console.log(newValue);
        codedWord += newValue;
  
      } else {
        codedWord += String.fromCharCode(letterValue + factor);
      }
    }
    return codedWord;




        // This if block is for when it is Z
    //     if (letter === "z" && factor == 1 || letter ===  "Z" && factor == 1) {
    //         if (letter === "z"){
    //             letter = "a";
    //             codedWord += String.fromCharCode((letter.charCodeAt(0)));
    //         } else {
    //             letter = "A";
    //             codedWord += String.fromCharCode((letter.charCodeAt(0)));
    //         }

    //     } else if (letter === "z" && factor > 1 || letter ===  "Z" && factor > 1) {
    //         if (letter === "z"){
    //             letter = "a";
    //             codedWord += String.fromCharCode((letter.charCodeAt(0) + factor));
    //         } else {
    //             letter = "A";
    //             codedWord += String.fromCharCode((letter.charCodeAt(0) + factor));
    //         }
    //     } else {
    //         codedWord += String.fromCharCode((letter.charCodeAt(0) + factor));
    //     }
    // }
}

module.exports = caesarCipher;