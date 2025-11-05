import {
  generateOverlay,
  generateOverlayContainer,
  generateMenuButton,
} from "./element-factory";

import { handleOutsideClick, hideOverlay } from "./utils";

const content = document.getElementById("content");
const addButton = document.getElementById("add");

addButton.addEventListener("click", buildMenu);

export function buildMenu() {
  const overlay = generateOverlay();
  const overlayContainer = generateOverlayContainer();
  const newProjectButton = generateMenuButton("New Project");
  const newTaskButton = generateMenuButton("New Task");

  handleOutsideClick(overlay, overlayContainer);
  handleNewProjectClick(newProjectButton, overlay);
  handleNewTaskClick(newTaskButton, overlay);

  content.appendChild(overlay);
  overlay.appendChild(overlayContainer);
  overlayContainer.appendChild(newProjectButton);
  overlayContainer.appendChild(newTaskButton);
}

function handleNewProjectClick(button, overlay) {
  function onClick() {
    hideOverlay(overlay);
    buildNewProjectForm();
  }
  button.addEventListener("click", onClick);
}

function handleNewTaskClick(button, overlay) {
  function onClick() {
    hideOverlay(overlay);
    buildNewTaskForm();
  }
  button.addEventListener("click", onClick);
}
