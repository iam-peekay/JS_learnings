// Using the JavaScript language, have the function RunLength(str) take the str
// parameter being passed and return a compressed version of the string using
//the Run-length encoding algorithm. This algorithm works by taking the
//occurrence of each repeating character and outputting that number along
//with a single character of the repeating sequence. For example: "wwwggopp"
//would return 3w2g1o2p. The string will not contain any numbers, punctuation,
// or symbols.

function combine(obj) {
  var output = '';
  for(var prop in obj) {
    output += prop;
    output += obj[prop];
  }
  return output;
}
function RunLength(str) {
	var groups = {};
  str = str.split('');
  str.forEach(function(x) {
  	return group[x] = (groups[x] || 0) + 1;
  });
  return combine(groups);
}
