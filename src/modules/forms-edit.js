const content = document.getElementById("content");

export function showEditProjectForm() {
  const editProjectFormOverlay = document.createElement("div");
  const form = document.createElement("form");
  const editProjectFormContainer = document.createElement("div");
  const editProjectFormHeading = document.createElement("h4");
  const renameProjectContainer = document.createElement("div");
  const renameProjectInput = document.createElement("input");
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
  renameProjectSaveButton.id = "save-rename";
  renameProjectSaveButton.classList.add("create");
  deleteProjectContainer.id = "delete-project-container";
  deleteProjectButton.classList.add("cancel");

  editProjectFormHeading.textContent = "Rename Project";
  renameProjectInput.placeholder = "Project Name";
  renameProjectSaveButton.textContent = "Rename";
  deleteProjectLabel.textContent = "Danger Zone";
  deleteProjectButton.textContent = "Delete Project";

  content.appendChild(editProjectFormOverlay);

  editProjectFormOverlay.appendChild(form);

  form.appendChild(editProjectFormContainer);

  editProjectFormContainer.appendChild(editProjectFormHeading);
  editProjectFormContainer.appendChild(renameProjectContainer);
  editProjectFormContainer.appendChild(deleteProjectContainer);

  renameProjectContainer.appendChild(renameProjectInput);
  renameProjectContainer.appendChild(renameProjectSaveButton);

  deleteProjectContainer.appendChild(deleteProjectLabel);
  deleteProjectContainer.appendChild(deleteProjectButton);

  editProjectFormOverlay.style.display = "block";
}
