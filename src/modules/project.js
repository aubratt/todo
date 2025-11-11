import { priorityLevels, Task } from "./task.js";
import { format } from "date-fns";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addNewTask(title, description, dueDate, priorityIndex, isCompleted) {
    const correctedDueDate = correctDate(dueDate);

    let newTask = new Task(
      title,
      description,
      format(correctedDueDate, "MM/dd/yyyy"),
      priorityIndex,
      isCompleted
    );
    newTask.projectIndex = this.index;
    this.tasks.push(newTask);
  }

  deleteProject(projects) {
    const index = projects.indexOf(this);

    if (projects.length === 1) {
      return false;
    } else {
      projects.splice(index, 1);

      // REMOVE from localStorage
      localStorage.setItem("projects", JSON.stringify(projects));

      return true;
    }
  }
}

function hasLocalStorageData() {
  return localStorage.length > 0;
}

export let projects = [];

if (hasLocalStorageData()) {
  projects.length = 0;

  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  storedProjects.forEach((project) => {
    const storedProject = createNewProject(project.name);
    pushProject(storedProject);

    project.tasks.forEach((task) => {
      storedProject.addNewTask(
        task.title,
        task.description,
        task.dueDate,
        priorityLevels.indexOf(task.priority),
        task.isCompleted
      );
    });
  });
} else {
  const defaultProject = createNewProject("Tasks");
  pushProject(defaultProject);
  defaultProject.addNewTask("Demo task", "Demo description", new Date(), 0);

  // SAVE to localStorage
  localStorage.setItem("projects", JSON.stringify(projects));
}

function correctDate(date) {
  const correctedDate = new Date(date);
  correctedDate.setHours(correctedDate.getHours() + 6);
  correctedDate.setHours(0, 0, 0, 0);

  return correctedDate;
}

export function createNewProject(projectName) {
  const project = new Project(projectName);

  return project;
}

export function pushProject(project) {
  projects.push(project);
  project.index = projects.indexOf(project);
}

export function renameProject(project, projectName) {
  project.name = projectName;
}

// TODO Add localStorage functionality...
//        - Maybe create a diagram (figjam?) to help visualize how a project/task should be stored and retrieved
//        - Focus on the create project/task UX rather than initializing with the default project
