import { showHomepage } from "./home-page";
import { projects } from "./project";
import { showProjectPage } from "./project-page";

const content = document.getElementById("content");

function generateEditProjectForm(project) {
  const editProjectFormOverlay = document.createElement("div");
  const form = document.createElement("form");
  const editProjectFormContainer = document.createElement("div");
  const editProjectFormHeading = document.createElement("h4");
  const renameProjectContainer = document.createElement("div");
  const renameProjectInput = document.createElement("input");
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
  renameProjectFormButtons.classList.add("form-buttons");
  cancelButton.classList.add("cancel");
  renameProjectSaveButton.id = "save-rename";
  renameProjectSaveButton.classList.add("create");
  deleteProjectContainer.id = "delete-project-container";
  deleteProjectButton.classList.add("cancel");

  editProjectFormHeading.textContent = "Rename Project";
  renameProjectInput.type = "text";
  renameProjectInput.placeholder = "Project Name";
  renameProjectInput.value = project.name;
  cancelButton.textContent = "Cancel";
  renameProjectSaveButton.textContent = "Rename";
  deleteProjectLabel.textContent = "Danger Zone";
  deleteProjectButton.textContent = "Delete Project";

  cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    hideEditProjectForm();
  });
  renameProjectSaveButton.addEventListener("click", (event) => {
    event.preventDefault();
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
