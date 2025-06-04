//displaying and updating the projects and tasks tabs in the bottom left container.
//When clicking these tabs, project/task page opens up on the right container.
//Project tabs containers' ids are assigned their project's projectId number. 
//Task tabs' ids are assigned their task's taskId number.
export{updateAllProjectsTabs, updateProjectTasksTabs};

import { createEle } from "./helper-functions";
import './styles.css';
import {openTaskPage} from "./open-task-page.js";

//svg imports
import folder from "./svg/folder.svg";
import arrowDownRight from "./svg/arrow-down-right.svg";

function updateAllProjectsTabs(newProjectObj) {
    const projectName = newProjectObj.projectName;
    const projectsContainer = document.querySelector('#projectsContainer');
    
    const newProjectTabContainer = createEle('div');
    newProjectTabContainer.id = newProjectObj.projectId;
    projectsContainer.appendChild(newProjectTabContainer);

    const newProjectTab = createEle('button');
    newProjectTab.setAttribute('class', 'leftSide-tabs project-tabs');
    newProjectTabContainer.appendChild(newProjectTab);

    const projectIcon = createEle('img');
    projectIcon.src = folder;
    projectIcon.setAttribute('class', 'left-side-icons');
    newProjectTab.appendChild(projectIcon);

    const projectTabText = createEle('p');
    projectTabText.textContent = projectName;
    newProjectTab.appendChild(projectTabText);
}

function updateProjectTasksTabs(parentProject, childTaskObj) {
    const taskName = childTaskObj.taskName;
    const parentProjectContainer = document.getElementById(parentProject.projectId);

    const newTaskTab = createEle('button');
    newTaskTab.setAttribute('class', 'leftSide-tabs task-tabs');
    newTaskTab.id = childTaskObj.taskId;
    parentProjectContainer.appendChild(newTaskTab);

    const taskIcon = createEle('img');
    taskIcon.src = arrowDownRight;
    taskIcon.setAttribute('class', 'left-side-icons');
    newTaskTab.appendChild(taskIcon);

    const taskTabText = createEle('p');
    taskTabText.textContent = taskName;
    newTaskTab.appendChild(taskTabText);
    
    document.getElementById(childTaskObj.taskId).addEventListener('click', ()=> {
    openTaskPage(childTaskObj);
    });
}

