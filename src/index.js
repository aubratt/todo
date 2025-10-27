import "./styles/styles.css";
import * as forms from "./modules/forms.js";
import { showHomepage } from "./modules/home-page.js";

showHomepage();

forms.createNewProjectButton.addEventListener("click", showHomepage);
forms.createNewTaskButton.addEventListener("click", showHomepage);