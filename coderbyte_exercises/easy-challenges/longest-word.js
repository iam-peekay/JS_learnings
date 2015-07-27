/*
Have the function LongestWord(sen) take the sen parameter being passed and
return the largest word in the string. If there are two or more words that
are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.

Use the Parameter Testing feature in the box below to test your code with
different arguments.

*/

function LongestWord(sen) {
  var longest = '';
  var max = 0;
  var words = sen.split(' ');
  for(var i = 0; i<words.length; i++) {
    if(words[i].length > max) {max = words[i].length; longest = words[i];}
  }

    return longest;
}
