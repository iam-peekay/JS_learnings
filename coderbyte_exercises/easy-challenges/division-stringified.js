// Have the function DivisionStringified(num1,num2) take both parameters being
//passed, divide num1 by num2, and return the result as a string with properly
//formatted commas. If an answer is only 3 digits long, return the number with
// no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
//and num2 is 10000 the output should be "12,345". 123,456,789

function DivisionStringified(num1, num2) {
  var s = Math.round(num1/num2) + '';
  var res = '';
  if(s < 1000) {return s; }
  else {
    for(var i = s.length -1; i >= 0; i--) {
    if( != s.length - 1 && (s.length - i - 1) % 3 == 0) {
      res = ',' + res;
    }
    res = s[i] + res;
  }
}
  return res;
}



function DivisionStringified(num1, num2) {
  var res = Math.round(num1/num2) + '';
  if(res < 1000) {return res; }

  return res;
}
