import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

class Task {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

const tasks = [];

// Adding a predefined task to the tasks array
function addTaskToTasksArray(task) {
  tasks.push(task);
}

const newTask = new Task("Task Title");
addTaskToTasksArray(newTask);

console.log(tasks);


