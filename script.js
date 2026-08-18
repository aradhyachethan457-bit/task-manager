console.log("Urgent bug fix");

const input = document.querySelector("input");
const button = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
const priority = document.querySelector("#priority");

button.addEventListener("click", function () {
    const task = input.value;
    const taskPriority = priority.value;

    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = `${task} - Priority: ${taskPriority}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        });

        li.appendChild(completeButton);

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        input.value = "";
    }
});