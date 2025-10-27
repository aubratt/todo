import { Task } from "./task.js";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    let newTask = new Task(title, description, dueDate, priority);
    newTask.project = this.name;
    this.tasks.push(newTask);
  }
}

export const projects = [];

const defaultProject = new Project("Tasks");
defaultProject.addNewTask("Demo task", "Demo description", "10/24/25", 0);

projects.push(defaultProject);

console.log(projects);