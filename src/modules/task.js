const priorityLevels = ["low", "medium", "high"];

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevels[priority];
    this.isCompleted = false;
  }

  saveTask(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  deleteTask() {
    const index = this.project.tasks.indexOf(this);
    this.project.tasks.splice(index, 1);
  }
}
