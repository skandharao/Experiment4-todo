// Application State
let tasks = [];

// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to display tasks
function renderTasks() {

    // Clear the current list
    taskList.innerHTML = "";

    // Display each task
    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        // Display task text
        li.textContent = task;

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {

            const newTask = prompt("Edit your task:", tasks[index]);

            if (newTask !== null && newTask.trim() !== "") {

                tasks[index] = newTask.trim();

                renderTasks();
            }
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            renderTasks();
        });

        // Add buttons to the list item
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Add list item to the webpage
        taskList.appendChild(li);
    });
}


// Add task when Add button is clicked
addButton.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task !== "") {

        // Update application state
        tasks.push(task);

        // Clear input box
        taskInput.value = "";

        // Update the webpage
        renderTasks();
    }
});


// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addButton.click();
    }
});