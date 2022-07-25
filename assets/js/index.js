function validFormFieldInput(data) {

}

const button = document.getElementById('button')

/* button.addEventListener("click", () => console.log(taskName.value))*/ 

const taskName = document.getElementById('task-name');
const list = taskName.value;

const taskDescription = document.getElementById('task-description');
const description = taskDescription.value;

const assignedTo = document.getElementById('assigned-to');
const assignments = assignedTo.value;

function submitButton() {
    var x = document.getElementById("error");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
