let total = 0;
let completed = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");

  li.textContent = input.value;

  li.onclick = () => {
    li.classList.toggle("completed");
    completed = document.querySelectorAll(".completed").length;
    updateCounter();
  };

  document.getElementById("taskList").appendChild(li);

  total++;
  updateCounter();
  input.value = "";
}

function updateCounter() {
  document.getElementById("counter").innerText =
    `Total: ${total} | Completed: ${completed}`;
}
