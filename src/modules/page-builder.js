import * as element from "./element-factory";
import { projects } from "./project";
import { buildTaskInfoForm } from "./form-builder";

import checkCircle from "../images/check-circle.svg";
import circle from "../images/circle.svg";

const content = document.getElementById("content");

// HOMEPAGE

export function buildHomepage() {
  const homepage = element.generateHomepageContainer();
  const myProjects = element.generateMyProjectsContainer();
  const myProjectsHeading = element.generateSectionHeading("My Projects");
  const allTasks = element.generateAllTasksContainer();
  const allTasksHeading = element.generateSectionHeading("All Tasks");

  content.appendChild(homepage);

  homepage.appendChild(myProjects);
  homepage.appendChild(allTasks);

  myProjects.appendChild(myProjectsHeading);
  projects.forEach((project) => {
    const listItem = buildProjectListItem(project);
    myProjects.appendChild(listItem);
  });

  allTasks.appendChild(allTasksHeading);
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      const listItem = buildTaskListItem(project, task);
      allTasks.appendChild(listItem);
    });
  });
}

function buildProjectListItem(project) {
  const projectContainer = element.generateProjectListItemContainer();
  const nameContainer = element.generateProjectListItemNameContainer();
  const name = element.generateProjectListItemName(project.name);
  const taskCountContainer =
    element.generateProjectListItemTaskCountContainer();
  const taskCount = element.generateProjectListItemTaskCountNumber(
    project.tasks.length
  );
  const arrow = element.generateProjectListItemArrow();

  handleProjectClick(projectContainer, project);

  projectContainer.appendChild(nameContainer);
  projectContainer.appendChild(taskCountContainer);

  nameContainer.appendChild(name);

  taskCountContainer.appendChild(taskCount);
  taskCountContainer.appendChild(arrow);

  return projectContainer;
}

function hideHomepage() {
  const homepage = document.getElementById("homepage");
  content.removeChild(homepage);
}

// PROJECT PAGE

export function buildProjectPage(project) {
  const projectPage = element.generateProjectPageContainer();
  const projectHeading = element.generateProjectPageHeadingContainer();
  const projectHeadingLeft = element.generateProjectPageHeadingLeftContainer();
  const backHomeArrow = element.generateLeftArrow();
  const backHomeText = element.generateHomeText();
  const projectName = element.generateProjectName(project.name);
  const projectHeadingRight = element.generateProjectHeadingRightContainer();
  const addNewTaskButton = element.generateProjectPageAddNewTaskButton();
  const optionsButton = element.generateProjectPageOptionsButton();
  const projectTasks = element.generateProjectPageTasksListContainer();

  handleBackHomeClick(backHomeArrow, backHomeText);

  content.appendChild(projectPage);

  projectPage.appendChild(projectHeading);
  projectPage.appendChild(projectTasks);

  projectHeading.appendChild(projectHeadingLeft);
  projectHeading.appendChild(projectHeadingRight);

  projectHeadingLeft.appendChild(backHomeArrow);
  projectHeadingLeft.appendChild(backHomeText);
  projectHeadingLeft.appendChild(projectName);

  projectHeadingRight.appendChild(addNewTaskButton);
  projectHeadingRight.appendChild(optionsButton);

  project.tasks.forEach((task) => {
    const listItem = buildTaskListItem(project, task);
    projectTasks.appendChild(listItem);
  });
}

function handleBackHomeClick(arrow, text) {
  function onClick() {
    hideProjectPage();
    buildHomepage();
  }
  arrow.addEventListener("click", onClick);
  text.addEventListener("click", onClick);
}

function hideProjectPage() {
  const projectPage = document.getElementById("project-page");
  content.removeChild(projectPage);
}

// UTILS

function buildTaskListItem(project, task) {
  const taskContainer = element.generateTaskListItemContainer();
  const taskTop = element.generateTaskListItemTopContainer();
  const taskTopLeft = element.generateTaskListItemTopLeftContainer();
  const checkBox = element.generateTaskListItemCheckBox(task);
  const priority = element.generateTaskListItemPriority(task.priority);
  const title = element.generateTaskListItemTitle(task.title);
  const taskTopRight = element.generateTaskListItemTopRightContainer();
  const infoButton = element.generateTaskListItemInfoButton();
  const taskBottom = element.generateTaskListItemBottomContainer();
  const dueDate = element.generateTaskListItemDueDate(task.dueDate);
  const projectName = element.generateTaskListItemProject(task.project.name);

  handleCheckBoxClick(checkBox, task);
  handleInfoButtonClick(infoButton, task);
  handleProjectClick(projectName, project);

  taskContainer.appendChild(taskTop);
  taskContainer.appendChild(taskBottom);

  taskTop.appendChild(taskTopLeft);
  taskTop.appendChild(taskTopRight);

  taskTopLeft.appendChild(checkBox);
  taskTopLeft.appendChild(priority);
  taskTopLeft.appendChild(title);

  taskTopRight.appendChild(infoButton);

  taskBottom.appendChild(dueDate);
  taskBottom.appendChild(projectName);

  return taskContainer;
}

function handleCheckBoxClick(checkBox, task) {
  function onClick() {
    changeTaskCompletedStatus(checkBox, task);
  }
  checkBox.addEventListener("click", onClick);
}

function changeTaskCompletedStatus(checkBox, task) {
  // After user clicks check box, switch task completed status
  task.isCompleted ? (task.isCompleted = false) : (task.isCompleted = true);

  // Based on the new completed status, show the appropriate check box icon
  task.isCompleted ? (checkBox.src = checkCircle) : (checkBox.src = circle);
}

function handleInfoButtonClick(button, task) {
  function onClick() {
    buildTaskInfoForm(task);
  }
  button.addEventListener("click", onClick);
}

function handleProjectClick(element, project) {
  function onClick() {
    hideHomepage();
    buildProjectPage(project);
  }
  element.addEventListener("click", onClick);
}
