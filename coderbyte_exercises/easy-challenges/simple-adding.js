/* Have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000.

Use the Parameter Testing feature in the box below to test your code with
different arguments.
*/


function SimpleAdding(num) {
	var sum = 0;
  	var cur = 1;
  for (var i = 1; i <= num; i++) {
    sum += cur;
    cur += 1;
    }
  return sum;

}
