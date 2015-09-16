/////////////////////////////////////////////////////////
                                                      ///
var Returns = function(a,b){                          ///
  // Lazy assertion using JSON.stringify              ///
  return JSON.stringify(a) === JSON.stringify(b);     /// 
};                                                    ///
                                                      ///
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
// PROBLEM 1:
// Find the maximum value in a list.
/////////////////////////////////////////////////////////

var test1 = [2,7,8,3,1,4];

var returnMaxValInList = function (list) {
  if (list.length === 1) {
    return list[0];
  } else {
    return Math.max(list[0], returnMaxValInList(list.slice(1)));
  }

};

var test1Result = Returns(returnMaxValInList(test1), 8);



/////////////////////////////////////////////////////////
// PROBLEM 2:
// Count the occurences of an element inside a list.
/////////////////////////////////////////////////////////

var test2 = [[2,7,4,4,1,4], 4];

var countOccurences = function (list, target){
  if (list.length === 0) {
    return 0;
  } 
  if (list[0] === target) {
    return 1 + countOccurences(list.slice(1), target);
  } else {
    return 0 + countOccurences(list.slice(1), target);
  }
  
};

var test2Result = Returns(3, countOccurences([2,7,4,4,1,4], 4));



/////////////////////////////////////////////////////////
// PROBLEM 3:
// Reverse the order of the list.
/////////////////////////////////////////////////////////

var test3 = [2,7,8,3,1,4];

var reverse = function (list){
  if (list.length === 1) {
    return list[0];
  } else {
    return [list[list.length-1]].concat(reverse(list.slice(0, list.length-1)));
  }
};

var test3Result = Returns([4,1,3,8,7,2], reverse(test3));




/////////////////////////////////////////////////////////
// PROBLEM 4:
// Swap all elements in pairs. 
// If the length of the list is odd, the last element stays in place.
/////////////////////////////////////////////////////////

var test4 = [2,7,8,3,1,4];
var test4b = [3,6,8,1,5];

var swap = function (list){
  if (list.length < 2) {
    return list;
  } else {
    return [list[1],list[0]].concat(swap(list.slice(2)));
  }
};

var test4Result = Returns([7,2,3,8,4,1], swap(test4)) && Returns([6,3,1,8,5], swap(test4b));




/////////////////////////////////////////////////////////
// PROBLEM 5:
// Add up all numbers in the list.
/////////////////////////////////////////////////////////

var test5 = [2,7,8,3,1,4];

var sum = function (list){
  if (list.length === 1) {
    return list[0];
  } else {
    return list[0] + sum(list.slice(1));
  }
};

var test5Result = Returns(25, sum(test5));



/////////////////////////////////////////////////////////
// PROBLEM 6:
// Put every element into its own list.
/////////////////////////////////////////////////////////

var test6 = [2,7,8,3,1,4];

var listify = function (list){
  if (list.length === 1) {
    return [[list[0]]];
  } else {
    return [[list[0]]].concat(listify(list.slice(1)));
  }
};

var test6Result = Returns([[2], [7], [8], [3], [1], [4]], listify(test6));


/////////////////////////////////////////////////////////
// PROBLEM 7:
// Put element pairs in their own list. If you have an odd number of
// elements, add a 0.
/////////////////////////////////////////////////////////

var test7 = [2,7,8,3,1,4];
var test7b = [3,6,8,1,5];

var pairUp = function (list){
  if (list.length === 0) {
    return list;
  }
  else if (list.length === 1) {
    return [[list[0], 0]];
  } else {
    return [[list[0], list[1]]].concat(pairUp(list.slice(2)));
  }
};

var test7Result = Returns(pairUp(test7), [[2,7], [8,3], [1,4]]) && Returns(pairUp(test7b), [[3,6],[8,1],[5,0]]);



/////////////////////////////////////////////////////////
// PROBLEM 8:
// Given a list of lists of numbers, return a 
// flat list of all numbers.
/////////////////////////////////////////////////////////

var test8 = [[2,7], [8,3], [1,4]];

var flatten =  function (){
  var res = [];
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      res = res.concat(flatten.apply(null, arguments[i]));
  } else {
    res.push(arguments[i]);
  }
  }
  
  return res;
};

var test8Result = Returns(flatten(test8), [2,7,8,3,1,4]);




/////////////////////////////////////////////////////////
// PROBLEM 9:
// Split a list of numbers with regard to a pivot element. 
// All elements smaller than the pivot element go in the 
// first return list, all other elements go into the second
// return list. Both return list are inside one list.
/////////////////////////////////////////////////////////


var test9 = [2,7,8,3,1,4];

var pivot = function (list, num, index, res) {
  index = index || 0;

  res = res === undefined ? [[], []] : res;

  // base base
  if (index === list.length) {
    return res;
  }

  if (list[index] < num) {
    res[0].push(list[index]);
  } else {
    res[1].push(list[index]);
  }

  return pivot(list, num, index + 1, res);
};


var test9Result = Returns([[2,3,1],[7,8,4]], pivot(test9, 4));




/////////////////////////////////////////////////////////
// PROBLEM 10:
// Return a list only containing even numbers.
/////////////////////////////////////////////////////////

var test10 = [2,7,8,3,1,4];

var evens = function (list){
  var res = [];
  if (list.length === 0) {
    return [];
  }
  if (list[0] % 2 === 0) {
    return [list[0]].concat(evens(list.slice(1)));
  }
  return evens(list.slice(1));
};

var test10Result = Returns([2,8,4], evens(test10));




/////////////////////////////////////////////////////////
// PROBLEM 11: 
// Alternate the numbers sign regardless of their original sign. 
/////////////////////////////////////////////////////////

var test11 = [2,7,8,3,1,4];
var test11b = [-5,-3,7,1,-6,2];

var alternate = function (list, index, res) {
  res = res || [];
  index = index || 0;

  if (index == list.length) {
    return res;
  }

  if (index % 2 === 0) {
    res.push(Math.abs(list[index]));
  } else {
    res.push(-1 * Math.abs(list[index]));
  }
  return alternate(list, index + 1, res);
};

var test11Result = Returns([2,-7,8,-3,1,-4], alternate(test11)) && Returns([5,-3,7,-1,6,-2], alternate(test11b));




/////////////////////////////////////////////////////////
// PROBLEM 12:
// Zip two lists of numbers. If one list is shorter, 
// just append the rest of the other list. First element
// comes from the first list.
/////////////////////////////////////////////////////////

var test12 = [2,7,8,3,1,4];

var zip = function (list1, list2){
  var res = [];
  if (list1.length === 0) {
    return res.concat(list2);
  }
  
  if (list2.length === 0) {
    return res.concat(list1);
  }
  
  return res.concat(list1[0], list2[0]).concat(zip(list1.slice(1), list2.slice(1)));
};

var test12Result = Returns([2,9,7,5,8,1,3,1,4], zip(test12, [9,5,1]));




/////////////////////////////////////////////////////////
// PROBLEM 13:
// Create a new list with a given value and length.
/////////////////////////////////////////////////////////

var test13 = [0, 5];
var test13b = [7, 3];

var creator = function (list){
  if (list[1] === 0) {
    return [];
  } else {
    return [list[0]].concat(creator([list[0], list[1] -1]));
  }
};

var test13Result = Returns([0,0,0,0,0], creator(test13)) && Returns([7, 7, 7], creator(test13b));




/////////////////////////////////////////////////////////
// PROBLEM 14:
// Create a range list counting from a start to an end.
// Excluding the end.
/////////////////////////////////////////////////////////

var test14 = [2,5];
var test14b = [8,1];
var test14c = [3,3];

var makeRange = function (list){
  if (list[0] === list[1]) {
    return [];
  } else if (list[0] < list[1]) {
    return [list[0]].concat(makeRange([list[0] + 1, list[1]]));
  } else {
    return [list[0]].concat(makeRange([list[0] - 1, list[1]]));
  }
};

var test14Result = Returns([2,3,4], makeRange(test14)) && Returns([8,7,6,5,4,3,2], makeRange(test14b)) && Returns([], makeRange(test14c));




/////////////////////////////////////////////////////////
// PROBLEM 15:  
// Reduce series of 0s to a single 0.
/////////////////////////////////////////////////////////

var test15 = [2,0,0,0,1,4];

var zeros = function (list, index, res) {
  index = index || 0;
  res = res || [];

  // termination case
  if (!(Array.isArray(list))) {
    return;
  }
  // base case
  if (index === list.length) {
    return res;
  }

  if (list[index] !== 0 || list[index + 1] !== 0) {
    res.push(list[index]);
  }

  return zeros(list, index + 1, res);
};
var test15Result = Returns([2,0,1,4], zeros(test15));




/////////////////////////////////////////////////////////
// PROBLEM 16:
// Mirror the elements of a list and append them.
/////////////////////////////////////////////////////////

var test16 = [2,7,8,3,1,4];

var mirror = function(list, index, res) {
  var copyOfList = Array.prototype.slice.call(list);
  res = res || copyOfList;
  index = index || 0;

  // termination case
  if (!(Array.isArray(list))) {
   return;
  }

  // base case
  if (index === list.length) {
    return res;
  }

  res.push(list[list.length - 1 - index]);

  return mirror(list, index + 1, res);
};

var test16Result = Returns([2,7,8,3,1,4,4,1,3,8,7,2], mirror(test16));




/////////////////////////////////////////////////////////
// PROBLEM 17:
// Augument every element in a list with a new value.
// The elemts are lists themselves.
/////////////////////////////////////////////////////////

var test17 = [[[],[3],[7]] , 5];

var addElm = function (list, num){
  if (list.length === 0) {
    return [];
  } else {
    return [list[0].concat(num)].concat(addElm(list.slice(1), num));
  }
};

var test17Result = Returns([[5],[3,5],[7,5]], addElm.apply(null, test17));




/////////////////////////////////////////////////////////
// PROBLEM 18:
// Set every list as the last item of the previous list.
// Return on the root list. 
/////////////////////////////////////////////////////////

var test18 = [[4,3],[5,6],[8,2]];

var nest = function (list){
  if (list.length === 1) {
    return list[0];
  } else {
    return list[0].concat([nest(list.slice(1))]);
  }
};

var test18Result = Returns([4,3,[5,6,[8,2]]], nest(test18));




/////////////////////////////////////////////////////////
// PROBLEM 19: 
// Return true or false, if a given list starts with a sublist.
/////////////////////////////////////////////////////////

var test19 = [[2,7,8,3,1,4] , [2,7]];
var test19b = [[5,6,7,1,4,6,7,1,3] , [6,7,1]];

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

var test19Result = Returns(true, sublist(test19)) && Returns(false, sublist(test19b));




/////////////////////////////////////////////////////////
// PROBLEM 20: NOT COMPLETED
// Return a sublist of a given list, provided the starting Index 
// (including) and an end Index (excluding).
/////////////////////////////////////////////////////////

var test20 = [[2,7,8,3,1,4] , 2, 4];
var test20b = [[4,2,7,9,7] , 1, 4];

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

var test20Result = Returns([8,3], createSubList(test20)) && Returns([2,7,9], createSubList(test20b));


