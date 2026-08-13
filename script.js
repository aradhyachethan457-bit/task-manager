const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const task = input.value;

    if (task !== "") {
        console.log("Task added:", task);
        input.value = "";
    }
});