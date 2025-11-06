import { correctDate, Task } from "./task.js";
import { format } from "date-fns";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    const correctedDueDate = correctDate(dueDate);

    let newTask = new Task(
      title,
      description,
      format(correctedDueDate, "MM/dd/yyyy"),
      priority
    );
    newTask.project = this;
    this.tasks.push(newTask);
  }

  deleteProject(projects) {
    const index = projects.indexOf(this);

    if (projects.length === 1) {
      return false;
    } else {
      projects.splice(index, 1);
      return true;
    }
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
defaultProject.addNewTask("Demo task", "Demo description", new Date(), 0);
pushProject(defaultProject);
