import TaskManager from "./taskManager.js"
let tasks = new TaskManager();


const newTaskNameInput = document.getElementById('task-name');
const newTaskDescriptionInput = document.getElementById('task-description');
const newAssignedInput = document.getElementById('assigned-to');
const newDueDateInput = document.getElementById('due-date');
const dateHeader = document.getElementById('date');

const submitBtn = document.getElementById("submitBtn");
console.log(submitBtn);
//4.2
let date = new Date();
let formattedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
dateHeader.innerHTML = formattedDate;

function submitButton() {
//const validFormFieldInput = (e) => {
  //  e.preventDefault();
    
    const name = newTaskNameInput.value;
    console.log(name);
    const description = newTaskDescriptionInput.value;
    const assigned = newAssignedInput.value;
    const dueDate = newDueDateInput.value;
    console.log(dueDate);
    tasks.addTask(name, description, assigned, dueDate);
    console.log(tasks.tasks);
    //tasks.save();
    tasks.render();


// document.getElementById("myForm").reset();
};
//}

//4.3
function errorButton() {
 
    const name = newTaskNameInput.value;
    const description = newTaskDescriptionInput.value;
    const assigned = newAssignedInput.value;
    const dueDate = newDueDateInput.value;
    

    if (name === "") {
        document.querySelector('#error').innerHTML = `<div id="error" class="alert alert-danger" role="alert"> Please input name field! </div>`; 
    } else if (description === "") {
        document.getElementById("error").innerHTML = `<div id="error" class="alert alert-danger" role="alert"> Please input description field! </div>`;
    } else if (assigned === "") {document.getElementById("error").innerHTML = `<div id="error" class="alert alert-danger" role="alert"> Please input assigned field! </div>`;
  } else if (dueDate === "") {
      document.getElementById("error").innerHTML = `<div id="error" class="alert alert-danger" role="alert"> Please input Due Date field! </div>`;
  } else {
      document.getElementById("error").innerHTML = ``
      submitButton();
  }
}


document.getElementById("submitBtn").addEventListener("click", function() {
    errorButton();
});
const taskList = document.getElementById('taskList');
document.querySelector('taskList');


//7 2.1-4
const showInfo = document.querySelector ('#task-list');
showInfo.addEventListener('click',(event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = parentTask.dataset.taskId;
        const task = tasks.getTaskById(taskId);
        console.log(task);
        task.status = 'DONE';
        console.log(task.status);
        tasks.render();
    }
});






/*function validFormFieldInput(data) {
    return console.log(data)
}

const newTaskNameInput = document.getElementById(taskname);
const name = newTaskNameInput.value;

const newTaskDescriptionInput = document.getElementById(taskdescription);
const description = newTaskDescriptionInput.value;

const newAssignedTo = document.getElementById(assignedto);
const assigned = newAssignedTo.value;*/