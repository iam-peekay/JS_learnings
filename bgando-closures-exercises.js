// Write a function, nonsense that takes an input string. This function contains
// another function, blab which alerts string and is immediately called inside
// the function nonsense. blab should look like this inside of the nonsense
// function:

// var blab = function(){
//   alert(string);
//  };

function nonsense(string) {
  var blab = function() {
    alert(string);
  }();
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
      addWords: function(string1) {
        story += string1;
        return console.log(story);
      },
      erase: function() {
        story = '';
        return console.log(story);
      }
    };
  };

// Using the module pattern, design a toaster. Use your creativity here and
// think about what you want your users to be able to access on the outside of
// your toaster vs what you don't want them to be able to touch.
// TBU

var Toaster = function(){
    //some private methods and properties

    return {
      //some public methods and properties, etc
    };
};
