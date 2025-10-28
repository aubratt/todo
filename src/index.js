import "./styles/styles.css";
import * as formsCreatenew from "./modules/forms-createnew.js";
import { showHomepage } from "./modules/home-page.js";

showHomepage();

const todoLogo = document.getElementById("todo-logo");

todoLogo.addEventListener("click", showHomepage);
