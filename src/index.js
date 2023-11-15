//const createTaskFormTag = document.querySelector("#create-task-form")
//console.log(createTaskFormTag);
// const form = document.getElementById("form");
// const taskText = document.getElementById("#new-task-description")
// const 


document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("submit", function subClick(event)
  {event.preventDefault();
    // Identify the input element with the ID "new-task-description"
    const taskText = document.getElementById("#new-task-description");
    //identify the element with the ID "tasks", where want it to be stored
    const taskList = document.getElementById("#tasks");
    //Create a new <li></li> element within the element with id = "tasks"
    const newTask = document.createElement("li");
    //assigning the value of the 'taskText' to the the newTask <li> element
    newTask.textContent = taskText.value;
    // Append the newTask <li> element to the taskList element
    taskList.appendChild(newTask)
  }
))
