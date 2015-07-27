// Write a function, nonsense that takes an input string. This function contains
// another function, blab which alerts string and is immediately called inside
// the function nonsense. blab should look like this inside of the nonsense
// function:

// var blab = function(){
//   alert(string);
//  };

function nonsense(string) {
    var blab = setTimeout(function() {
      alert(string);
    }, 2000);
    return blab;

}

function nonsense(string) {
  var blab = function() {
    alert(string);
  };

  return blab();
}

// In your function, nonsense, change the immediate call to a setTimeout so
// that the call to blab comes after 2 seconds. The blab function itself should
// stay the same as before.

function nonsense(string) {
  var blab = setTimeout(function() {
    alert(string);
  }, 2000);
}

// Now, instead of calling blab inside of nonsense, return blab (without
// invoking it). Call nonsense with some string and store the returned value
// (the blab function) in a variable called blabLater. Call nonsense again with
// a different string and store the returned value in a variable called
// blabAgainLater.

function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}

var blabLater = nonsense('first try!');
var blabAgainLater = nonsense('second try!');

// Write a function with a closure. The first function should only take one
// argument, someone's first name, and the inner function should take one more
//argument, someone's last name. The inner function should console.log both
// the first name and the last name.

// var lastNameTrier = function(firstName){
   //does stuff

//    var innerFunction = function() {
        //does stuff
  //  };
    //maybe returns something here
// };
// var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
// firstNameFarmer('Brown'); //logs 'Farmer Brown'

var lastNameTrier = function(firstName) {

  var innerFunction = function(lastName) {
    console.log(firstName + lastName)
  };
  return innerFunction;
};

// Create a storyWriter function that returns an object with two methods.
// One method, addWords adds a word to your story and returns the story while
// the other one, erase, resets the story back to an empty string. Here is an
// implementation:

// var farmLoveStory = storyWriter();
// farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
// farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// var storyOfMyLife = storyWriter();
// storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// storyOfMyLife.erase(); // ''

function storyWriter() {
  var story = '';
  return {
    addWords: function(str1) {
      story += str1;
      console.log(story);
    },

    eraseWords: function() {
      story = '';
      console.log(story);
    }

  }
}



function storyWriter() {
    var story = '';
    return {
      addWords: function(string1) {
        story += string1;
        return console.log(story);
      },
      erase: function() {
        story = '';
        return console.log(story);
      }
    };
  }

// Using the module pattern, design a toaster. Use your creativity here and
// think about what you want your users to be able to access on the outside of
// your toaster vs what you don't want them to be able to touch.
// TBU

var Toaster = function() {
  var heatRailsTemp = 0;
  function changeBy(val) {
    heatRailsTemp += val;
  }

    return {
      setHeat: function(input) {
        if(input === 'LOW') {heatrailsTemp = 100;}
        else if(input === 'HIGH') {heatrailsTemp = 250;}
        else if(input === 'MEDIUM') {heatrailsTemp = 200;}
        else {heatrailsTemp = 0;}
      }
    };
};


// [EXTRA CREDIT] Why doesn't the code below work? This is a function that
// should return an array of functions that console.log() each person's name
// as a string when invoked. Fiddle with this function and inspect how it
// works, then try to fix it using a closure. Be prepared to explain to a
// partner how it worked before, and how it works now with a closure.

//original - incorrect to be fixed

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0; i < nameArr.length; i++){
        resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
    };
    return resultArr;
};

//METHOD 1

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
      for(var i = 0; i < nameArr.length; i++){
        resultArr.push(
          (function(j) {
            return function() {
              console.log('Is', nameArr[j], 'present?', j);
              }
            })(i)
            );
  }
      return resultArr;
};

//METHOD 2

function consoler(index1, value) {
  return function() {
    console.log('Is ' + index1 +  'present?', value);
  };
}

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
      for(var i = 0; i < nameArr.length; i++){
        resultArr.push(
          (consoler(i, nameArr[i])));
  }
      return resultArr;
};

//METHOD 3
var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
      for(var i = 0; i < nameArr.length; i++){
        (function() {
            var j = i;
              resultArr.push(function() {console.log('Is', nameArr[j], 'present?', j);
            });
          }());
        }
  }
      return resultArr;
};



// [EXTRA CREDIT] Write a function that takes another function* as an argument
//and creates a version of the function that can only be called one time.
//Repeated calls to the modified function will have no effect, returning the
//value from the original call. How could you do this without using a closure?
// Is it even possible? How could you do this with a closure?
// *Note: This original input function should not have any parameters

var myFunc = function(myNewFunc) {
  var alreadyCalled = false;
  var memo;
  return function() {
    if(alreadyCalled) { return memo; }
    alreadyCalled = true;
    memo = myNewFunc.apply(this, arguments);
    myNewFunc = null;
    return memo;
  };
};
