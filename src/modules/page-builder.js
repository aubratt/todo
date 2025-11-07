import * as element from "./element-factory";
import { handleNewTaskClick } from "./menu-builder";
import {
  buildHomeOrProjectPage,
  buildProjectOptionsForm,
  buildTaskInfoForm,
} from "./form-builder";
import { projects } from "./project";

import checkCircle from "../images/check-circle.svg";
import circle from "../images/circle.svg";
import {
  getMasterCompletedTaskList,
  getMasterTaskList,
  sortByDate,
  sortByPriority,
} from "./task";

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
  const completedTasks = element.generateCompletedTasksContainer();
  const completedTasksHeading = element.generateCompletedTasksHeading();

  const masterTaskList = getMasterTaskList();
  handleSortClick(
    masterTaskList,
    allTasks,
    sortByDateButton,
    sortByPriorityButton
  );
  setSortButtons(
    masterTaskList,
    sortButtonsContainer,
    sortByDateButton,
    sortByPriorityButton
  );

  content.appendChild(homepage);

  homepage.appendChild(myProjects);
  homepage.appendChild(allTasks);
  homepage.appendChild(completedTasks);

  myProjects.appendChild(myProjectsHeading);
  projects.forEach((project) => {
    const listItem = buildProjectListItem(project);
    myProjects.appendChild(listItem);
  });

  allTasks.appendChild(allTasksHeader);
  const sortedByDate = sortByDate(masterTaskList);
  sortedByDate.forEach((task) => {
    const listItem = buildTaskListItem(task.project, task);
    allTasks.appendChild(listItem);
  });

  allTasksHeader.appendChild(allTasksHeading);
  allTasksHeader.appendChild(sortButtonsContainer);

  sortButtonsContainer.appendChild(sortByDateButton);
  sortButtonsContainer.appendChild(sortByPriorityButton);

  completedTasks.appendChild(completedTasksHeading);
  const completedTaskList = getMasterCompletedTaskList();
  completedTaskList.forEach((task) => {
    const listItem = buildTaskListItem(task.project, task);
    completedTasksHeading.appendChild(listItem);
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
  const projectTaskList = project.tasks;
  handleSortClick(
    projectTaskList,
    projectTasks,
    sortByDateButton,
    sortByPriorityButton
  );
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

  const sortedByDate = sortByDate(project.tasks);
  sortedByDate.forEach((task) => {
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

  handleCheckBoxClick(task, taskContainer, checkBox);
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

  setTaskStyle(task, taskContainer);

  return taskContainer;
}

function setSortButtons(
  taskList,
  sortButtonsContainer,
  sortByDateButton,
  sortByPriorityButton
) {
  if (taskList.length === 0) {
    sortButtonsContainer.replaceWith(sortButtonsContainer.cloneNode(true));

    sortByDateButton.classList.remove("active");
    sortByPriorityButton.classList.remove("active");
  }
}

function handleSortClick(taskList, allTasks, dateButton, priorityButton) {
  if (taskList.length === 0) return;

  function onAnySortClick() {
    const taskListContainer = document.querySelectorAll(".task");

    taskListContainer.forEach((task) => {
      if (!task.classList.contains("task-complete")) {
        allTasks.removeChild(task);
      }
    });
  }

  let sortedTaskList;

  function onDateClick() {
    sortedTaskList = sortByDate(taskList);
    displaySortedTaskList();
    updateButtonStyles(true, false);
  }

  function onPriorityClick() {
    sortedTaskList = sortByPriority(taskList);
    displaySortedTaskList();
    updateButtonStyles(false, true);
  }

  function displaySortedTaskList() {
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

function handleCheckBoxClick(task, taskContainer, checkBox) {
  function onClick() {
    changeTaskCompletedStatus(task);
    setTaskStyle(task, taskContainer);
    buildHomeOrProjectPage();
  }
  checkBox.addEventListener("click", onClick);
}

function changeTaskCompletedStatus(task) {
  task.isCompleted ? (task.isCompleted = false) : (task.isCompleted = true);
}

function setTaskStyle(task, taskContainer) {
  const checkBox = taskContainer.querySelector(".check-box");
  const taskTitle = taskContainer.querySelector(".title");

  if (task.isCompleted) {
    taskContainer.classList.add("task-complete");
    checkBox.src = checkCircle;
    taskTitle.classList.add("strikethrough");
  } else {
    taskContainer.classList.remove("task-complete");
    checkBox.src = circle;
    taskTitle.classList.remove("strikethrough");
  }
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
