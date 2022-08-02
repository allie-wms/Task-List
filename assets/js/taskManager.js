//6.1
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    let doneButtonVisibility = 'visible'; 
    if (status === "Done") {
        doneButtonVisibility = 'invisible';
    }
    return `<li id="taskCard" class="list-group-item" data-task-id="${id}">
    <div class="card-body" id="data-task-id">

    <button type="button" class="done-button">Mark As Done</button>
        <div class="alignment">
            <p class="card-text">
                <span class="fw-bold">${name}</span>
            </p>
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
export default class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    } //5.3
    addTask(name, description, assignedTo, dueDate, status = "ToDo") {
        const newTask = {
       id: this.currentId++,
       name: name,
       description: description,
       assignedTo: assignedTo,
       dueDate: dueDate,
       status: status
    };

    this.tasks.push(newTask);
}
//6.2 - not finished
    render() {
        const taskHtmlList = [];

        for (let task of this.tasks) {
    
            const taskHtml = createTaskHtml(
                task.name,
                task.description,
                task.assignedTo,
                task.dueDate,
                task.status,
                task.id
            );
            taskHtmlList.push(taskHtml);
            const tasksHtml = taskHtmlList.join("")
            document.getElementById('task-list').innerHTML = tasksHtml;
        }    
    } 
        getTaskById(taskId) {
    
            let foundTask = this.tasks.filter(task => {
                if (task.id == taskId) {
                    return task;
                }
            })

          
        
            return foundTask;
        }
     }
    
   



