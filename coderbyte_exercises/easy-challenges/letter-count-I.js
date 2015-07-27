// Have the function LetterCountI(str) take the str parameter being passed
// and return the first word with the greatest number of repeated letters.
//For example: "Today, is the greatest day ever!" should return greatest
//because it has 2 e's (and 2 t's) and it comes before ever which also has
// 2 e's. If there are no words with repeating letters return -1. Words will be
// separated by spaces.

function LetterCountI(str) {
  var arr = str.split(' ');
  var res = -1;
  var longest = 1;
  for(var i = 0; i<arr.length; i++) {
    if (GetWordRepeatCount(arr[i]) > longest) {
      res = arr[i];
      longest = GetWordRepeatCount(arr[i]);
    }
  }
  return res;
}

function GetWordRepeatCount(str) {
  var counts = {};
  for(var i = 0; i<str.length; i++) {
    var char = str[i];
    counts[char] = (counts[char] || 0) + 1;
  }
  var max = 0;
  for(var c in counts) {
    if(counts[c] > max) {max = counts[c];}
  }
  return max;
}
