export {displayNewFolderWindow};

import './styles.css';
import { projectObjects, taskObjects } from "./object-arrays.js";
import {createEle, createLabel, createInput} from "./helper-functions.js";

function displayNewFolderWindow() {
    const container = createEle('div');
    container.id = 'newProjectSetContainer';
    document.body.appendChild(container);

    const newFolderContainer = createEle('div');
    newFolderContainer.id = 'newFolderContainer';
    container.appendChild(newFolderContainer);

    const backdrop = createEle('div');
    backdrop.id = 'transparent-backdrop';
    container.appendChild(backdrop);

    const label = createLabel('folder-name', 'Please set the name of the project folder:');
    newFolderContainer.appendChild(label);

    const input = createInput('text', 'folder-name');
    input.setAttribute('placeholder','Type the name here');
    newFolderContainer.appendChild(input);

    const mainActionBtnsContainer = createEle('div');
    mainActionBtnsContainer.setAttribute('class', 'projectActionBtnsContainer');
    newFolderContainer.appendChild(mainActionBtnsContainer);

    const addProjectActionBtn = createEle('button');
    // addProjectActionBtn.setAttribute('type', 'submit');
    addProjectActionBtn.id = 'addProjectActionBtn';
    addProjectActionBtn.addEventListener('click', clickNewProjectSubmit);
    addProjectActionBtn.setAttribute('class', 'mainActionBtns addProjectActionBtn');
    addProjectActionBtn.textContent = 'Add project';
    mainActionBtnsContainer.appendChild(addProjectActionBtn);

    const newProjectCancelBtn = createEle('button');
    newProjectCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newProjectCancelBtn.textContent = 'Cancel project';
    mainActionBtnsContainer.appendChild(newProjectCancelBtn);
}

function clickNewProjectSubmit() {
    const objName = document.querySelector('#folder-name');

    if (objName.value === "") {
        alert("Please add the name of the new project folder.");
        return false;
    } else {
        const newProjectObj = new NewProject(objName.value);
        projectObjects.push(newProjectObj);
        removeProjectSettingContainer();
        return true;
    }
}

//This class takes the inputs from user and create a new project object.
class NewProject {
    constructor(projectName) {
        
        this.projectName = projectName;
    }
}

function removeProjectSettingContainer() {
    const projectSettingContainer = document.querySelector('#newProjectSetContainer');
    projectSettingContainer.remove();
    console.log(projectObjects);
}