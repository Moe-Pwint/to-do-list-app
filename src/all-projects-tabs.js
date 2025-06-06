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
    newProjectTab.setAttribute('class', 'tabButton project-tabs left-tabs-style');
    newProjectTabContainer.appendChild(newProjectTab);

    const projectSpan = createEle('span');
    newProjectTab.appendChild(projectSpan);

    const projectIcon = createEle('img');
    projectIcon.src = folder;
    projectIcon.setAttribute('class', 'left-side-icons');
    projectSpan.appendChild(projectIcon);

    const projectTabText = createEle('p');
    projectTabText.textContent = projectName;
    projectSpan.appendChild(projectTabText);

    //checking that if the project is added, while a new task is being created, the tab will be disabled.
    if (document.querySelector('#addTask').classList.contains('active-yellow')) {
        newProjectTab.disabled = true;
    }
}

function updateProjectTasksTabs(parentProject, childTaskObj) {
    const taskName = childTaskObj.taskName;
    const parentProjectContainer = document.getElementById(parentProject);

    const newTaskTab = createEle('button');
    newTaskTab.setAttribute('class', 'tabButton task-tabs');
    newTaskTab.id = childTaskObj.taskId;
    parentProjectContainer.appendChild(newTaskTab);

    const taskSpan = createEle('span');
    newTaskTab.appendChild(taskSpan);

    const taskIcon = createEle('img');
    taskIcon.src = arrowDownRight;
    taskIcon.setAttribute('class', 'left-side-icons');
    taskSpan.appendChild(taskIcon);

    const taskTabText = createEle('p');
    taskTabText.textContent = taskName;
    taskSpan.appendChild(taskTabText);
    
    newTaskTab.addEventListener('click', ()=> {
    openTaskPage(childTaskObj);
    });
}

