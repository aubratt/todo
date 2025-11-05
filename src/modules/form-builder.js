import * as element from "./element-factory";
import {
  projects,
  createNewProject,
  pushProject,
  renameProject,
} from "./project";
import {
  buildHomepage,
  buildProjectPage,
  hideHomepage,
  hideProjectPage,
} from "./page-builder.js";
import { clearInputs, hideOverlay } from "./utils";

const content = document.getElementById("content");

const dangerColor = "#9c2121";
const successColor = "#22946e";
const lightGray = "lightgray";
const darkTextColor = "#212121";
const white = "white";

// PROJECTS

export function buildNewProjectForm() {
  const overlay = element.generateOverlay();
  const formElement = element.generateFormElement();
  const overlayContainer = element.generateOverlayContainer();
  const heading = element.generateFormHeading("New Project");
  const projectNameInput = element.generateTextInput(
    "project-name-input",
    "Project Name"
  );
  const required = element.generateRequiredText();
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const createButton = element.generateButton(successColor, white, "Create Project");

  const inputs = {
    name: projectNameInput,
  };

  handleInputFocus(projectNameInput, required);
  handleCancelClick(cancelButton, overlay, inputs);
  handleCreateProjectClick(createButton, overlay, inputs, required);

  content.appendChild(overlay);
  overlay.appendChild(formElement);
  formElement.appendChild(overlayContainer);
  overlayContainer.appendChild(heading);
  overlayContainer.appendChild(projectNameInput);
  overlayContainer.appendChild(required);
  overlayContainer.appendChild(buttonsContainer);
  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(createButton);
}

export function buildProjectOptionsForm(project) {
  const overlay = element.generateOverlay();
  const formElement = element.generateFormElement();
  const overlayContainer = element.generateOverlayContainer();
  const heading = element.generateFormHeading("Rename Project");
  const projectNameInput = element.generateTextInput(
    "rename-project-input",
    "Project Name",
    project.name
  );
  const required = element.generateRequiredText();
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const renameButton = element.generateButton(successColor, white, "Rename");
  const dangerZoneContainer = element.generateDangerZoneContainer();
  const dangerZoneHeading = element.generateFormHeading("Danger Zone");
  const deleteButton = element.generateButton(dangerColor, white, "Delete Project");

  const inputs = {
    name: projectNameInput,
  };

  handleInputFocus(projectNameInput, required);
  handleCancelClick(cancelButton, overlay, inputs);
  handleRenameProjectClick(renameButton, project, overlay, inputs, required);
  handleInitialDeleteProjectClick(deleteButton, project, overlay, inputs);

  content.appendChild(overlay);
  overlay.appendChild(formElement);
  formElement.appendChild(overlayContainer);

  overlayContainer.appendChild(heading);
  overlayContainer.appendChild(projectNameInput);
  overlayContainer.appendChild(required);
  overlayContainer.appendChild(buttonsContainer);
  overlayContainer.appendChild(dangerZoneContainer);

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(renameButton);

  dangerZoneContainer.appendChild(dangerZoneHeading);
  dangerZoneContainer.appendChild(deleteButton);
}

export function buildConfirmDeleteProjectForm(project) {
  const overlay = element.generateOverlay();
  const overlayContainer = element.generateOverlayContainer();
  const dangerZoneContainer = element.generateDangerZoneContainer();
  const heading = element.generateFormHeading("Confirm Delete");
  const deleteErrorMessage = element.generateRequiredText(
    "Delete unsuccessful: must have at least one project"
  );
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const deleteButton = element.generateButton(dangerColor, white, "Delete Project");

  handleCancelClick(cancelButton, overlay);
  handleConfirmDeleteProjectClick(
    deleteButton,
    project,
    overlay,
    deleteErrorMessage
  );

  content.appendChild(overlay);
  overlay.appendChild(overlayContainer);
  overlayContainer.appendChild(dangerZoneContainer);

  dangerZoneContainer.appendChild(heading);
  dangerZoneContainer.appendChild(deleteErrorMessage);
  dangerZoneContainer.appendChild(buttonsContainer);

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(deleteButton);
}

// Add a project to the projects array and take user to newly
// created project page after create project button is clicked
function handleCreateProjectClick(button, overlay, inputs, required) {
  function onCreate() {
    const projectNameIsBlank = checkIfInputIsBlank(inputs.name.value);
    if (projectNameIsBlank) {
      showRequiredText(required);
      return;
    }

    const project = createNewProject(inputs.name.value);
    pushProject(project);
    buildProjectPage(project);
    hideHomepage();
    hideOverlay(overlay);
    clearInputs(inputs);
  }
  button.addEventListener("click", onCreate);
}

function handleRenameProjectClick(button, project, overlay, inputs, required) {
  function onRename() {
    const projectNameIsBlank = checkIfInputIsBlank(inputs.name.value);
    if (projectNameIsBlank) {
      showRequiredText(required);
      return;
    }

    renameProject(project, inputs.name.value);
    hideProjectPage();
    buildProjectPage(project);
    hideOverlay(overlay);
    clearInputs(inputs);
  }
  button.addEventListener("click", onRename);
}

function handleInitialDeleteProjectClick(button, project, overlay, inputs) {
  function onDelete() {
    hideOverlay(overlay);
    clearInputs(inputs);
    buildConfirmDeleteProjectForm(project);
  }
  button.addEventListener("click", onDelete);
}

function handleConfirmDeleteProjectClick(
  button,
  project,
  overlay,
  deleteErrorMessage
) {
  function onDelete() {
    // project.deleteProject returns true if the deletion was successful,
    // and returns false if the deletion was unsuccessful
    if (project.deleteProject(projects)) {
      hideOverlay(overlay);
      hideProjectPage();
      buildHomepage();
    } else {
      showCouldntDeleteProjectText(deleteErrorMessage);
      return;
    }
  }
  button.addEventListener("click", onDelete);
}

function showCouldntDeleteProjectText(deleteErrorMessage) {
  deleteErrorMessage.style.display = "block";
}

// TASKS

export function buildNewTaskForm(preselectedProjectIndex) {
  const overlay = element.generateOverlay();
  const formElement = element.generateFormElement();
  const overlayContainer = element.generateOverlayContainer();
  const heading = element.generateFormHeading("New Task");
  const titleAndDescriptionContainer =
    element.generateTitleAndDescriptionContainer();
  const titleInput = element.generateTitleInput();
  const descriptionInput = element.generateDescriptionInput();
  const titleRequired = element.generateRequiredText("Task title is required");
  const clickInputsContainer = element.generateClickInputsContainer();
  const dueDateContainer = element.generateLabelAndInputContainer();
  const dueDateLabel = element.generateLabel("due-date-input", "Due date");
  const dueDateInput = element.generateDueDateInput();
  const dueDateRequired = element.generateRequiredText();
  const priorityContainer = element.generateLabelAndInputContainer();
  const priorityLabel = element.generateLabel("priority-select", "Priority");
  const prioritySelect = element.generatePrioritySelect();
  const projectContainer = element.generateLabelAndInputContainer();
  const projectLabel = element.generateLabel("project-select", "Project");
  const projectSelect = element.generateProjectSelect(preselectedProjectIndex);
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const createButton = element.generateButton(successColor, white, "Create Task");

  const inputs = {
    title: titleInput,
    description: descriptionInput,
    dueDate: dueDateInput,
    priority: prioritySelect,
    project: projectSelect,
  };

  handleInputFocus(titleInput, titleRequired);
  handleInputFocus(dueDateInput, dueDateRequired);
  handleCancelClick(cancelButton, overlay, inputs);
  handleCreateTaskClick(
    createButton,
    overlay,
    inputs,
    titleRequired,
    dueDateRequired
  );

  content.appendChild(overlay);
  overlay.appendChild(formElement);
  formElement.appendChild(overlayContainer);

  overlayContainer.appendChild(heading);
  overlayContainer.appendChild(titleAndDescriptionContainer);
  overlayContainer.appendChild(clickInputsContainer);

  titleAndDescriptionContainer.appendChild(titleInput);
  titleAndDescriptionContainer.appendChild(descriptionInput);
  titleAndDescriptionContainer.appendChild(titleRequired);

  clickInputsContainer.appendChild(dueDateContainer);
  clickInputsContainer.appendChild(priorityContainer);
  clickInputsContainer.appendChild(projectContainer);
  clickInputsContainer.appendChild(buttonsContainer);

  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);
  dueDateContainer.appendChild(dueDateRequired);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  projectContainer.appendChild(projectLabel);
  projectContainer.appendChild(projectSelect);

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(createButton);
}

export function buildTaskInfoForm(task) {
  const overlay = element.generateOverlay();
  const formElement = element.generateFormElement();
  const overlayContainer = element.generateOverlayContainer();
  const heading = element.generateFormHeading("Task Info");
  const titleAndDescriptionContainer =
    element.generateTitleAndDescriptionContainer();
  const titleInput = element.generateTitleInput(task.title);
  const descriptionInput = element.generateDescriptionInput(
    task.description ? task.description : ""
  );
  const titleRequired = element.generateRequiredText("Task title is required");
  const clickInputsContainer = element.generateClickInputsContainer();
  const dueDateContainer = element.generateLabelAndInputContainer();
  const dueDateLabel = element.generateLabel("due-date-input", "Due Date");
  const dueDateInput = element.generateDueDateInput(task.dueDate);
  const dueDateRequired = element.generateRequiredText();
  const priorityContainer = element.generateLabelAndInputContainer();
  const priorityLabel = element.generateLabel("priority-select", "Priority");
  const prioritySelect = element.generatePrioritySelect(task.priority);
  const projectContainer = element.generateLabelAndInputContainer();
  const projectLabel = element.generateLabel("project-select", "Project");
  const projectSelect = element.generateProjectSelect(
    projects.indexOf(task.project)
  );
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const saveButton = element.generateButton(successColor, white, "Save");
  const dangerZoneContainer = element.generateDangerZoneContainer();
  const dangerZoneHeading = element.generateFormHeading("Danger Zone");
  const deleteButton = element.generateButton(dangerColor, white, "Delete Task");

  const inputs = {
    title: titleInput,
    description: descriptionInput,
    dueDate: dueDateInput,
    priority: prioritySelect,
    project: projectSelect,
  };

  handleInputFocus(titleInput);
  handleInputFocus(dueDateInput);
  handleCancelClick(cancelButton, overlay, inputs);
  handleSaveTaskClick(saveButton, task, overlay, inputs);
  handleInitialDeleteTaskClick(deleteButton, task, overlay, inputs);

  content.appendChild(overlay);
  overlay.appendChild(formElement);
  formElement.appendChild(overlayContainer);

  overlayContainer.appendChild(heading);
  overlayContainer.appendChild(titleAndDescriptionContainer);
  overlayContainer.appendChild(clickInputsContainer);
  overlayContainer.appendChild(dangerZoneContainer);

  titleAndDescriptionContainer.appendChild(titleInput);
  titleAndDescriptionContainer.appendChild(descriptionInput);
  titleAndDescriptionContainer.appendChild(titleRequired);

  clickInputsContainer.appendChild(dueDateContainer);
  clickInputsContainer.appendChild(priorityContainer);
  clickInputsContainer.appendChild(projectContainer);
  clickInputsContainer.appendChild(buttonsContainer);

  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);
  dueDateContainer.appendChild(dueDateRequired);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  projectContainer.appendChild(projectLabel);
  projectContainer.appendChild(projectSelect);

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(saveButton);

  dangerZoneContainer.appendChild(dangerZoneHeading);
  dangerZoneContainer.appendChild(deleteButton);
}

function buildConfirmDeleteTaskForm(task) {
  const overlay = element.generateOverlay();
  const overlayContainer = element.generateOverlayContainer();
  const overlayWrapper = element.generateOverlayWrapper();
  const heading = element.generateFormHeading("Confirm Delete");
  const buttonsContainer = element.generateButtonsContainer();
  const cancelButton = element.generateButton(lightGray, darkTextColor, "Cancel");
  const deleteButton = element.generateButton(dangerColor, white, "Delete Task");

  handleCancelClick(cancelButton, overlay);
  handleConfirmDeleteTaskClick(deleteButton, task, overlay);

  overlay.appendChild(overlayContainer);
  overlayContainer.appendChild(overlayWrapper);

  overlayWrapper.appendChild(heading);
  overlayWrapper.appendChild(buttonsContainer);

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(deleteButton);
}

// Add a task to its respective project array and take user to
// homepage or task's project page after create task button is clicked
function handleCreateTaskClick(
  button,
  overlay,
  inputs,
  titleRequired,
  dueDateRequired
) {
  function onCreate() {
    const titleInputIsBlank = checkIfInputIsBlank(inputs.title.value);
    if (titleInputIsBlank) {
      // Required text goes after description because title and
      // description are conjoined
      showRequiredText(titleRequired);
      return;
    }

    const dueDateIsBlank = checkIfInputIsBlank(inputs.dueDate.value);
    if (dueDateIsBlank) {
      showRequiredText(dueDateRequired);
      return;
    }

    const project = projects[inputs.project.selectedIndex];
    project.addNewTask(
      inputs.title.value,
      inputs.description.value,
      inputs.dueDate.value,
      inputs.priority.selectedIndex
    );
    buildHomeOrProjectPage(projects[inputs.project.selectedIndex]);
    hideOverlay(overlay);
    clearInputs(inputs);
  }
  button.addEventListener("click", onCreate);
}

function handleSaveTaskClick(button, task, overlay, inputs) {
  function onSave() {
    task.saveTask(
      inputs.title.value,
      inputs.description.value,
      inputs.dueDate.value,
      inputs.priority.value,
      inputs.project.value
    );
    buildHomeOrProjectPage(task.project);
    hideOverlay(overlay);
    clearInputs(inputs);
  }
  button.addEventListener("click", onSave);
}

function handleInitialDeleteTaskClick(button, task, overlay, inputs) {
  function onDelete() {
    hideOverlay(overlay);
    clearInputs(inputs);
    buildConfirmDeleteTaskForm(task);
  }
  button.addEventListener("click", onDelete);
}

function handleConfirmDeleteTaskClick(button, task, overlay) {
  function onDelete() {
    task.deleteTask();
    hideOverlay(overlay);
    buildHomepage();
  }
  button.addEventListener("click", onDelete);
}

// UTILS

// Inputs parameter should be an object of all input elements--
// Example inputs parameter:
// inputs = {
//   title: titleElement;
//   description: descriptionElement;
//   dueDate: dueDateElement;
//   priority: priorityElement;
//   project: projectElement;
// }

// Close a form when the user clicks the cancel button
function handleCancelClick(button, overlay, inputs) {
  function onCancel() {
    hideOverlay(overlay);
    clearInputs(inputs);
  }
  button.addEventListener("click", onCancel);
}

// Hide required text after focusing on the input element
function handleInputFocus(inputElement, required) {
  function onFocus() {
    hideRequiredText(required);
  }
  inputElement.addEventListener("click", onFocus);
}

// Check is input is blank or whitespace only
function checkIfInputIsBlank(input) {
  const inputValueWithWhitespaceRemoved = input.replace(/\s/g, "");

  return inputValueWithWhitespaceRemoved.length === 0;
}

function showRequiredText(required) {
  required.style.display = "block";
}

function hideRequiredText(required) {
  required.style.display = "none";
}

// Return user to the page they were on
function buildHomeOrProjectPage(project) {
  const homepage = document.getElementById("homepage");

  if (homepage) {
    hideHomepage();
    buildHomepage();
  } else {
    hideProjectPage();
    buildProjectPage(project);
  }
}
