function addTask() {
    let taskInput = document.getElementById("usn-box");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center xyz";
    listItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button type="button" class="fa fa-close" onclick="removeTask(this)"></button>
    `;

    // Append list item to task list
    taskList.insertBefore(listItem, taskList.firstChild);

    // Save task to local storage
    saveTaskToLocalstorage(taskInput.value);

    // Clear input
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    let listItem = button.parentElement;
    let taskText = listItem.querySelector("span").innerText;

    // Remove task from local storage
    removeTaskFromLocalStorage(taskText);

    // Remove task from the UI
    listItem.remove();
}

// Function to save a task to local storage
function saveTaskToLocalstorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Function to load tasks from local storage on page load
function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(function (task) {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center xyz";
        listItem.innerHTML = `
            <span>${task}</span>
            <button type="button" class="fa fa-close" onclick="removeTask(this)"></button>
        `;
        taskList.appendChild(listItem);
    });
}

// Load tasks from local storage on page load
window.onload = loadTasksFromLocalStorage;