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

// Return an array of the first n elements of an array. If n is undefined,
//  return just the first element.


_.first = function(array, n) {
  if(n === undefined) {
    return array[0];
  } else {
    return array.slice(0,n);
  }
};


// Like first, but for the last elements. If n is undefined, return just the
// last element.

_.last = function(array, n) {
  if(n===undefined) {
    return array[array.length -1];
  } else {
    return array.slice(Math.max(0, array.length-n));
  }
};

// Call iterator(value, key, collection) for each element of collection.
 // Accepts both arrays and objects.
 //
 // Note: _.each does not have a return value, but rather simply runs the
 // iterator function over each item in the input collection.

 _.each = function(collection, iterator) {
   if (Array.isArray(collection)) {
     for(var i = 0; i<collection.length; i++) {
       var index = i;
       iterator(collection[i], index, collection);
     }
   } else {
     for (var key in collection) {
       iterator(collection[key], key, collection);
     }
   }
 };

 // Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.

_.indexOf = function(array, target) {
    var result = -1;
    _.each(array, function(item, index) {
      if (item == target && result == -1) {
        result = index;
      }
    });
  return result;
}


  // Return all elements of an array that pass a truth test.

_.filter = function(collection, test) {
  var filtered = [];
  _.each(collection, function(item) {
      if(test(item)) {
        filtered.push(item);
      }
  });
  return filtered;
}


  // Return all elements of an array that don't pass a truth test.
  // TIP: see if you can re-use _.filter() here, without simply
  // copying code in and modifying it
_.reject = function(collection, test) {
  var reverse = function(x) {
    return !test(x);
  };
  return _.filter(collection, reverse);

}


  // Produce a duplicate-free version of the array.

_.uniq = function(array) {
  var uniqueStorage = {};
  var results = [];
  _.each(array, function(item) {
    uniqueStorage[item] = item;
  });
  _.each(uniqueStorage, function(prop) {
    results.push(prop);
  });
  return results;
};



// Return the results of applying an iterator to each element.
// map() is a useful primitive iteration function that works a lot
// like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
_.map = function(collection, iterator) {
  var mapped = [];
  _.each(collection, function(item) {
    mapped.push(iterator(item));
  });
  return mapped;
};


// Takes an array of objects and returns and array of the values of
// a certain property in it. E.g. take an array of people and return
// an array of just their ages
_.pluck = function(array, propertyName) {
  return _.map(array, function(value) {
    return value[propertyName];
  });
};


// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// Example:
//   var numbers = [1,2,3];
//   var sum = _.reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
//
//   var identity = _.reduce([5], function(total, number){
//     return total + number * number;
//   }); // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.

_.reduce = function(collection, iterator, accumulator) {
  var result = function() {
    return accumulator == null ? collection[0] : accumulator;
  }();

  _.each(collection, function(value) {
    result = iterator(result, value);
  });
  return result;
}


// Determine if the array or object contains a given value (using `===`).
// TIP: Many iteration problems can be most easily expressed in
// terms of reduce().

_.contains = function(collection, target) {
  return _.reduce(collection, function(wasFound, item) {
    if(wasFound) {
      return true;
    }
      return item === target;
    }, false);
};

_.contains = function(collection, target) {
  return _.reduce(collection, function(wasFound, item) {
    if(wasFound) {return true;}
    return item === target;
  }, false);
};

// PK testing -- yo it works!!!
array = [1,2,3,4,5];
target = 5;
array.reduce(function(wasFound, item) { var target = 5;
  if(wasFound) {return true;}
  return item === target;
}, false);

  // Determine whether all of the elements match a truth test.
 // TIP: Try re-using reduce() here.
_.every = function(collection, iterator) {
  var test = function() {
    return iterator == null ? _.identity || iterator;
  }();

  return _.reduce(collection, function(starter, value) {
    if(test(value) && starter) {
      return true;
    }
      return false;
  }, true);
};

// Determine whether any of the elements pass a truth test. If no iterator is
// provided, provide a default one
    // TIP: There's a very clever way to re-use every() here.
_.some = function(collection, iterator) {
  var test = function() {
    return iterator == null ? _.identity || iterator;
  }();

  return !_.every(collection, function(value) {
    return !test(value);
  });
};
