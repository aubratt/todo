import "./styles/styles.css";
import * as forms from "./modules/forms.js";
import { showHomepage } from "./modules/home-page.js";
import { showProjectPage } from "./modules/project-page.js";

showHomepage();

forms.createNewTaskButton.addEventListener("click", showHomepage);
