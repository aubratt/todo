import { projects } from "./project";

export const priorityLevels = ["low", "medium", "high"];

export class Task {
  constructor(title, description, dueDate, priority, isCompleted) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevels[priority];
    this.isCompleted = isCompleted;
  }

  deleteTask() {
    const index = projects[this.projectIndex].tasks.indexOf(this);
    projects[this.projectIndex].tasks.splice(index, 1);

    // REMOVE from localStorage
    localStorage.setItem("projects", JSON.stringify(projects));
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

export function getProjectTaskList(project) {
  const projectTaskList = [];

  project.tasks.forEach((task) => {
    if (!task.isCompleted) projectTaskList.push(task);
  });

  return projectTaskList;
}

export function getProjectCompletedTaskList(project) {
  const projectCompletedTaskList = [];

  project.tasks.forEach((task) => {
    if (task.isCompleted) projectCompletedTaskList.push(task);
  });

  return projectCompletedTaskList;
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
