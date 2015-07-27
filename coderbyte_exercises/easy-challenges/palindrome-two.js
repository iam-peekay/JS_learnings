//Using the JavaScript language, have the function PalindromeTwo(str)
//take the str parameter being passed and return the string true if the
//parameter is a palindrome, (the string is the same forward as it is backward)
// otherwise return the string false. The parameter entered may have
//punctuation and symbols but they should not affect whether the string is in
// fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna"
// should return true.


function PalindromeTwo(str) {
	var strNew = str.toLowerCase();
  strNew = strNew.split('');
  var s = '';

  var ok = 'abcdefghijklmnopqrstuvwxyz1234567890';

  for(var i = 0; i < strNew.length; i++) {
    if( ok.indexOf(strNew[i]) > 0) { s += strNew[i]; }
  }

  var isPalin = true;
  for(var i = 0; i < Math.floor(s.length/2); i++) {
  	if(s[i] != s[s.length - i - 1]) { isPalin = false; }
  }
  return isPalin;
}
