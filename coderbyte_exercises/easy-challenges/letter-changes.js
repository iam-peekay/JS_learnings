/*
Have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string with
 the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 return this modified string.

Use the Parameter Testing feature in the box below to test your code with
different arguments.

*/
function LetterChanges(str) {
  var newStr = '';
  for (var i=0; i < str.length; i++) {
    var newChar;
    if (str[i] >= 'a' && str[i] <= 'z') {
      var charCode = str.charCodeAt(i);
      charCode+=1;
      if (charCode > 122) charCode = 97;
      newChar = String.fromCharCode(charCode);
    } else {
      newChar = str[i];
    }
    if (['a','e','i','o','u'].indexOf(newChar) > -1) {
      newChar = newChar.toUpperCase();
    }
    newStr += newChar;
  }
  // code goes here
  return newStr;

}
