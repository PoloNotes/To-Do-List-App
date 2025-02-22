// select element from the HTML
//Note: we use the 'getElementById' to grab the HTML elements associated to the ids in HTML

const taskInput = document.getElementById('task-input'); //Input field 
const addTaskButton = document.getElementById('add-task-button'); //Add task button
const taskList = document.getElementById('task-list'); //Task list

// function to add a new task

function addTask() {
    const taskText = taskInput.value.trim(); // this gets the input value and removes extra spaces

    if(taskText !== "") { //this is making sure empty data cannot be entered
        //Create a new list
        const listItem = document.createElement('li'); // This is create a new list element in HTML just like when i create <li> in HTML
        listItem.textContent = taskText; //adds the input text to the list item

        // Create a delete button for the task
        const deleteButton = document.createElement('button'); // This is creating a delete button for the task (so it can DO a delete)
        deleteButton.textContent = 'Delete'; //this is holding the information of 'Delete'
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem); // this remove the task when clicked
        });

        // Add the delete button to the list item
        listItem.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        taskInput.value = ""; // Clears the input field after adding the task
    } else {
        alert("Please enter a task!"); // Alert if input is empty
    }
}

// Event listener for clicking the "add task" button
addTaskButton.addEventListener('click', addTask);

// Event listener to allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addTask();
    }
});