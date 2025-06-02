import { createEle } from "./helper-functions";
import folder from "./svg/folder.svg";
import arrowDownRight from "./svg/arrow-down-right.svg";
import './styles.css';

export{updateAllProjectsTabs, updateProjectTasksTabs};

function updateAllProjectsTabs(newProjectObj) {
    const projectName = newProjectObj.projectName;
    const projectsContainer = document.querySelector('#projectsContainer');
    
    const newProjectTabContainer = createEle('div');
    newProjectTabContainer.id = projectName;
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

    // const portraitDotsIcon = createEle('img');
    // portraitDotsIcon.src = portraitDots;
    // portraitDotsIcon.setAttribute('class', 'left-side-icons push-right');
    // newProjectTab.appendChild(portraitDotsIcon);
}

function updateProjectTasksTabs(parentProject, childTaskObj) {
    const taskName = childTaskObj.taskName;
    const parentProjectContainer = document.getElementById(parentProject);

    const newTaskTab = createEle('button');
    newTaskTab.setAttribute('class', 'leftSide-tabs task-tabs');
    newTaskTab.id = taskName;
    parentProjectContainer.appendChild(newTaskTab);

    const taskIcon = createEle('img');
    taskIcon.src = arrowDownRight;
    taskIcon.setAttribute('class', 'left-side-icons');
    newTaskTab.appendChild(taskIcon);

    const taskTabText = createEle('p');
    taskTabText.textContent = taskName;
    newTaskTab.appendChild(taskTabText);
    
}