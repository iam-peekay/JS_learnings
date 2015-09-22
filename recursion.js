// noon
// hello
// USING FOR LOOP
// function palindrome(str) {
//   var halfLength = Math.min(str.length / 2);

//   for (var i = 0; i < halfLength; i++) {
//     if (str[i] !== str[str.length-1-i]) {
//       return false;
//     }
//     return true;
//   }
// }

// USING RECURSION
// function palindrome(str, index) {

//   var index = index ? index : 0;
//   var res = true;

//   // termination case
//   if (!(str.constructor === String)) {
//     return 'enter a string please!';
//   }

//   // base case
//   if (index > Math.min(str.length / 2)) {
//     return res;
//   }

//   // all else

//   if (str[index] === str[str.length-1-index]) {
//     index = index + 1;
//     return palindrome(str, index, res);
//   } else {
//     return false;
//   }
// }

// USING RECURSION VERSION 2

// function palindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }

//   if (str[0] !== str[str.length-1]) {
//     return false;
//   } else {
//     return palindrome(str.substr(1, str.length-2));
//   }
// }

// console.log(palindrome('ana'));


/////////////////////////////////////////////////////////
// PROBLEM 9: 
// Split a list of numbers with regard to a pivot element. 
// All elements smaller than the pivot element go in the 
// first return list, all other elements go into the second
// return list. Both return list are inside one list.
/////////////////////////////////////////////////////////

// var pivot = function (list, num, index) {
//   var index = index ? index : 0;
//   var end = list.length;
//   var res = [[],[]];
//   for (var i = 0; i < end; i++) {
//     if (list[i] < num) {
//       res[0].push(list[i]);
//     } else {
//       res[1].push(list[i]);
//     }
//   }
//   return res;
// };


// var pivot = function (list, num, index, res) {
//   index = index || 0;

//   res = res === undefined ? [[], []] : res;

//   // base base
//   if (index === list.length) {
//     return res;
//   }

//   if (list[index] < num) {
//     res[0].push(list[index]);
//   } else {
//     res[1].push(list[index]);
//   }

//   return pivot(list, num, index + 1, res);
// };

// console.log(pivot([2,7,8,3,1,4], 4)); // [[2,3,1], [7,8,4]]



// var findMaxRecursively = function(array, max, index) {

//   max = max === undefined ? -Infinity : max;
//   index = index || 0;

//   // termination case
//   if (!Array.isArray(array)) {
//     console.log("Please pass an array, thanks!");
//     return;
//   }

//   // base case
//   if (index === array.length) {
//     return max;
//   }

//   // recursive case
//   if (array[index] > max) {
//     max = array[index];
//   }
//   return findMaxRecursively(array, max, index + 1);

// };

// var arr = [1,-4, 5, 6];

// console.log('findMaxRecursively: ', findMaxRecursively(arr));


/////////////////////////////////////////////////////////
// PROBLEM 4:
// Swap all elements in pairs. 
// If the length of the list is odd, the last element stays in place.
/////////////////////////////////////////////////////////

// ONE WAY
// var swap = function (list){
//   if (list.length < 2) {
//     return list;
//   } else {
//     return [list[1],list[0]].concat(swap(list.slice(2)));
//   }
// };

// SECOND WAY

// var swap = function(list, index, res) {
//   res = res || [];
//   index = index || 0;

//   // termination case
//   if (!Array.isArray(list)) {
//     return;
//   }

//   // base case 
//   if (index === list.length) {
//     return res;
//   }

//   res.push(list[index + 1], list[index]);

//   return swap(list, index + 2, res);
// };

// console.log('first way swap: ' + swap([2,7,8,3,1,4])); // [7,2,3,8,4,1]

/////////////////////////////////////////////////////////
// PROBLEM 5:
// Add up all numbers in the list.
/////////////////////////////////////////////////////////

// FIRST WAY
// var sum = function (list){
//   if (list.length === 1) {
//     return list[0];
//   } else {
//     return list[0] + sum(list.slice(1));
//   }
// };

// SECOND WAY

// var summer = function(list, index, sum) {
//   // termination case
//   index = index || 0;
//   sum = sum === undefined ? 0 : sum;

//   if (!(Array.isArray(list))) {
//     return;
//   }

//   // base case
//   if (index === list.length) {
//     return sum;
//   }

//   return list[index] + summer(list, index + 1, sum);
// };

// console.log(summer([2,7,8,3,1,4])); // 25


/////////////////////////////////////////////////////////
// PROBLEM 11: 
// Alternate the numbers sign regardless of their original sign. 
/////////////////////////////////////////////////////////

// USING FOR LOOP
// var alternate = function (list){
//   var res = [];
//   if (list.length === 0) {
//     return [];
//   }
//   for (var i = 0; i < list.length; i++) {
//     if (i % 2 === 0) {
//       res.push(Math.abs(list[i]));
//     } else {
//       res.push(-1 * Math.abs(list[i]));
//     }
//   }
//   return res;
// };

// var alternate = function (list, index, res) {
//   res = res || [];
//   index = index || 0;

//   if (index == list.length) {
//     return res;
//   }

//   if (index % 2 === 0) {
//     res.push(Math.abs(list[index]));
//   } else {
//     res.push(-1 * Math.abs(list[index]));
//   }
//   return alternate(list, index + 1, res);
// };

// console.log(alternate([-5,-3,7,1,-6,2])); 
// console.log(alternate([2,7,8,3,1,4]));

/////////////////////////////////////////////////////////
// PROBLEM 12:
// Zip two lists of numbers. If one list is shorter, 
// just append the rest of the other list. First element
// comes from the first list.
/////////////////////////////////////////////////////////

// ONE WAY
// var zip = function (list1, list2){
//   var res = [];
//   if (list1.length === 0) {
//     return res.concat(list2);
//   }
  
//   if (list2.length === 0) {
//     return res.concat(list1);
//   }
  
//   return res.concat(list1[0], list2[0]).concat(zip(list1.slice(1), list2.slice(1)));
// };


// // SECOND WAY
// var zip = function (list1, list2, index, res) {
//   index = index || 0;
//   res = res || [];

//   // termination case
//   if ((!Array.isArray(list1)) || (!Array.isArray(list2))) {
//     return;
//   }

//   // base case
//   if (index === list1.length) {
//     return res.concat(list2.slice(index));
//   }

//   if (index === list2.length) {
//     return res.concat(list1.slice(index));
//   }

//   res.push(list1[index], list2[index]);

//   return zip(list1, list2, index + 1, res);
// };

// console.log(zip([2,7,8,3,1,4], [9,5,1])); // [2,9,7,5,8,1,3,1,4]


/////////////////////////////////////////////////////////
// PROBLEM 15:  
// Reduce series of 0s to a single 0.
/////////////////////////////////////////////////////////


// var zeros = function (list, index, res) {
//   index = index || 0;
//   res = res || [];

//   // termination case
//   if (!(Array.isArray(list))) {
//     return;
//   }
//   // base case
//   if (index === list.length) {
//     return res;
//   }

//   if (list[index] !== 0 || list[index + 1] !== 0) {
//     res.push(list[index]);
//   }

//   return zeros(list, index + 1, res);
// };

// console.log(zeros([2,0,0,0,1,4])); // [2,0,1,4];


/////////////////////////////////////////////////////////
// PROBLEM 16: // NOT COMPLETE
// Mirror the elements of a list and append them.
/////////////////////////////////////////////////////////

// var mirror = function(list, index, res) {
//   var copyOfList = Array.prototype.slice.call(list);
//   res = res || copyOfList;
//   index = index || 0;

//   // termination case
//   if (!(Array.isArray(list))) {
//    return;
//   }

//   // base case
//   if (index === list.length) {
//     return res;
//   }

//   res.push(list[list.length - 1 - index]);

//   return mirror(list, index + 1, res);
// };

// console.log(mirror([2,7,8,3,1,4])); // [2,7,8,3,1,4,4,1,3,8,7,2]


/////////////////////////////////////////////////////////
// PROBLEM 19: NOT COMPLETED
// Return true or false, if a given list starts with a sublist.
/////////////////////////////////////////////////////////

var sublist = function(list, index) {
  index = index || 0;

  // base case
  if (index == list[1].length) {
    return true;
  }

  if (list[0][index] === list[1][index]) {
    return sublist(list, index + 1);
  } else {
    return false;
  }
};
console.log(sublist([[2,7,8,3,1,4] , [2,7]])); // true
console.log(sublist([[5,6,7,1,4,6,7,1,3] , [6,7,1]])); // false



/////////////////////////////////////////////////////////
// PROBLEM 20: 
// Return a sublist of a given list, provided the starting Index 
// (including) and an end Index (excluding).
/////////////////////////////////////////////////////////

var createSubList = function(list, index, res) {
  res = res || [];
  index = index || list[1];

  // termination case
  if (list.length === 0) {
    return 'buzzzzzzzzz!';
  }
  // base case
  if (index === list[2]) {
    return res;
  }

  res.push(list[0][index]);
  return createSubList(list, index + 1, res);
};

console.log(createSubList([[2,7,8,3,1,4] , 2, 4])); // [8,3]
console.log(createSubList([[4,2,7,9,7] , 1, 4])); // [2,7,9]

