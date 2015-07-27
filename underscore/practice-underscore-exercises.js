// Use _.reduce to multiply all the values in an array.

var arr = [1, 2, 3, 4];

arr.reduce(function(a, b) {return a*b} );

// Use _.reduce to concatenate all strings in an array.
// input: ['x','y','z']
//output: 'xyz'

arr.reduce(function(a, b) {return a.concat(b);});

//Write a function that takes an array of names and congratulates them.
// Make sure to use _.reduce as part of the function.

// input: ['Steve', 'Sally', 'George', 'Gina']
// output: 'Congratulations Steve, Sally, George, Gina!'

arr.slice(0, arr.length-1).reduce(function(a, b) {return a+b+', '}, 'Congragulations ').concat(arr[arr.length-1] + '!');

// _.pluck takes an object and a property name and returns the property name's
// value. Write your own version called myPluck.

myPluck = function(obj, propName){
  return obj[propName];
}


_.pluck = function(array, propertyName) {
  return _.map(array, function(value) {
    return value[propertyName];
  });
};

// Use _.filter to return all strings in an array that start with the letter 'Z'.

var arr = ['zed', 'pee', 'zoo', 'loo', 'gew', 'zumper'];

function checker(string) {
  if(string[0] === 'z') {return true;}
  else {return false;}
}

// OR

function checker(string) {
  return string[0] === 'z';
}


arr.filter(checker);

//Use _.where on your farm animals from the lecture slides to return all
//animals who contain the value 3 at the property name space.

var list = [
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3}
  ];

list.where({space: 3});

function myWhere(list) {
  var names = [];
  list.forEach(function(item) {
    if(item.space === 3) {
      names.push(item.name);
    }
  });
  return names;
}

// Use _.each to loop through an array and console.log() all the values.
// Now use it to console.log() the indices. How would this be different
// if you were looping through an object?

var arr = ['zed', 'pee', 'zoo', 'loo', 'gew', 'zumper'];

arr.forEach(function(item) {
  return console.log(item);
});

arr.forEach(function(item, index) {
  return console.log(index);
});

var obj = {1: 'yo', 2: 'blah', 3: 'yeah'};

for(var prop in obj) {
  console.log(prop);
}

for(var prop in obj) {
  console.log(obj[prop]);
}

// Write a function called checkValue that searches an array for a value.
//It takes an array and a value and returns true if the value exists
// in the array, otherwise it returns false.

function checkValue(array, target) {
  if(array.indexOf(target) > -1) {
    return true;
  } else {
    return false;
  }
}



// Rewrite checkValue using _.each. Make sure that you have underscore.js
//included where you are running your code.

function newCheckValue(array, target) {
  var hasValue = false;
  array.forEach(function(item) { if(item === target) { hasValue = true; } });
  return hasValue;
}

function newCheckValue(array, target) {

  return array.reduce(function(wasFound, item) { if(wasFound) { return true; } return item === target; }, false);
}

//check value to see if EVERY value has it
function newCheckValue(array, target) {

  return array.reduce(function(wasFound, item) { if(!wasFound) { return false; } return item === target; }, true);
}


var newCheckValue = function(array, target) {
function testForValue(element) {
    return element == target;
  }
  return array.every(testForValue);
}
