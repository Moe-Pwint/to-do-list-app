import "./styles.css";
import "./main-ui.js";
import "./add-new-task.js";

//When a new project folder is created in add-new-task.js, it should only show up after the new task is submitted.
//
//!!! Big changes! task objects need to store project folder's ID, instead of its name. But changes needed in a lot of places.
//Submitting new task at add-new-task.js not working. task not added to folder. And can't click new task yellow tab on left too.
//Write logic to edit task object at open-task-page.js
//Write logic to edit items in items-display.js
//Listen to new task/new item submit buttons, when each inner button is on change, if all required fields are filled, enable the submit buttons.