import { Project, projects } from "./project.js";

const addButton = document.getElementById("add");
const addButtonsOverlay = document.getElementById("add-buttons-overlay");
const addButtonsContainer = document.getElementById("buttons-container");

const newProjectButton = document.getElementById("new-project");
const newProjectFormOverlay = document.getElementById(
  "new-project-form-overlay"
);
const newProjectFormContainer = document.getElementById(
  "new-project-form-container"
);
const cancelNewProjectButton = document.getElementById("cancel-new-project");
export const createNewProjectButton = document.getElementById("create-project");
const newProjectName = document.getElementById("new-project-name");

const newTaskButton = document.getElementById("new-task");
const newTaskFormOverlay = document.getElementById("new-task-form-overlay");
const newTaskFormContainer = document.getElementById("new-task-form-container");
const cancelNewTaskButton = document.getElementById("cancel-new-task");
export const createNewTaskButton = document.getElementById("create-task");
const newTaskTitle = document.getElementById("new-task-title");
const newTaskDescription = document.getElementById("new-task-description");
const newTaskDueDate = document.getElementById("new-task-due-date");
const newTaskPriority = document.getElementById("new-task-priority");
const newTaskProject = document.getElementById("new-task-project");

function showAddButtonsOverlay() {
  addButtonsOverlay.style.display = "block";
}

function hideAddButtonsOverlay() {
  addButtonsOverlay.style.display = "none";
}

function showNewProjectForm() {
  newProjectFormOverlay.style.display = "block";
}

function hideNewProjectForm() {
  newProjectFormOverlay.style.display = "none";
}

function showNewTaskForm() {
  newTaskFormOverlay.style.display = "block";
}

function hideNewTaskForm() {
  newTaskFormOverlay.style.display = "none";
}

function addNewProjectToProjects() {
  projects.push(new Project(newProjectName.value));
}

function addNewTaskToProjectTasks() {
  projects[newTaskProject.selectedIndex].addNewTask(
    newTaskTitle.value,
    newTaskDescription.value,
    newTaskDueDate.value,
    newTaskPriority.selectedIndex
  );
}

addButton.addEventListener("click", showAddButtonsOverlay);

newProjectButton.addEventListener("click", showNewProjectForm);
newProjectButton.addEventListener("click", hideAddButtonsOverlay);
cancelNewProjectButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideNewProjectForm();
});
createNewProjectButton.addEventListener("click", function (event) {
  event.preventDefault();
  addNewProjectToProjects();
});

newTaskButton.addEventListener("click", showNewTaskForm);
newTaskButton.addEventListener("click", hideAddButtonsOverlay);
cancelNewTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideNewTaskForm();
});
createNewTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  addNewTaskToProjectTasks();
});

window.onclick = function (event) {
  if (
    event.target.contains(addButtonsContainer) &&
    event.target !== addButtonsContainer
  ) {
    hideAddButtonsOverlay();
  }

  if (
    event.target.contains(newProjectFormContainer) &&
    event.target !== newProjectFormContainer
  ) {
    hideNewProjectForm();
  }

  if (
    event.target.contains(newTaskFormContainer) &&
    event.target !== newTaskFormContainer
  ) {
    hideNewTaskForm();
  }
};
