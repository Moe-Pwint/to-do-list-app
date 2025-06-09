//When a folder tab is clicked from the left bottom container, folder contents will collapse.
export {openFolderPage};

import './styles.css';
import { openTaskPage } from "./open-task-page";
import { taskObjects } from './objects-n-classes';
import {createEle} from './helper-functions.js';

function openFolderPage(folderObj) {
    const container = document.querySelector('#rightContainer');
    container.replaceChildren();

    const projectName = createEle('p');
    projectName.textContent = folderObj.projectName;
    container.appendChild(projectName);

    folderObj.tasksList.forEach((taskId) => {
        const taskObj = taskObjects.find(task => task.taskId == taskId);
        openTasksSummary(taskObj);
    })
}

function openTasksSummary(taskObj) {
    const container = document.querySelector('#rightContainer');
    const taskContainer = createEle('div');
    container.appendChild(taskContainer);
    const taskName = createEle('button');
    taskName.textContent = taskObj.taskName;
    taskContainer.appendChild(taskName);
    taskName.addEventListener('click', ()=> openTaskPage(taskObj));
}