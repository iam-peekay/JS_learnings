/*
Have the function LetterCapitalize(str) take the str parameter being passed
 and capitalize the first letter of each word. Words will be separated by
 only one space.

Use the Parameter Testing feature in the box below to test your code with
different arguments.
*/

function LetterCapitalize(str) {
	var words = str.split(" ");
  var sentence = '';
  for (var i = 0; i < words.length; i++) {
  	sentence += (words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase() + ' ');
  }
  return sentence;

}
   
