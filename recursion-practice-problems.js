/* 
Write a JavaScript program to calculate the factorial of a number. 
In mathematics, the factorial of a non-negative integer n, denoted by n!,
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

// Apprach #1
function factorial(number) {
  if (number < 0) {
    return;
  }

  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

// Approach #2 
function factorial(number, index, res) {
  res = res || 1;
  index = index || 0;

  // termination case
  if (typeof number !== 'number' || number < 0) {
    return;
  }
  // base case
  if (number === 0) {
    return res;
  }
  
  res = res * number;
  return factorial(number - 1, index + 1, res);
}

/*
Write a JavaScript program to find the greatest common divisor (gcd) 
of two positive numbers.
*/

function gcd(a, b) {
  // uses Euclid's algorithm (https://en.wikipedia.org/wiki/Greatest_common_divisor)
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

/*
Write a JavaScript program to get the integers in range (x, y), assuming x and y are positive.
*/

// Approach #1
function range(start, end) {
  if (end - start === 2) {
    return [start + 1];
  } else {
    var list = range(start, end - 1);
    list.push(end - 1);
    return list;
  }
}

// Approach #1
function range(start, end, res) {
  res = res || [];
  index = start;

  // base case
  if (start === end) {
    return res;
  }

  if (start < end) {
    res.push(start);
    return range(start + 1, end, res);
  }
  
  res.push(start);
  return range(start - 1, end, res);
}

/*
Write a JavaScript program to compute the sum of an array of integers
*/

function sumArray(array) {
  if (array.length === 1) {
    return Number(array);
  } else {
    return array.pop() + sumArray(array);
  }
}

/*
Write a JavaScript program to compute the exponent of a number. 
Note : The exponent of a number says how many times the base number 
is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

function exponent (a, n) {
  if (n === 0) {
    return 1;
  }

  else {
    return a + exponent(a, n-1);
  }
}

/*
Write a JavaScript program to get the first n Fibonacci numbers. 
Note : The Fibonacci Sequence is the series of numbers: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number
 is the sum of the previous two.
*/

function fibanacci(n, index, res) {
  res = res || [0, 1];
  index = index || 2;

  if (n < 1) {
    return 0;
  }

  if (n === 1) {
    return [0, 1];
  }

  // base case
  if (index === n) {
    return res;
  }

  res.push(res[index - 2] + res[index - 1]);

  return fibanacci(n, index + 1, res);
 }

 // Write a merge sort program in JavaScript
 // Sample array : [34,7,23,32,5,62]
 // Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort(array, index, res) {
  res = res || [];
  index = index || 0;

  // termination case
  if (!(Array.isArray(array))) {
    return;
  }

  // base case;
  if (array.length <= 1) {
    return array;
// ???

}

/* Write a function that checks if a string is a palindrome 
*/

function palindrome(str, index) {

  index = index || 0;

  if (str.length === 0) {
    return;
  }

  if (index === str.length) {
    return true;
  }

  if (str[index] !== str[str.length - 1 - index]) {
    return false;
  }

  return palindrome(str, index + 1);
}

/* Write the Binary Search algorithm using recusion
*/


function binarySearch(array, target) {
  
  function search(start, end) {
      // if start > end
    if (start > end) {
      // return NOT FOUND
      return null;
    }

      // if array[start] is the target
    if (array[start] === target) {
      // return start
      return start;
    }

      // if array[end] is the target
    if (array[end] === target) {
      // return end
      return end;
    }


  // middle = (start + end) /2 (rounded down)
    var mid = Math.floor((start + end) / 2);
    var middleItem = array[mid];
    // if array[mid] is greater than target
    if (array[mid] > target) {
      // return recursive function w/ end = middle, start = start + 1
      return search(start + 1, mid);
    }
      
    // if array[mid] is less than target
    if (array[mid] < target) {
      // return recursive function w/ start = middle + 1, end = end - 1
      return search(mid + 1, end - 1);
    }
      

    // if middleItem === target, return middle
    return middle;
  }

  return search(0, array.length - 1);

}

console.log(binarySearch([1,2,5,4,3,6], 6));
