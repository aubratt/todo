import { showProjectPage } from "./project-page.js";
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

function clearNewProjectForm() {
  newProjectName.value = "";
}

function addNewProjectToProjects() {
  projects.push(new Project(newProjectName.value));
}

function createNewTaskProjectOptionsItem(project) {
  const newOption = document.createElement("option");
  newOption.value = project.name.toLowerCase();
  newOption.textContent = project.name;

  return newOption;
}

function populateNewTaskProjectOptionsList() {
  newTaskProject.replaceChildren();
  projects.forEach(project => {
    newTaskProject.appendChild(createNewTaskProjectOptionsItem(project));
  });
}

function showNewTaskForm() {
  populateNewTaskProjectOptionsList();
  newTaskFormOverlay.style.display = "block";
}

function hideNewTaskForm() {
  newTaskFormOverlay.style.display = "none";
}

function clearNewTaskForm() {
  newTaskTitle.value = "";
  newTaskDescription.value = "";
  newTaskDueDate.value = "";
  newTaskPriority.selectedIndex = 0;
  newTaskProject.selectedIndex = 0;
}

function addNewTaskToProjectTasks() {
  projects[newTaskProject.selectedIndex].addNewTask(
    newTaskTitle.value,
    newTaskDescription.value,
    newTaskDueDate.value,
    newTaskPriority.selectedIndex
  );
}

function goToProjectPage() {
  const newProjectIndex = projects[projects.length - 1];
  showProjectPage(newProjectIndex);
}

addButton.addEventListener("click", showAddButtonsOverlay);

newProjectButton.addEventListener("click", showNewProjectForm);
newProjectButton.addEventListener("click", hideAddButtonsOverlay);
cancelNewProjectButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideNewProjectForm();
  clearNewProjectForm();
});
createNewProjectButton.addEventListener("click", function (event) {
  event.preventDefault();
  addNewProjectToProjects();
  hideNewProjectForm();
  clearNewProjectForm();
  goToProjectPage();
});

newTaskButton.addEventListener("click", showNewTaskForm);
newTaskButton.addEventListener("click", hideAddButtonsOverlay);
cancelNewTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideNewTaskForm();
  clearNewTaskForm();
});
createNewTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  addNewTaskToProjectTasks();
  hideNewTaskForm();
  clearNewTaskForm();
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
    clearNewProjectForm();
  }

  if (
    event.target.contains(newTaskFormContainer) &&
    event.target !== newTaskFormContainer
  ) {
    hideNewTaskForm();
    clearNewTaskForm();
  }
};
