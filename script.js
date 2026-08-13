const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("#taskList");

button.addEventListener("click", function () {
    const task = input.value;

    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        input.value = "";
    }
});