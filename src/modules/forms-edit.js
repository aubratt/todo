import { showHomepage } from "./home-page";
import { projects } from "./project";
import { showProjectPage } from "./project-page";
import { createNewTaskProjectOptionsItem } from "./forms-createnew";

const content = document.getElementById("content");

function generateEditProjectForm(project) {
  const editProjectFormOverlay = document.createElement("div");
  const form = document.createElement("form");
  const editProjectFormContainer = document.createElement("div");
  const editProjectFormHeading = document.createElement("h4");
  const renameProjectContainer = document.createElement("div");
  const renameProjectInput = document.createElement("input");
  const projectNameRequired = document.createElement("p");
  const renameProjectFormButtons = document.createElement("div");
  const cancelButton = document.createElement("button");
  const renameProjectSaveButton = document.createElement("button");
  const deleteProjectContainer = document.createElement("div");
  const deleteProjectLabel = document.createElement("h4");
  const deleteProjectButton = document.createElement("button");

  editProjectFormOverlay.id = "edit-project-form-overlay";
  editProjectFormOverlay.classList.add("overlay");
  editProjectFormContainer.id = "edit-project-form-container";
  editProjectFormContainer.classList.add("overlay-container");
  renameProjectContainer.id = "rename-project-container";
  renameProjectInput.id = "rename-project";
  projectNameRequired.id = "edit-project-name-required";
  projectNameRequired.classList.add("required");
  renameProjectFormButtons.classList.add("form-buttons");
  cancelButton.classList.add("cancel");
  renameProjectSaveButton.id = "save-rename";
  renameProjectSaveButton.classList.add("create");
  deleteProjectContainer.id = "delete-project-container";
  deleteProjectContainer.classList.add("delete-project-container");
  deleteProjectButton.classList.add("cancel");

  editProjectFormHeading.textContent = "Rename Project";
  renameProjectInput.type = "text";
  renameProjectInput.placeholder = "Project Name";
  renameProjectInput.value = project.name;
  projectNameRequired.textContent = "Project name is required";
  cancelButton.textContent = "Cancel";
  renameProjectSaveButton.textContent = "Rename";
  deleteProjectLabel.textContent = "Danger Zone";
  deleteProjectButton.textContent = "Delete Project";

  cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    hideEditProjectForm();
  });
  renameProjectInput.addEventListener("click", hideProjectNameRequired);
  renameProjectSaveButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nameIsEmpty = checkIfRenameProjectEmpty();
    if (nameIsEmpty) {
      showProjectNameRequired();
      return;
    }

    renameProject(project);
    hideEditProjectForm();
    showProjectPage(project);
  });
  deleteProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    showConfirmDelete(project);
  });

  content.appendChild(editProjectFormOverlay);

  editProjectFormOverlay.appendChild(form);

  form.appendChild(editProjectFormContainer);

  editProjectFormContainer.appendChild(editProjectFormHeading);
  editProjectFormContainer.appendChild(renameProjectContainer);
  editProjectFormContainer.appendChild(deleteProjectContainer);

  renameProjectContainer.appendChild(renameProjectInput);
  renameProjectContainer.appendChild(projectNameRequired);
  renameProjectContainer.appendChild(renameProjectFormButtons);

  renameProjectFormButtons.appendChild(cancelButton);
  renameProjectFormButtons.appendChild(renameProjectSaveButton);

  deleteProjectContainer.appendChild(deleteProjectLabel);
  deleteProjectContainer.appendChild(deleteProjectButton);

  return editProjectFormOverlay;
}

export function showEditProjectForm(project) {
  content.appendChild(generateEditProjectForm(project));
  const editProjectOverlay = document.getElementById(
    "edit-project-form-overlay"
  );
  editProjectOverlay.style.display = "block";
}

function checkIfRenameProjectEmpty() {
  const renameProjectInput = document.getElementById("rename-project");
  const nameWithWhiteSpaceRemoved = renameProjectInput.value.replace(/\s/g, "");
  return nameWithWhiteSpaceRemoved.length === 0;
}

function showProjectNameRequired() {
  const projectNameRequired = document.getElementById(
    "edit-project-name-required"
  );
  projectNameRequired.style.display = "block";
}

function hideProjectNameRequired() {
  const projectNameRequired = document.getElementById(
    "edit-project-name-required"
  );
  projectNameRequired.style.display = "none";
}

function renameProject(project) {
  const newProjectName = document.getElementById("rename-project");
  project.name = newProjectName.value;
}

function hideEditProjectForm() {
  const editProjectOverlay = document.getElementById(
    "edit-project-form-overlay"
  );
  content.removeChild(editProjectOverlay);
}

function generateConfirmDelete(project) {
  hideEditProjectForm();

  const confirmDeleteOverlay = document.createElement("div");
  const confirmDeleteContainer = document.createElement("div");
  const confirmDeleteWrapper = document.createElement("div");
  const confirmDeleteHeading = document.createElement("h4");
  const confirmDeleteButtonsContainer = document.createElement("div");
  const cancelButton = document.createElement("button");
  const confirmButton = document.createElement("button");

  confirmDeleteOverlay.id = "confirm-delete-overlay";
  confirmDeleteOverlay.classList.add("overlay");
  confirmDeleteContainer.classList.add("overlay-container");
  confirmDeleteWrapper.classList.add("overlay-wrapper");
  confirmDeleteButtonsContainer.classList.add("form-buttons");
  cancelButton.id = "cancel-confirm-delete";
  confirmButton.id = "confirm-delete";

  confirmDeleteHeading.textContent = "Confirm Delete";
  cancelButton.textContent = "Cancel";
  confirmButton.textContent = "Delete Project";

  cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    hideConfirmDelete();
  });
  confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteProject(project);
    hideConfirmDelete();
    showHomepage();
  });

  confirmDeleteOverlay.appendChild(confirmDeleteContainer);

  confirmDeleteContainer.appendChild(confirmDeleteWrapper);

  confirmDeleteWrapper.appendChild(confirmDeleteHeading);
  confirmDeleteWrapper.appendChild(confirmDeleteButtonsContainer);

  confirmDeleteButtonsContainer.appendChild(cancelButton);
  confirmDeleteButtonsContainer.appendChild(confirmButton);

  return confirmDeleteOverlay;
}

function showConfirmDelete() {
  content.appendChild(generateConfirmDelete());
  const confirmDeleteOverlay = document.getElementById(
    "confirm-delete-overlay"
  );
  confirmDeleteOverlay.style.display = "block";
}

function hideConfirmDelete() {
  const confirmDeleteOverlay = document.getElementById(
    "confirm-delete-overlay"
  );
  content.removeChild(confirmDeleteOverlay);
}

function deleteProject(project) {
  projects.pop(project);
}

function generateTaskInfo(task) {
  const taskInfoOverlay = document.createElement("div");
  const form = document.createElement("form");
  const taskInfoContainer = document.createElement("div");
  const taskInfoHeading = document.createElement("h4");
  const taskInfoTextInputs = document.createElement("div");
  const taskInfoTitle = document.createElement("input");
  const taskInfoDescription = document.createElement("textarea");
  const taskTitleRequired = document.createElement("p");
  const taskInfoClickInputs = document.createElement("div");
  const taskInfoDueDateContainer = document.createElement("div");
  const taskInfoDueDateLabel = document.createElement("label");
  const taskInfoDueDateInput = document.createElement("input");
  const dueDateRequired = document.createElement("p");
  const taskInfoPriorityContainer = document.createElement("div");
  const taskInfoPriorityLabel = document.createElement("label");
  const taskInfoPrioritySelect = document.createElement("select");
  const lowPriorityOption = document.createElement("option");
  const mediumPriorityOption = document.createElement("option");
  const highPriorityOption = document.createElement("option");
  const taskInfoProjectContainer = document.createElement("div");
  const taskInfoProjectLabel = document.createElement("label");
  const taskInfoProjectSelect = document.createElement("select");
  const deleteTaskContainer = document.createElement("div");
  const deleteTaskLabel = document.createElement("h4");
  const deleteTaskButton = document.createElement("button");

  projects.forEach((project) => {
    taskInfoProjectSelect.appendChild(createNewTaskProjectOptionsItem(project));
  });

  const taskInfoFormButtons = document.createElement("div");
  const taskInfoCancelButton = document.createElement("button");
  const taskInfoSaveButton = document.createElement("button");

  taskInfoOverlay.id = "task-info-overlay";
  taskInfoOverlay.classList.add("overlay");
  taskInfoContainer.classList.add("overlay-container");
  taskInfoTextInputs.classList.add("task-text-inputs");
  taskInfoTitle.classList.add("task-title");
  taskInfoDescription.classList.add("task-description");
  taskTitleRequired.classList.add("required");
  taskInfoClickInputs.classList.add("task-click-inputs");
  taskInfoDueDateContainer.classList.add("label-and-input");
  taskInfoDueDateLabel.htmlFor = "task-info-due-date";
  taskInfoDueDateInput.id = "task-info-due-date";
  taskInfoDueDateInput.classList.add("task-due-date");
  dueDateRequired.classList.add("required");
  taskInfoPriorityContainer.classList.add("label-and-input");
  taskInfoPriorityLabel.htmlFor = "task-info-priority";
  taskInfoPrioritySelect.id = "task-info-priority";
  lowPriorityOption.value = "low";
  mediumPriorityOption.value = "medium";
  highPriorityOption.value = "high";
  taskInfoProjectContainer.classList.add("label-and-input");
  taskInfoProjectLabel.htmlFor = "task-info-project";
  taskInfoProjectSelect.id = "task-info-project";
  taskInfoFormButtons.classList.add("form-buttons");
  taskInfoCancelButton.classList.add("cancel");
  taskInfoSaveButton.classList.add("create");
  deleteTaskContainer.id = "delete-project-container";
  deleteTaskContainer.classList.add("delete-project-container");
  deleteTaskButton.classList.add("cancel");

  taskInfoHeading.textContent = "Task Info";
  taskInfoTitle.placeholder = "Title";
  taskInfoTitle.value = task.title;
  taskTitleRequired.textContent = "Task title is required";
  taskInfoDescription.placeholder = "Description";
  taskInfoDescription.value = task.description;
  taskInfoDescription.rows = "5";
  taskInfoDueDateLabel.textContent = "Due date:";
  taskInfoDueDateInput.type = "date";
  taskInfoDueDateInput.value = task.dueDate;
  dueDateRequired.textContent = "Due date is required";
  taskInfoPriorityLabel.textContent = "Priority:";
  lowPriorityOption.textContent = "Low";
  if (task.priority === "!") {
    lowPriorityOption.selected = true;
  }
  mediumPriorityOption.textContent = "Medium";
  if (task.priority === "!!") {
    mediumPriorityOption.selected = true;
  }
  highPriorityOption.textContent = "High";
  if (task.priority === "!!!") {
    highPriorityOption.selected = true;
  }
  taskInfoProjectLabel.textContent = "Project:";
  taskInfoProjectSelect.value = task.project.name;
  taskInfoCancelButton.textContent = "Cancel";
  taskInfoSaveButton.textContent = "Save";
  deleteTaskLabel.textContent = "Danger Zone";
  deleteTaskButton.textContent = "Delete Task";

  content.appendChild(taskInfoOverlay);

  taskInfoOverlay.appendChild(form);

  form.appendChild(taskInfoContainer);

  taskInfoContainer.appendChild(taskInfoHeading);
  taskInfoContainer.appendChild(taskInfoTextInputs);
  taskInfoContainer.appendChild(taskInfoClickInputs);
  taskInfoContainer.appendChild(deleteTaskContainer);

  taskInfoTextInputs.appendChild(taskInfoTitle);
  taskInfoTextInputs.appendChild(taskInfoDescription);
  taskInfoTextInputs.appendChild(taskTitleRequired);

  taskInfoClickInputs.appendChild(taskInfoDueDateContainer);
  taskInfoClickInputs.appendChild(taskInfoPriorityContainer);
  taskInfoClickInputs.appendChild(taskInfoProjectContainer);
  taskInfoClickInputs.appendChild(taskInfoFormButtons);

  taskInfoDueDateContainer.appendChild(taskInfoDueDateLabel);
  taskInfoDueDateContainer.appendChild(taskInfoDueDateInput);
  taskInfoDueDateContainer.appendChild(dueDateRequired);

  taskInfoPriorityContainer.appendChild(taskInfoPriorityLabel);
  taskInfoPriorityContainer.appendChild(taskInfoPrioritySelect);

  taskInfoPrioritySelect.appendChild(lowPriorityOption);
  taskInfoPrioritySelect.appendChild(mediumPriorityOption);
  taskInfoPrioritySelect.appendChild(highPriorityOption);

  taskInfoProjectContainer.appendChild(taskInfoProjectLabel);
  taskInfoProjectContainer.appendChild(taskInfoProjectSelect);

  taskInfoFormButtons.appendChild(taskInfoCancelButton);
  taskInfoFormButtons.appendChild(taskInfoSaveButton);

  deleteTaskContainer.appendChild(deleteTaskLabel);
  deleteTaskContainer.appendChild(deleteTaskButton);
}

export function showTaskInfo(task) {
  generateTaskInfo(task);

  const taskInfoOverlay = document.getElementById("task-info-overlay");
  taskInfoOverlay.style.display = "block";
}


// TODO Continue working on task info form--add button event listeners