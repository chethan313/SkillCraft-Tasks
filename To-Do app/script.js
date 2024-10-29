const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    const taskContent = document.createElement("span");
    taskContent.textContent = `${taskText} - Due: ${new Date(dateTime).toLocaleString()}`;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => taskItem.classList.toggle("completed");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = () => editTask(taskItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(taskItem);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskDate.value = "";
}

function editTask(taskItem) {
    const taskContent = taskItem.querySelector("span").textContent.split(" - Due: ")[0];
    taskInput.value = taskContent;
    taskList.removeChild(taskItem);
}
