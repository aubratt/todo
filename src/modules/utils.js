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
export function handleOutsideClick(overlay, container, inputs = {}) {
  // function handleClick(event) {
  //   if (!container.contains(event.target)) {
  //     hideOverlay(overlay);

  //     if (Object.keys(inputs).length > 0) {
  //       clearInputs(inputs);
  //     }
  //   }

  //   window.removeEventListener("click", function (event) {
  //     handleClick(event);
  //   });
  // }

  // window.addEventListener("click", function (event) {
  //   handleClick(event);
  // });
}

// Hide menu/form overlay
export function hideOverlay(overlay) {
  content.removeChild(overlay);
}

// Clear form inputs
export function clearInputs(inputs) {
  Object.keys(inputs).forEach((key) => {
    console.log(key, inputs[key].value);
    inputs[key].value = "";
  });
}
