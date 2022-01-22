export class todoObject {

    constructor(title, description, dueDate, priority, isComplete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = isComplete;
    }

    changeStatus() {
        this.status = !this.status;
    }
}


/**
 * Goal: to make the basic app and then progressively add features
 */

export function addTodo() {
    let title = prompt("Please Enter the Title", "Title")
    let description = prompt("Please Enter the Description", "Description")
    let dueDate = prompt("Please Enter the Due Date", "Due Date")
    let priority = prompt("Please Enter the Priority", "Low")

    let newTodo = new todoObject(title, description, dueDate, priority);

    return newTodo;
}
