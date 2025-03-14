function caesarCipher(text, shift) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      let shiftedCode;
      if (code >= 65 && code <= 90) { // Uppercase letters
          shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
      } else if (code >= 97 && code <= 122) { // Lowercase letters
          shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
      }
      result += String.fromCharCode(shiftedCode);
    } else {
      result += char;
    }
  }
  return result;
}

var inputString = "vwduw ljudeehghyhubwklq";
var offset = 4;

caesarCipher( inputString, offset );

