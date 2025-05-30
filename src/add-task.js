import "./styles.css";
import { projectObjects, taskObjects } from "./object-arrays.js";
import {createEle, createLabel, createInput, createButton, createPurpleAddButton} from "./helper-functions.js";

//svg imports
import landscapeDots from "./svg/landscapeDots.svg";
import folderSearch from "./svg/folderSearch.svg";
import newFolder from "./svg/newFolder.svg";
import plus from "./svg/plus.svg";


const addTaskBtn = document.querySelector('.addTask');

//Listen to "Add a new task" tab in Left Container.
addTaskBtn.addEventListener('click',() => {
    changeAddTaskTab();
    createTaskDetailsBox();
    assignFolderValue();
});

//Once "Add a new task" tab is clicked, it's turned yellow and text changed.
function changeAddTaskTab () {
    //change the tab contents.
    addTaskBtn.classList.add('active-yellow');
    const landscapeDotsIcon = createEle('img');
    landscapeDotsIcon.src = landscapeDots;
    landscapeDotsIcon.setAttribute('class','left-side-icons');
    //addTaskBtn.appendChild(landscapeDotsIcon);

    const addingTaskText = createEle('p');
    addingTaskText.textContent = 'Adding a new task';
    //addTaskBtn.appendChild(addingTaskText);
    addTaskBtn.replaceChildren(landscapeDotsIcon, addingTaskText);
}

function createTaskDetailsBox() {
    const addNewTaskPage = createEle('div');
    addNewTaskPage.id = 'addNewTaskPage';
    rightContainer.appendChild(addNewTaskPage);
    //div or form???
    const newTaskDetailsBox = createEle('div');
    newTaskDetailsBox.id = "newTaskDetailsForm";
    addNewTaskPage.appendChild(newTaskDetailsBox);

    const taskDetailsTitle = createEle('h1');
    taskDetailsTitle.textContent = "New Task Details:";
    taskDetailsTitle.id = 'taskDetailsTitle';
    newTaskDetailsBox.appendChild(taskDetailsTitle);

        //task Name tab
    const taskNameContainer = createEle('div');
    taskNameContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(taskNameContainer);

    const taskNameLabel = createLabel('taskName', '*Task Name:');
    taskNameContainer.appendChild(taskNameLabel);

    const taskNameInput = createInput('text', 'taskName', 'Add task name');
    //taskNameInput.required = true;
    taskNameContainer.appendChild(taskNameInput);

    const taskNameAddBtn = createPurpleAddButton();
    taskNameContainer.appendChild(taskNameAddBtn);

        //choose project folder tab
    const setFolderContainer = createEle('div');
    setFolderContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(setFolderContainer);

    const setFolderLabel = createLabel('setFolder', '*Project folder:');
    setFolderContainer.appendChild(setFolderLabel);

    const setFolderInput = createInput('text', 'setFolder', '*Please choose a project folder');
    //setFolderInput.required = true;
    setFolderInput.readOnly = true;
    setFolderContainer.appendChild(setFolderInput);

    const folderTabsContainer = createEle('div');
    folderTabsContainer.setAttribute('class', 'folderTabs');
    setFolderContainer.appendChild(folderTabsContainer);

    // const chooseFolderDropdown = createEle('label');
    // chooseFolderDropdown.setAttribute('for', 'choosingFolder');
    // chooseFolderDropdown.id = 'chooseFolderDropdown';
    // folderTabsContainer.appendChild(chooseFolderDropdown);
    
    const select = createEle('select');
    select.setAttribute('id', 'choosingFolder');
    select.setAttribute('class', 'setProjectFolderBtn');
    folderTabsContainer.appendChild(select);

    const defaultOption = createEle('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Choose a project folder';
    select.appendChild(defaultOption);

    projectObjects.forEach ((folder) => {
        const option = createEle('option');
        option.value = folder.folderName;
        option.textContent = folder.folderName;
        select.appendChild(option);
    });

    folderTabsContainer.appendChild(select);

    const newFolderAddBtn = createButton(newFolder, 'create new project');
    newFolderAddBtn.setAttribute('class', 'setProjectFolderBtn');
    newFolderAddBtn.id = 'newFolderWindow';
    folderTabsContainer.appendChild(newFolderAddBtn);
    newFolderAddBtn.addEventListener('click', displayNewFolderWindow);

        //Description tab
    const taskDescriptionContainer = createEle('div');
    taskDescriptionContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(taskDescriptionContainer);

    const taskDescriptionLabel = createLabel('taskDescription', 'Description:');
    taskDescriptionContainer.appendChild(taskDescriptionLabel);

    const taskDescriptionInput = createInput('text', 'taskDescription');
    taskDescriptionContainer.appendChild(taskDescriptionInput);

    const taskDescriptionAddBtn = createPurpleAddButton();
    taskDescriptionContainer.appendChild(taskDescriptionAddBtn);

        //Notes tab
    const taskNotesContainer = createEle('div');
    taskNotesContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(taskNotesContainer);

    const taskNotesLabel = createLabel('taskNotes', 'Notes:');
    taskNotesContainer.appendChild(taskNotesLabel);

    const taskNotesInput = createInput('text', 'taskNotes');
    taskNotesContainer.appendChild(taskNotesInput);

    const taskNotesAddBtn = createPurpleAddButton();
    taskNotesContainer.appendChild(taskNotesAddBtn);

        //Main Action Buttons tab
    const mainActionBtnsContainer = createEle('div');
    mainActionBtnsContainer.setAttribute('class', 'mainActionBtnsContainer');
    newTaskDetailsBox.appendChild(mainActionBtnsContainer);

    

    const addTaskActionBtn = createEle('button');
    addTaskActionBtn.setAttribute('type', 'submit');
    addTaskActionBtn.id = 'addNewTaskActionBtn';
    addTaskActionBtn.addEventListener('click', clickSubmit);
    //addTaskActionBtn.disabled = true;
    addTaskActionBtn.setAttribute('class', 'mainActionBtns addActionBtn');
    addTaskActionBtn.textContent = 'Add new Task';
    mainActionBtnsContainer.appendChild(addTaskActionBtn);

    const newTaskCancelBtn = createEle('button');
    newTaskCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newTaskCancelBtn.textContent = 'Cancel Task';
    mainActionBtnsContainer.appendChild(newTaskCancelBtn);
}


//It takes the inputs from user and create a new task object.
class NewTask {
    constructor(taskName,projectFolder,description,notes) {
        this.taskName = taskName;
        this.projectFolder = projectFolder;
        this.description = description;
        this.notes = notes;
    }
    printTaskDetails() {
        console.log(`task name: ${this.taskName}`);
        console.log(`project folder: ${this.projectFolder}`);
        console.log(`description: ${this.description}`);
        console.log(`Notes: ${this.notes}`);
    }
}

//Listen to Add New Task action button, calls class NewTask() and return object's values. Then call function removeTaskPage.



function clickSubmit() {
    
    const objName = document.querySelector('#taskName');
    const objFolder = document.querySelector('#setFolder');
    const objDescription = document.querySelector('#taskDescription').value;
    const objNotes = document.querySelector('#taskNotes').value;

    if (objName.value === "" || objFolder.value === "") {
        alert("Please add task name and project folder");
        return false;
    } else {
        const newTaskObj = new NewTask(objName.value, objFolder.value, objDescription, objNotes);
        taskObjects.push(newTaskObj);
        newTaskObj.printTaskDetails();
        removeTaskPage();
        resetAddTaskTab();
        return true;
    }

}

function removeTaskPage() {
    const taskPage = document.querySelector('#addNewTaskPage');
    taskPage.remove();
}

function resetAddTaskTab () {
    addTaskBtn.classList.remove('active-yellow');
    const plusIcon = createEle('img');
    plusIcon.src = plus;
    plusIcon.setAttribute('class','left-side-icons');

    const newTaskText = createEle('p');
    newTaskText.textContent = 'Add a new task';
    addTaskBtn.replaceChildren(plusIcon, newTaskText);

}

//Listens to folder buttons, add chosen option to the the folder input.   
function assignFolderValue () {
    const dropDown = document.querySelector('#choosingFolder');
    const setFolder = document.querySelector('#setFolder');
    dropDown.addEventListener('change', () => {
        const selectedValue = dropDown.value;
        setFolder.value = selectedValue;
    })
}

function displayNewFolderWindow() {}