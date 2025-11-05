import { projects } from "./project";
import { Task } from "./task";

import add from "../images/add.svg";
import addCircle from "../images/add-circle.svg";
import checkCircle from "../images/check-circle.svg";
import circle from "../images/circle.svg";
import info from "../images/info.svg";
import leftArrow from "../images/left-arrow.svg";
import options from "../images/options.svg";
import rightArrow from "../images/right-arrow.svg";

// HOMEPAGE

// Homepage Container
export function generateHomepageContainer() {
  const container = document.createElement("div");
  container.id = "homepage";

  return container;
}

// My Projects Container
export function generateMyProjectsContainer() {
  const container = document.createElement("div");
  container.id = "my-projects";

  return container;
}

// Section Heading (Home: My Projects, All Tasks; Project: Tasks)
export function generateSectionHeading(headingText) {
  const heading = document.createElement("h2");
  heading.textContent = headingText;

  return heading;
}

// Project List Item Container
export function generateProjectListItemContainer() {
  const container = document.createElement("div");
  container.classList.add("project");

  return container;
}

// Project List Item Name Container
export function generateProjectListItemNameContainer() {
  const container = document.createElement("div");
  container.classList.add("project-left");

  return container;
}

// Project List Item Name
export function generateProjectListItemName(projectNameText) {
  const projectName = document.createElement("p");
  projectName.classList.add("project-name");
  projectName.textContent = projectNameText;

  return projectName;
}

// Project List Item Task Count Container
export function generateProjectListItemTaskCountContainer() {
  const container = document.createElement("div");
  container.classList.add("project-right");

  return container;
}

// Project List Item Task Count Number
export function generateProjectListItemTaskCountNumber(taskCountNumber) {
  const taskCount = document.createElement("p");
  taskCount.classList.add("task-count");
  taskCount.textContent = taskCountNumber;

  return taskCount;
}

// Project List Item Right Arrow
export function generateProjectListItemArrow() {
  const arrow = document.createElement("img");
  arrow.src = rightArrow;
  arrow.classList.add("right-arrow");
  arrow.alt = "Project list item right arrow icon to open project";

  return arrow;
}

// All Tasks Container
export function generateAllTasksContainer() {
  const container = document.createElement("div");
  container.id = "all-tasks";

  return container;
}

// PROJECT PAGE

// Project Page Container
export function generateProjectPageContainer() {
  const container = document.createElement("div");
  container.id = "project-page";

  return container;
}

// Project Page Heading
export function generateProjectPageHeadingContainer() {
  const container = document.createElement("div");
  container.id = "project-heading";

  return container;
}

// Project Page Heading Left
export function generateProjectPageHeadingLeftContainer() {
  const container = document.createElement("div");
  container.id = "project-heading-left";

  return container;
}

// Back Home Arrow
export function generateLeftArrow() {
  const arrow = document.createElement("img");
  arrow.id = "back-home-arrow";
  arrow.src = leftArrow;

  return arrow;
}

// Back Home Text
export function generateHomeText() {
  const home = document.createElement("p");
  home.id = "back-home-text";
  home.textContent = "Home";

  return home;
}

// Project Name
export function generateProjectName(projectName) {
  const name = document.createElement("h2");
  name.textContent = projectName;

  return name;
}

// Project Heading Right
export function generateProjectHeadingRightContainer() {
  const container = document.createElement("div");
  container.id = "project-heading-right";

  return container;
}

// Project Page Add New Task Button
export function generateProjectPageAddNewTaskButton() {
  const button = document.createElement("img");
  button.id = "add-new-task";
  button.src = add;

  return button;
}

// Project Page Options Button
export function generateProjectPageOptionsButton() {
  const button = document.createElement("img");
  button.id = "options";
  button.src = options;

  return button;
}

// Project Page Tasks List Container
export function generateProjectPageTasksListContainer() {
  const container = document.createElement("div");
  container.id = "project-tasks";

  return container;
}

// TASK LIST ITEM

// Task List Item Container
export function generateTaskListItemContainer() {
  const container = document.createElement("div");
  container.classList.add("task");

  return container;
}

// Task List Item Top Container
export function generateTaskListItemTopContainer() {
  const container = document.createElement("div");
  container.classList.add("task-top");

  return container;
}

// Task List Item Top Left Container
export function generateTaskListItemTopLeftContainer() {
  const container = document.createElement("div");
  container.classList.add("task-top-left");

  return container;
}

// Task List Item Check Box
export function generateTaskListItemCheckBox(task) {
  const checkBox = document.createElement("img");
  task.isCompleted ? (checkBox.src = checkCircle) : (checkBox.src = circle);
  checkBox.classList.add("check-box");
  checkBox.alt = "Task check box";

  return checkBox;
}

// Task List Item Priority
export function generateTaskListItemPriority(priority) {
  const span = document.createElement("span");
  span.classList.add("priority");
  span.textContent = priority;

  return span;
}

// Task List Item Title
export function generateTaskListItemTitle(titleText) {
  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = titleText;

  return title;
}

// Task List Item Top Right Container
export function generateTaskListItemTopRightContainer() {
  const container = document.createElement("div");
  container.classList.add("task-top-right");

  return container;
}

// Task List Item Info Button
export function generateTaskListItemInfoButton() {
  const button = document.createElement("img");
  button.src = info;
  button.classList.add("task-info");
  button.alt = "Task list item info icon to show task info";

  return button;
}

// Task List Item Bottom Container
export function generateTaskListItemBottomContainer() {
  const container = document.createElement("div");
  container.classList.add("task-bottom");

  return container;
}

// Task List Item Due Date
export function generateTaskListItemDueDate(date) {
  const dueDate = document.createElement("p");
  dueDate.classList.add("due-date");
  dueDate.textContent = date;

  return dueDate;
}

// Task List Item Project
export function generateTaskListItemProject(projectNameText) {
  const project = document.createElement("p");
  project.classList.add("project-name");
  project.textContent = projectNameText;

  return project;
}

// MENU AND FORMS

// Overlay
export function generateOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  return overlay;
}

// Form
export function generateFormElement() {
  const form = document.createElement("form");

  return form;
}

// Overlay Container
export function generateOverlayContainer() {
  const formContainer = document.createElement("div");
  formContainer.classList.add("overlay-container");

  return formContainer;
}

// Menu Button
export function generateMenuButton(buttonText) {
  const button = document.createElement("button");
  const addIcon = document.createElement("img");
  const text = document.createElement("p");

  button.classList.add("menu-button");
  addIcon.src = addCircle;
  addIcon.alt = `${buttonText} button icon`;

  text.textContent = buttonText;

  button.appendChild(addIcon);
  button.appendChild(text);

  return button;
}

// Heading
export function generateFormHeading(headingText) {
  const formHeading = document.createElement("h4");
  formHeading.textContent = headingText;

  return formHeading;
}

// Text Input
export function generateTextInput(inputId, placeholderText, preloadedText = "") {
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = inputId;
  textInput.classList.add("text-input");
  textInput.placeholder = placeholderText;
  textInput.value = preloadedText;

  return textInput;
}

// Required
export function generateRequiredText(text = "This field is required") {
  const requiredText = document.createElement("p");
  requiredText.classList.add("required");
  requiredText.textContent = text;

  return requiredText;
}

// Task Title and Description Container
export function generateTitleAndDescriptionContainer() {
  const container = document.createElement("div");
  container.classList.add("title-and-description-container");

  return container;
}

// Task Title Input
export function generateTitleInput(preloadedTitle = "") {
  const title = document.createElement("input");
  title.classList.add("task-title-input");
  title.type = "text";
  title.placeholder = "Title";
  console.log(preloadedTitle);
  title.value = preloadedTitle;

  return title;
}

// Task Description Input
export function generateDescriptionInput(preloadedDescription = "") {
  const description = document.createElement("textarea");
  description.classList.add("task-description-input");
  description.placeholder = "Description";
  description.rows = "5";
  description.textContent = preloadedDescription;

  return description;
}

// Click Inputs Container
export function generateClickInputsContainer() {
  const container = document.createElement("div");
  container.classList.add("click-inputs-container");

  return container;
}

// Label and Input Container
export function generateLabelAndInputContainer() {
  const container = document.createElement("div");
  container.classList.add("label-and-input");

  return container;
}

// Label
export function generateLabel(labelFor, labelText) {
  const label = document.createElement("label");
  label.htmlFor = labelFor;
  label.textContent = labelText;

  return label;
}

// Due Date Input
export function generateDueDateInput(preloadedDueDate = "") {
  const input = document.createElement("input");

  input.type = "date";
  input.id = "due-date-input";
  input.value = preloadedDueDate;

  return input;
}

// Priority Select
export function generatePrioritySelect(preselectedPriority = "low") {
  const select = document.createElement("select");
  const low = document.createElement("option");
  const medium = document.createElement("option");
  const high = document.createElement("option");

  select.id = "priority-select";
  low.value = "low";
  medium.value = "medium";
  high.value = "high";

  low.textContent = "Low";
  medium.textContent = "Medium";
  high.textContent = "High";

  select.value = preselectedPriority;

  select.appendChild(low);
  select.appendChild(medium);
  select.appendChild(high);

  return select;
}

// Project Select
export function generateProjectSelect(preselectedProjectIndex = 0) {
  const select = document.createElement("select");

  select.id = "project-select";

  projects.forEach((project) => {
    const option = generateProjectSelectOption(project);
    select.appendChild(option);
  });

  select.value = projects[preselectedProjectIndex].name;

  return select;
}

// Project Select Option
function generateProjectSelectOption(project) {
  const option = document.createElement("option");
  option.value = project.name;
  option.textContent = project.name;

  return option;
}

// Buttons Container
export function generateButtonsContainer() {
  const container = document.createElement("div");
  container.classList.add("buttons-container");

  return container;
}

// Button
export function generateButton(buttonColor, buttonText) {
  const button = document.createElement("button");
  // Maybe try to incorporate CSS variables here--
  // at top of file create variables that pull from CSS
  button.style.backgroundColor = buttonColor;
  button.textContent = buttonText;

  button.addEventListener("click", function (event) {
    event.preventDefault();
  });

  return button;
}

// Danger Zone
export function generateDangerZoneContainer() {
  const container = document.createElement("div");
  container.classList.add("danger-zone-container");

  return container;
}

// Overlay Wrapper
export function generateOverlayWrapper() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("overlay-wrapper");

  return wrapper;
}
