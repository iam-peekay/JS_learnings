// Problem: User interaction doesn't provide desired results. 
//Solution: Add interactivity so the use can manage daily tasks
var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement('li');

  //input checkbox
  var checkBox = document.createElement('input'); // checkbox
  //label
  var label = document.createElement('label');
  //input (text)
  var editInput = document.createElement('input');
  //button.edit
  var editButton = document.createElement('button');
  //button.delete
  var deleteButton = document.createElement('button');
  // Each element needs modifying

  checkBox.type = 'checkbox';
  editInput.type = 'text';

  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  label.innerText = taskString;

  // Each element need appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

//Add a new task
var addTask = function() {
  console.log("Add task...");
  if(taskInput.value === '') { 
    quit;
  } else {
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTasksHolder

  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}
  taskInput.value = "Add a new task :)";
};


// Edit an existing task
var editTask = function() {
  console.log('Edit task...')

  var listItem = this.parentNode;

  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');

    var containsClass = listItem.classList.contains('editMode');
    var editButton = listItem.getElementsByTagName('button')[0];
    // if the class of the parent is .editMode
    

    if(containsClass) {
      //Switch from .editMode
      //label text become the input's value
      label.innerText = editInput.value;
      editButton.innerText = 'Edit';
    } else {
      //Switch .editMode
      //input value becomes the label's text
      editInput.value = label.innerText;
      editButton.innerText = 'Save';
    }

      //Toggle .editMode on the list item
    listItem.classList.toggle('editMode');


};

// Delete an existing task
var deleteTask = function() {
  console.log('Delete task...')

    var listItem = this.parentNode;
    var ul = listItem.parentNode;
        //Remove parent list item from the ul
    ul.removeChild(listItem);
};

// Mark a task as complete
var taskCompleted = function() {
  console.log('Task complete...')
  //When the checkbox is checked
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

// Mark a task as incomplete
var taskIncomplete = function() {
  console.log('Task incomplete task...')
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log('Bind list item events');
  //select taskListItem's children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');
  //bind .editTask to edit button

    //editButton.onclick = editTask;
  editButton.addEventListener('click', editTask);
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  //bind checkBoxEventHandler to the checkbox
  checkBox.onchange = checkBoxEventHandler;
};

var ajaxRequest = function() {
  console.log('AJAX Request');
};

//addButton.onclick = ajaxRequest;
//Set the click handler to the addTask function
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);



//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to the list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}




//cycle over completedTaskHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to the list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}


/* TO IMPORVE:
1) Dont allow for empty tasks to be added - Done
2) When the edit button is pressed and content is edited, it should change
 to "Save" vs. staying as edit.
*/
