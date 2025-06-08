//When a task tab on the left bottom container is clicked, the task details are shown on the right container.
//Task items can be added here.
//Task object can be modified/deleted from this file.
export {openTaskPage};

import './styles.css';
import {itemObjects, projectObjects, taskObjects} from'./objects-n-classes.js';
import {createButton, createEle} from './helper-functions.js';
import {newItemDetails} from './new-item-details.js';
import { createItemDisplay } from './items-display.js';

//svg imports
import taskEdit from './svg/taskEdit.svg';
import plusWhite from './svg/plusWhite.svg';

function openTaskPage(childTaskObj) {

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
    const projectFolder = projectObjects.find(obj => obj.tasksList.includes(childTaskObj.taskId));
    projectTitle.textContent = `from ${projectFolder.projectName}`;
    projectTitle.id = 'taskPageProjectFolder';
    container.appendChild(projectTitle);

    //add new item button
    const addNewItemBtn = createButton(plusWhite, 'Add new item');
    addNewItemBtn.id = 'addNewItemBtn';
    container.appendChild(addNewItemBtn);

    addNewItemBtn.addEventListener('click', () => newItemDetails(childTaskObj));

    //items section
    const itemsContainer = createEle('div');
    itemsContainer.id = 'itemsContainer';
    container.appendChild(itemsContainer);
    const parentTask = taskObjects.find(obj => obj == childTaskObj);
    const itemsListRef = parentTask.itemsList;
    if (itemsListRef.length > 0) {
        loadItems(itemsListRef, parentTask);
    }
}

function loadItems(itemsListRef, parentTask) {
    
    for (const itemIdRef of itemsListRef) {
        const item = itemObjects.find(obj => obj.itemId == itemIdRef);
        createItemDisplay(item, parentTask);
    }
}