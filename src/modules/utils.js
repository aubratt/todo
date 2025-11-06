import { buildHomepage, hideHomepage, hideProjectPage } from "./page-builder";

// Go to homepage on header logo click
export function handleHeaderLogoClick() {
  const headerLogo = document.getElementById("todo-logo");

  function onClick() {
    hideHomepage();
    hideProjectPage();
    buildHomepage();
  }
  headerLogo.addEventListener("click", onClick);
}

// Hide menu/form overlay
export function hideOverlay(overlay) {
  if (overlay) {
    content.removeChild(overlay);
  }
}

// Clear form inputs
export function clearInputs(inputs) {
  if (inputs) {
    Object.keys(inputs).forEach((key) => {
      inputs[key].value = "";
    });
  }
}
