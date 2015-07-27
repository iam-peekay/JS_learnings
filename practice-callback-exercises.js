// Write a function, funcCaller, that takes a func (a function) and an arg
// (any data type). The function returns the func called with arg(as an
// argument).

function funcCaller(func, arg) {
  return func(arg);
}

// Write a function, firstVal, that takes an array, arr, and a function,
// func, and calls func with the first index of the arr, the index # and
// the whole array.
function firstVal(arr, func) {
  func(arr[0], index, arr);
}

// Change firstVal to work not only with arrays but also objects. Since objects
// are not ordered, you can use any key-value pair on the object.

function firstVal(arg, func) {
  if(Array.isArray(arg) == Array) {
    func(arr[0], index, arr);
  }
  if(arr.constructor == Object) {
  func(arg[key], key, arg);
}
}

// [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once)
// that takes a function and returns a version of that function which can only
//be called once. [Hint: you need a closure] You probably don't want to be able
// to double charge someone's credit card. Here is an example of how to use it:

//var chargeCreditCard = function(num, price){
  //charges credit card for a certain price
//};
//var processPaymentOnce = once(chargeCreditCard);
//processPaymentOnce(123456789012, 200);



_.once = function(func) {
  var hasBeenCharged = false;
  var result;
  return { function() {
    if(!hasBeenCharged) {
    result = func.apply(this, arguments);
    hadBeenCharged = true;
  }
  return result;
}
};
}
