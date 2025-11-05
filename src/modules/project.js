import { Task } from "./task.js";
import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priority) {
    const formattedDueDate = new Date(dueDate);
    formattedDueDate.setHours(formattedDueDate.getHours() + 6);
    formattedDueDate.setHours(0, 0, 0, 0);

    let newTask = new Task(
      title,
      description,
      format(formattedDueDate, "MM/dd/yyyy"),
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
