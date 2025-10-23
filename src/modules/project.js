import { Task } from "./task.js";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    let newTask = new Task(title, description, dueDate, priority);
    this.tasks.push(newTask);
  }
}