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

    // Display every task
    tasks.forEach(function(task, index) {

        // Create list item
        const li = document.createElement("li");

        // Add task text
        li.textContent = task;

        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        // Delete task when button is clicked
        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            renderTasks();

        });

        // Add delete button to list item
        li.appendChild(deleteButton);

        // Add list item to webpage
        taskList.appendChild(li);
    });
}


// Add task when Add button is clicked
addButton.addEventListener("click", function() {

    const task = taskInput.value.trim();

    // Don't add an empty task
    if (task !== "") {

        // Add task to state
        tasks.push(task);

        // Clear input box
        taskInput.value = "";

        // Update webpage
        renderTasks();
    }

});

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});