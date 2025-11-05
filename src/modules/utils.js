// Close a menu/form when the user clicks outside of the menu/form container.
// Inputs parameter should be an object of all input elements--
// Example inputs parameter:
// inputs = {
//   title: titleElement;
//   description: descriptionElement;
//   dueDate: dueDateElement;
//   priority: priorityElement;
//   project: projectElement;
// }

// Hide menu/form overlay
export function hideOverlay(overlay) {
  content.removeChild(overlay);
}

// Clear form inputs
export function clearInputs(inputs) {
  if (inputs) {
    Object.keys(inputs).forEach((key) => {
      inputs[key].value = "";
    });
  }
}
