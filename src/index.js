import "./styles/styles.css";
import { showHomepage } from "./modules/home-page.js";

showHomepage();

const todoLogo = document.getElementById("todo-logo");

todoLogo.addEventListener("click", showHomepage);
