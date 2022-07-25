//6.1
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    let doneButtonVisibility = 'visible'; 
    if (status === "Done") {
        doneButtonVisibility = 'invisible';
    }
    return `<li id="taskCard" class="list-group-item" data-task-id="3">
    <div class="card-body" id="data-task-id">
        <div class="alignment">
            <p class="card-text">
                <span class="fw-bold">${name}</span>
            </p>
            <button type="button">Mark as Done</button>
        </div>
        <p class="card-text">
            <span class="fw-bold">${description}</span>
        </p>
        <p class="card-text">
            <span class="fw-bold">${assignedTo}</span>
        </p>
        <p class="card-text">
            <span class="fw-bold">${dueDate}</span>
        </p>
        <div class="alignment">
            <p class="card-text">
            <span class="fw-bold"> ${status}</span>
            </p>
            <div class="move">
                <button type="button" class="btn btn-danger delete-button">Delete</button>
            </div>
        </div>
    </div>
</li> `
}

// 5.2
class TaskManager {
    constructor(tasks, currentId) {
        this.tasks = [];
        this.currentIDd = 0;
    } //5.3
    addTask(name, description, assignedTo, dueDate, status = "ToDo") {
        this.currentId++;
        const newTask = {
       id: this.currentID++,
       name,
       description,
       assignedTo,
       dueDate,
       status
    };
    this.tasks.push(newTask);
}
//6.2 - not finished
    render() {
        const taskHtmlList = [];
    }
}

