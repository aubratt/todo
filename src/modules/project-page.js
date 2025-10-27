import { createTaskListItem } from "./home-page";
import leftArrow from "../images/left-arrow.svg";

const content = document.getElementById("content");

export function showProjectPage(project) {
  const projectPage = document.createElement("div");
  const projectHeading = document.createElement("div");
  const backHomeArrow = document.createElement("img");
  const backHomeText = document.createElement("p");
  const projectName = document.createElement("h2");
  const projectTasks = document.createElement("div");

  projectHeading.classList.add("project-heading");
  backHomeArrow.classList.add("back-home-arrow");
  backHomeText.classList.add("back-home-text");

  backHomeArrow.src = leftArrow;
  backHomeText.textContent = "Home";
  projectName.textContent = project.name;

  content.appendChild(projectPage);

  projectPage.appendChild(projectHeading);
  projectPage.appendChild(projectTasks);

  projectHeading.appendChild(backHomeArrow);
  projectHeading.appendChild(backHomeText);
  projectHeading.appendChild(projectName);

  project.tasks.forEach((task) => {
    projectTasks.appendChild(createTaskListItem(task));
  });
}
