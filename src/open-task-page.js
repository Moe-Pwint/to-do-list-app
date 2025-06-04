//When a task tab on the left bottom container is clicked, the task details are shown on the right container.
//Task items can be added here.
//Task object can be modified/deleted from this file.
export {openTaskPage};

import './styles.css';
import './object-n-task-arrays.js';
import {createButton, createEle} from './helper-functions.js';
import {newItemDetails} from './new-item-details.js';

//svg imports
import taskEdit from './svg/taskEdit.svg';
import plusWhite from './svg/plusWhite.svg';

function openTaskPage(childTaskObj) {

    changeTaskTab(childTaskObj);

    //task title
    const taskName = childTaskObj.taskName;
    const container = createEle('div');
    container.setAttribute('id', 'openTaskContainer');
    const rightContainer = document.querySelector('#rightContainer');
    rightContainer.replaceChildren();
    rightContainer.appendChild(container);

    const taskTitleContainer = createEle('div');
    taskTitleContainer.setAttribute('id', 'taskTitleContainer');
    container.appendChild(taskTitleContainer);

    const taskTitle = createEle('p');
    taskTitle.textContent = taskName;
    taskTitle.setAttribute('class', 'taskTitle');
    taskTitleContainer.appendChild(taskTitle);

    const taskEditIcon = createButton(taskEdit,'','purpleIconBtn');
    taskTitleContainer.appendChild(taskEditIcon);

    //project title
    const projectTitle = createEle('p');
    projectTitle.textContent = `from ${childTaskObj.projectFolder}`;
    projectTitle.setAttribute('class', 'TaskPageProjectFolder');
    container.appendChild(projectTitle);

    //add new item button
    const addNewItemBtn = createButton(plusWhite, 'Add new item');
    addNewItemBtn.id = 'addNewItemBtn';
    container.appendChild(addNewItemBtn);

    addNewItemBtn.addEventListener('click', newItemDetails(childTaskObj));

    //items section
    const itemsContainer = createEle('div');
    itemsContainer.setAttribute('class', 'itemsContainer');
    container.appendChild(itemsContainer);
}

//Once "Add a new task" tab is clicked, it's turned yellow and text changed.
function changeTaskTab(childTaskObj) {
    const currentTaskTab = document.getElementById(childTaskObj.taskId);
    currentTaskTab.classList.add('active-yellow');
}