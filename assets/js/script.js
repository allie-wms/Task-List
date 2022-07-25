let tasks = new TaskManager();

const validFormFieldInput = (e) => {
    e.preventDefault();
    const name = newTaskNameInput.value;
    const description = newTaskDescriptionInput.value;
    const assigned = newAssignedInput.value;
    const dueDate = newDueDate.value;

    tasks.addTask(name, description, assigned, dueDate);
    tasks.render();
    tasks.save();

    document.getElementById("myForm").reset();
};

document.getElementById("button").addEventListener("click", function() {
    const name = newTaskNameInput.value;
    const description = newTaskDescriptionInput.value;
    const assigned = newAssignedInput.value;
    const dueDate = newDueDateInput.value;

    if (name === "") {
        document.getElementById("error").innerHTML = '<div id="error" class="alert alert-primary" role="alert"> Please input name field! </div>'; 
    } else if (description === "") {
        document.getElementById("error").innerHTML = 'div id="error" class="alert alert-primary" role="alert"> Please input description field! </div>';
    } else if (assigned === "") {document.getElementById("error").innerHTML = 'div id="error" class="alert alert-primary" role="alert"> Please input assigned field! </div>';
  } else if (dueDate === "") {
      document.getElementById("error").innerHtml = 'div id="error" class="alert alert-primary" role="alert"> Please input Due Date field! </div>';
  } else {
      document.getElementById("error").innerHTML = ``;
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