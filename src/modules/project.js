import { Task } from "./task.js";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    let newTask = new Task(title, description, dueDate, priority);
    newTask.project = this;
    this.tasks.push(newTask);
  }

  deleteProject(projects) {
    const index = projects.indexOf(this);
    projects.splice(index, 1);
  }
}

export const projects = [];

export function createNewProject(projectName) {
  const project = new Project(projectName);

  return project;
}

export function pushProject(project) {
  projects.push(project);
}

export function renameProject(project, projectName) {
  project.name = projectName;
}

const defaultProject = createNewProject("Tasks");
defaultProject.addNewTask("Demo task", "Demo description", "10/24/25", 0);
pushProject(defaultProject);
