//When a task tab on the left bottom container is clicked, the task details are shown on the right container.
//Task items can be added here.
//Task object can be modified/deleted from this file.
export {openTaskPage};

import './styles.css';
import './object-n-task-arrays.js';
import {createEle} from './helper-functions.js';

function openTaskPage(childTaskObj) {
    const taskName = childTaskObj.taskName;
    const container = createEle('div');
    container.setAttribute('class', 'openTaskContainer');
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
}

