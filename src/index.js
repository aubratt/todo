import "./styles/styles.css";
import { buildHomepage } from "./modules/page-builder";
import { handleAddButtonClick } from "./modules/menu-builder";
import { handleHeaderLogoClick } from "./modules/utils";

buildHomepage();
handleAddButtonClick();
handleHeaderLogoClick();
