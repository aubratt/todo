import * as element from "./element-factory";
import { handleNewTaskClick } from "./menu-builder";
import { buildProjectOptionsForm, buildTaskInfoForm } from "./form-builder";
import { projects } from "./project";

import checkCircle from "../images/check-circle.svg";
import circle from "../images/circle.svg";
import { getMasterTaskList, sortByDate, sortByPriority } from "./task";

const content = document.getElementById("content");

// HOMEPAGE

export function buildHomepage() {
  const homepage = element.generateHomepageContainer();
  const myProjects = element.generateMyProjectsContainer();
  const myProjectsHeading = element.generateSectionHeading("My Projects");
  const allTasks = element.generateAllTasksContainer();
  const allTasksHeader = element.generateAllTasksHeader();
  const allTasksHeading = element.generateSectionHeading("All Tasks");
  const sortButtonsContainer = element.generateSortButtonsContainer();
  const sortByDateButton = element.generateButton("sort-button", "Due Date");
  sortByDateButton.classList.add("active");
  const sortByPriorityButton = element.generateButton(
    "sort-button",
    "Priority"
  );

  handleSortClick(allTasks, sortByDateButton, sortByPriorityButton);

  content.appendChild(homepage);

  homepage.appendChild(myProjects);
  homepage.appendChild(allTasks);

  myProjects.appendChild(myProjectsHeading);
  projects.forEach((project) => {
    const listItem = buildProjectListItem(project);
    myProjects.appendChild(listItem);
  });

  allTasks.appendChild(allTasksHeader);
  const masterTaskList = getMasterTaskList();
  const sortedByDate = sortByDate(masterTaskList);
  sortedByDate.forEach((task) => {
    const listItem = buildTaskListItem(task.project, task);
    allTasks.appendChild(listItem);
  });

  allTasksHeader.appendChild(allTasksHeading);
  allTasksHeader.appendChild(sortButtonsContainer);

  sortButtonsContainer.appendChild(sortByDateButton);
  sortButtonsContainer.appendChild(sortByPriorityButton);
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

export function hideHomepage() {
  const homepage = document.getElementById("homepage");

  if (homepage) {
    content.removeChild(homepage);
  }
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
  const sortByDateButton = element.generateButton("sort-button", "Due Date");
  sortByDateButton.classList.add("active");
  const sortByPriorityButton = element.generateButton(
    "sort-button",
    "Priority"
  );
  const addNewTaskButton = element.generateProjectPageAddNewTaskButton();
  const optionsButton = element.generateProjectPageOptionsButton();
  const projectTasks = element.generateProjectPageTasksListContainer();

  handleBackHomeClick(backHomeArrow, backHomeText);
  handleNewTaskClick(addNewTaskButton, null, projects.indexOf(project));
  handleProjectOptionsClick(optionsButton, project);

  content.appendChild(projectPage);

  projectPage.appendChild(projectHeading);
  projectPage.appendChild(projectTasks);

  projectHeading.appendChild(projectHeadingLeft);
  projectHeading.appendChild(projectHeadingRight);

  projectHeadingLeft.appendChild(backHomeArrow);
  projectHeadingLeft.appendChild(backHomeText);
  projectHeadingLeft.appendChild(projectName);

  projectHeadingRight.appendChild(sortByDateButton);
  projectHeadingRight.appendChild(sortByPriorityButton);
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

function handleProjectOptionsClick(button, project) {
  function onClick() {
    buildProjectOptionsForm(project);
  }
  button.addEventListener("click", onClick);
}

export function hideProjectPage() {
  const projectPage = document.getElementById("project-page");

  if (projectPage) {
    content.removeChild(projectPage);
  }
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

function handleSortClick(allTasks, dateButton, priorityButton) {
  function onAnySortClick() {
    const taskList = document.querySelectorAll(".task");

    taskList.forEach((task) => {
      allTasks.removeChild(task);
    });
  }

  const masterTaskList = getMasterTaskList();
  let sortedTaskList;

  function onDateClick() {
    sortedTaskList = sortByDate(masterTaskList);
    displaySortedTaskList();
    updateButtonStyles(true, false);
  }

  function onPriorityClick() {
    sortedTaskList = sortByPriority(masterTaskList);
    displaySortedTaskList();
    updateButtonStyles(false, true);
  }

  function displaySortedTaskList() {
    const allTasks = document.getElementById("all-tasks");

    sortedTaskList.forEach((task) => {
      const listItem = buildTaskListItem(task.project, task);
      allTasks.appendChild(listItem);
    });
  }

  function updateButtonStyles(dateButtonClicked, priorityButtonClicked) {
    if (dateButtonClicked) {
      priorityButton.classList.remove("active");
      dateButton.classList.add("active");
    } else {
      dateButton.classList.remove("active");
      priorityButton.classList.add("active");
    }
  }

  dateButton.addEventListener("click", () => {
    onAnySortClick();
    onDateClick();
  });
  priorityButton.addEventListener("click", () => {
    onAnySortClick();
    onPriorityClick();
  });
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
    hideProjectPage();
    buildProjectPage(project);
  }
  element.addEventListener("click", onClick);
}
