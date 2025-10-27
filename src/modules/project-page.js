import { createTaskListItem, removeExistingHomepage, showHomepage } from "./home-page";
import leftArrow from "../images/left-arrow.svg";

const content = document.getElementById("content");

export function showProjectPage(project) {
  removeExistingProjectPage();
  removeExistingHomepage();

  const projectPage = document.createElement("div");
  const projectHeading = document.createElement("div");
  const backHomeArrow = document.createElement("img");
  const backHomeText = document.createElement("p");
  const projectName = document.createElement("h2");
  const projectTasks = document.createElement("div");

  projectPage.id = "project-page";
  projectHeading.id = "project-heading";
  backHomeArrow.id = "back-home-arrow";
  backHomeText.id = "back-home-text";
  projectTasks.id = "project-tasks";

  backHomeArrow.src = leftArrow;
  backHomeText.textContent = "Home";
  projectName.textContent = project.name;

  backHomeArrow.addEventListener("click", () => {
    removeExistingProjectPage();
    showHomepage();
  });
  backHomeText.addEventListener("click", () => {
    removeExistingProjectPage();
    showHomepage();
  });

  content.appendChild(projectPage);

  projectPage.appendChild(projectHeading);
  projectPage.appendChild(projectTasks);

  projectHeading.appendChild(backHomeArrow);
  projectHeading.appendChild(backHomeText);
  projectHeading.appendChild(projectName);

  if (project.tasks) {
    project.tasks.forEach((task) => {
      projectTasks.appendChild(createTaskListItem(task));
    });
  }
}

function removeExistingProjectPage() {
  const existingProjectPage = document.getElementById("project-page");
  if (existingProjectPage !== null) {
    content.removeChild(existingProjectPage);
  }
}
