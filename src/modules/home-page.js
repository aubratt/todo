import { projects } from "./project.js";
import checkCircle from "../images/check-circle.svg";
import circle from "../images/circle.svg";
import rightArrowSvg from "../images/right-arrow.svg";
import { showProjectPage } from "./project-page.js";

const content = document.getElementById("content");

export function showHomepage() {
  removeExistingHomepage();

  const homepage = document.createElement("div");
  const myProjects = document.createElement("div");
  const myProjectsHeading = document.createElement("h2");
  const allTasks = document.createElement("div");
  const allTasksHeading = document.createElement("h2");

  homepage.id = "homepage";
  myProjects.id = "my-projects";
  myProjectsHeading.textContent = "My Projects";

  allTasks.id = "all-tasks";
  allTasksHeading.textContent = "All Tasks";

  content.appendChild(homepage);

  homepage.appendChild(myProjects);
  homepage.appendChild(allTasks);

  myProjects.appendChild(myProjectsHeading);
  projects.forEach((project) => {
    myProjects.appendChild(createProjectListItem(project));
  });

  allTasks.appendChild(allTasksHeading);
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTasks.appendChild(createTaskListItem(task));
    });
  });
}

function removeExistingHomepage() {
  const existingHomepage = document.getElementById("homepage");
  if (existingHomepage !== null) {
    content.removeChild(existingHomepage);
  }
}

function createProjectListItem(project) {
  const projectContainer = document.createElement("div");
  const projectLeft = document.createElement("div");
  const projectName = document.createElement("p");
  const projectRight = document.createElement("div");
  const taskCount = document.createElement("p");
  const rightArrow = document.createElement("img");

  projectContainer.classList.add("project");
  projectLeft.classList.add("project-left");
  projectName.classList.add("project-name");
  projectRight.classList.add("project-right");
  taskCount.classList.add("task-count");
  rightArrow.classList.add("right-arrow");

  projectName.textContent = project.name;
  taskCount.textContent = project.tasks.length;
  rightArrow.src = rightArrowSvg;

  projectContainer.addEventListener("click", () => {
    removeExistingHomepage();
    showProjectPage(project);
  }); 

  projectContainer.appendChild(projectLeft);
  projectContainer.appendChild(projectRight);

  projectLeft.appendChild(projectName);

  projectRight.appendChild(taskCount);
  projectRight.appendChild(rightArrow);

  return projectContainer;
}

export function createTaskListItem(task) {
  const taskContainer = document.createElement("div");
  const taskTop = document.createElement("div");
  const checkBox = document.createElement("img");
  const taskTitle = document.createElement("p");
  const taskPriority = document.createElement("span");
  const taskBottom = document.createElement("div");
  const dueDate = document.createElement("p");
  const projectName = document.createElement("p");

  taskContainer.classList.add("task");
  taskTop.classList.add("task-top");
  checkBox.classList.add("check-box");
  taskTitle.classList.add("title");
  taskPriority.classList.add("priority");
  taskBottom.classList.add("task-bottom");
  dueDate.classList.add("due-date");
  projectName.classList.add("project-name");

  checkBox.src = circle;
  taskPriority.textContent = task.priority;
  taskTitle.textContent = task.title;
  dueDate.textContent = task.dueDate;
  projectName.textContent = task.project.name;

  checkBox.addEventListener("click", () => {
    toggleTaskCheckBox(checkBox);
    toggleTaskCompleted(task);
  });

  taskContainer.appendChild(taskTop);
  taskContainer.appendChild(taskBottom);

  taskTop.appendChild(checkBox);
  taskTop.appendChild(taskPriority);
  taskTop.appendChild(taskTitle);

  taskBottom.appendChild(dueDate);
  taskBottom.appendChild(projectName);

  return taskContainer;
}

function toggleTaskCheckBox(checkBox) {
  if (checkBox.src === circle) {
    checkBox.src = checkCircle;
  } else {
    checkBox.src = circle;
  }
}

function toggleTaskCompleted(task) {
  if (task.isCompleted === false) {
    task.isCompleted = true;
  } else {
    task.isCompleted = false;
  }
}


