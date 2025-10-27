const priorityLevels = ["!", "!!", "!!!"];

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevels[priority];
    this.isCompleted = false;
  }
}