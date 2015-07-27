/*

[Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that
  takes a function and returns a version of that function which can only be
  called once. [Hint: you need a closure] You probably don't want to be able to
  double charge someone's credit card. Here is an example of how to use it:

  var chargeCreditCard = function(num, price){
    //charges credit card for a certain price
  };
  var processPaymentOnce = once(chargeCreditCard);
  processPaymentOnce(123456789012, 200);

*/

function once(func) {
  var alreadyCalled = false;
  var result;
  return function() {
    if(!alreadyCalled) {
    result = func.apply(this, arguments);
    alreadyCalled = true;
  }
  return result;
};
}

/* Return an array of the first n elements of an array. If n is undefined,
  return just the first element.
