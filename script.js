// select element from the HTML
//Note: we use the 'getElementById' to grab the HTML elements associated to the ids in HTML

const taskInput = document.getElementById('task-input'); //Input field 
const addTaskButton = document.getElementById('add-task-button'); //Add task button
const taskList = document.getElementById('task-list'); //Task list

// retrieve tasks from local storage or start with an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function to create and display task
function displayTask(taskText) {

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        tasks = tasks.filter(task => task !== taskText); // removes task from array
        saveTasks(); //updates local storage
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}

// function to add a new task

function addTask() {
    const taskText = taskInput.value.trim(); // this gets the input value and removes extra spaces

    if(taskText !== "") { //this is making sure empty data cannot be entered
       tasks.push(taskText);    // add task to array
       saveTasks();             //Save to local storag
       displayTask(taskText);   // Display on page
       taskInput.value = "";    // Clear input
    } 
    else {
        alert("Please enter a task!"); // Alert if input is empty
    }
}

// Load saved task when page loads
tasks.forEach (displayTask);

// Event listener for clicking the "add task" button
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') addTask();
});