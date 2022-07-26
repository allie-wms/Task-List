let tasks = new TaskManager();

const newTaskNameInput = document.getElementById('task-name');
const newTaskDescriptionInput = document.getElementById('task-description');
const newAssignedInput = document.getElementById('assigned-to');
const newDueDateInput = document.getElementById('due-date');

//4.2
function submitButton() {
const validFormFieldInput = (e) => {
    e.preventDefault();
    
    const name = newTaskNameInput.value;
    const description = newTaskDescriptionInput.value;
    const assigned = newAssignedInput.value;
    const dueDate = newDueDateInput.value;

    tasks.addTask(name, description, assigned, dueDate);
    tasks.render();
    tasks.save();


    document.getElementById("myForm").reset();
};
//4.3
/*function submitButton() {*/
  
document.getElementById("button").addEventListener("click", function() {
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
      document.getElementById("error").innerHTML = ``;
  }
})
};

const taskList = document.getElementById('taskList');











/*function validFormFieldInput(data) {
    return console.log(data)
}

const newTaskNameInput = document.getElementById(taskname);
const name = newTaskNameInput.value;

const newTaskDescriptionInput = document.getElementById(taskdescription);
const description = newTaskDescriptionInput.value;

const newAssignedTo = document.getElementById(assignedto);
const assigned = newAssignedTo.value;*/