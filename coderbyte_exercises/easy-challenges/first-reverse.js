function FirstReverse(str) {
	var str2 = '';
  for (var i = str.length-1; i >=0; i--) {
  	str2 += str[i];
  }
  return str2;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());     
