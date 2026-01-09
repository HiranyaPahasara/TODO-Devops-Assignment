let count = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");

  li.textContent = input.value;

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  document.getElementById("taskList").appendChild(li);

  count++;
  document.getElementById("counter").innerText = "Tasks: " + count;

  input.value = "";
}
