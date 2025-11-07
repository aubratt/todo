import { projects } from "./project";

export const priorityLevels = ["low", "medium", "high"];

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

export function getMasterTaskList() {
  const masterTaskList = [];

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (!task.isCompleted) masterTaskList.push(task);
    });
  });

  return masterTaskList;
}

export function getMasterCompletedTaskList() {
  const completedTaskList = [];

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.isCompleted) completedTaskList.push(task);
    });
  });

  return completedTaskList;
}

export function sortByDate(taskList) {
  const sortedByPriority = taskList.sort(
    (a, b) =>
      priorityLevels.indexOf(b.priority) - priorityLevels.indexOf(a.priority)
  );
  const sortedByDate = sortedByPriority.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  return sortedByDate;
}

export function sortByPriority(taskList) {
  const sortedByDate = taskList.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );
  const sortedByPriority = sortedByDate.sort(
    (a, b) =>
      priorityLevels.indexOf(b.priority) - priorityLevels.indexOf(a.priority)
  );

  return sortedByPriority;
}
