import { format } from "date-fns";

const priorityLevels = ["low", "medium", "high"];

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevels[priority];
    this.isCompleted = false;
  }

  deleteTask() {
    const index = this.project.tasks.indexOf(this);
    this.project.tasks.splice(index, 1);
  }
}

export function correctDate(date) {
  const correctedDate = new Date(date);
  correctedDate.setHours(correctedDate.getHours() + 6);
  correctedDate.setHours(0, 0, 0, 0);

  return correctedDate;
}