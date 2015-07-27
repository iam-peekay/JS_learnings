// Have the function VowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains
//(ie. "All cows eat grass" would return 5). Do not count
//y as a vowel for this challenge.

function VowelCount(str) {
  var newStr = str.toLowerCase().split('');
  var vowelCounter = 0;
  for(var i = 0; i<newStr.length; i++) {
    if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u')
      {vowelCounter += 1;}
    }
    return vowelCounter;
}
