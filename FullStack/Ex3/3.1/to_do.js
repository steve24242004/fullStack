function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span> <button onclick="removeTask(this)">X</button>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}