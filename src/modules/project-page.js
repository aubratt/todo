import {
  createTaskListItem,
  removeExistingHomepage,
  showHomepage,
} from "./home-page";
import { preselectProjectName, showNewTaskForm } from "./forms-createnew";
import { showEditProjectForm } from "./forms-edit";
import add from "../images/add.svg";
import leftArrow from "../images/left-arrow.svg";
import optionsDots from "../images/options.svg";

const content = document.getElementById("content");

export function showProjectPage(project) {
  removeExistingProjectPage();
  removeExistingHomepage();

  const projectPage = document.createElement("div");
  const projectHeading = document.createElement("div");
  const projectHeadingLeft = document.createElement("div");
  const backHomeArrow = document.createElement("img");
  const backHomeText = document.createElement("p");
  const projectName = document.createElement("h2");
  const projectHeadingRight = document.createElement("div");
  const addNewTask = document.createElement("img");
  const options = document.createElement("img");
  const projectTasks = document.createElement("div");

  projectPage.id = "project-page";
  projectHeading.id = "project-heading";
  projectHeadingLeft.id = "project-heading-left";
  projectHeadingRight.id = "project-heading-right";
  backHomeArrow.id = "back-home-arrow";
  backHomeText.id = "back-home-text";
  addNewTask.id = "add-new-task";
  options.id = "options";
  projectTasks.id = "project-tasks";

  backHomeArrow.src = leftArrow;
  backHomeText.textContent = "Home";
  projectName.textContent = project.name;
  addNewTask.src = add;
  options.src = optionsDots;

  backHomeArrow.addEventListener("click", () => {
    removeExistingProjectPage();
    showHomepage();
  });
  backHomeText.addEventListener("click", () => {
    removeExistingProjectPage();
    showHomepage();
  });
  addNewTask.addEventListener("click", () => {
    showNewTaskForm();
    preselectProjectName(project);
  });
  options.addEventListener("click", () => {
    showEditProjectForm();
  })

  content.appendChild(projectPage);

  projectPage.appendChild(projectHeading);
  projectPage.appendChild(projectTasks);

  projectHeading.appendChild(projectHeadingLeft);
  projectHeading.appendChild(projectHeadingRight);

  projectHeadingLeft.appendChild(backHomeArrow);
  projectHeadingLeft.appendChild(backHomeText);
  projectHeadingLeft.appendChild(projectName);

  projectHeadingRight.appendChild(addNewTask);
  projectHeadingRight.appendChild(options);

  if (project.tasks) {
    project.tasks.forEach((task) => {
      projectTasks.appendChild(createTaskListItem(task));
    });
  }
}

export function removeExistingProjectPage() {
  const existingProjectPage = document.getElementById("project-page");
  if (existingProjectPage !== null) {
    content.removeChild(existingProjectPage);
  }
}
