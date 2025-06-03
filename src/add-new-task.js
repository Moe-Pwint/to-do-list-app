//When the top left tab "Add New Task" is clicked, this page is generated and a new task is created.
import "./styles.css";
import { projectObjects, taskObjects, NewTask, } from "./object-n-task-arrays.js";
import {appendTransparentBackdrop,removeTransparentBackdrop, createEle, createLabel, createInput, createButton, checkInputFieldStatus} from "./helper-functions.js";
import { displayNewFolderWindow} from "./add-new-project.js";
import {updateProjectTasksTabs} from "./all-projects-tabs.js";

//svg imports
import landscapeDots from "./svg/landscapeDots.svg";
import newFolder from "./svg/newFolder.svg";
import plus from "./svg/plus.svg";
import plusPurple from "./svg/plusPurple.svg";


const addTaskBtn = document.querySelector('.addTask');

//Listen to "Add a new task" tab in Left Container.
addTaskBtn.addEventListener('click',() => {
    appendTransparentBackdrop();
    changeAddTaskTab();
    createTaskDetailsBox();
    assignFolderValueOnChange();
});

//Once "Add a new task" tab is clicked, it's turned yellow and text changed.
function changeAddTaskTab () {
    addTaskBtn.classList.add('active-yellow');
    const landscapeDotsIcon = createEle('img');
    landscapeDotsIcon.src = landscapeDots;
    landscapeDotsIcon.setAttribute('class','left-side-icons');

    const addingTaskText = createEle('p');
    addingTaskText.textContent = 'Adding a new task';
    addTaskBtn.replaceChildren(landscapeDotsIcon, addingTaskText);
}

function createTaskDetailsBox() {
    const addNewTaskPage = createEle('div');
    addNewTaskPage.id = 'addNewTaskPage';
    rightContainer.replaceChildren();
    rightContainer.appendChild(addNewTaskPage);
    const newTaskDetailsBox = createEle('div');
    newTaskDetailsBox.id = "newTaskDetailsDiv";
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

    const taskNameInput = createInput('text', 'taskName', 'inputField', 'Add task name');
    taskNameContainer.appendChild(taskNameInput);

    const taskNameAddBtn = createButton(plusPurple, 'Add', 'inputButton');
    taskNameContainer.appendChild(taskNameAddBtn);

        //choose project folder tab
    const setFolderContainer = createEle('div');
    setFolderContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(setFolderContainer);

    const setFolderLabel = createLabel('setFolder', '*Project folder:');
    setFolderContainer.appendChild(setFolderLabel);

    const setFolderInput = createInput('text', 'setFolder','', '*Please choose a project folder');
    setFolderInput.readOnly = true;
    setFolderContainer.appendChild(setFolderInput);

    const folderTabsContainer = createEle('div');
    folderTabsContainer.setAttribute('class', 'folderTabs');
    setFolderContainer.appendChild(folderTabsContainer);
    
    const select = createEle('select');
    select.setAttribute('id', 'choosingFolder');
    select.setAttribute('class', 'setProjectFolderBtn');
    folderTabsContainer.appendChild(select);
    select.addEventListener('focus', loadChooseFolder);

    const defaultOption = createEle('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Choose a project folder';
    defaultOption.setAttribute('class', 'chooseFolderOptions');
    select.appendChild(defaultOption);

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

    const taskDescriptionInput = createInput('text', 'taskDescription', 'inputField', 'taskDescription');
    taskDescriptionContainer.appendChild(taskDescriptionInput);

    const taskDescriptionAddBtn = createButton(plusPurple, 'Add', 'inputButton');
    taskDescriptionContainer.appendChild(taskDescriptionAddBtn);

        //Notes tab
    const taskNotesContainer = createEle('div');
    taskNotesContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(taskNotesContainer);

    const taskNotesLabel = createLabel('taskNotes', 'Notes:');
    taskNotesContainer.appendChild(taskNotesLabel);

    const taskNotesInput = createInput('text', 'taskNotes', 'inputField', 'taskNotes');
    taskNotesContainer.appendChild(taskNotesInput);

    const taskNotesAddBtn = createButton(plusPurple, 'Add', 'inputButton');
    taskNotesContainer.appendChild(taskNotesAddBtn);

        //Main Action Buttons tab
    const mainActionBtnsContainer = createEle('div');
    mainActionBtnsContainer.setAttribute('class', 'mainActionBtnsContainer');
    newTaskDetailsBox.appendChild(mainActionBtnsContainer);

    const addTaskActionBtn = createEle('button');
    addTaskActionBtn.id = 'addNewTaskActionBtn';
    addTaskActionBtn.addEventListener('click', clickNewTaskSubmit);
    addTaskActionBtn.setAttribute('class', 'mainActionBtns addActionBtn');
    addTaskActionBtn.textContent = 'Add new Task';
    mainActionBtnsContainer.appendChild(addTaskActionBtn);

    const newTaskCancelBtn = createEle('button');
    newTaskCancelBtn.addEventListener('click', cancelNewTask);
    newTaskCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newTaskCancelBtn.textContent = 'Cancel Task';
    mainActionBtnsContainer.appendChild(newTaskCancelBtn);

    checkInputFieldStatus();
}

function loadChooseFolder() {
    const choosingFolder = document.querySelector('#choosingFolder');
    choosingFolder.replaceChildren();
    const defaultOption = createEle('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Choose a project folder';
    defaultOption.setAttribute('class', 'chooseFolderOptions');
    choosingFolder.appendChild(defaultOption);

    for (const folder of projectObjects) {
        const option = createEle('option');
        option.value = folder.projectName;
        option.textContent = folder.projectName;
        option.setAttribute('class', 'chooseFolderOptions');
        choosingFolder.appendChild(option);
    }

}

//When New Task Action Button is clicked, this function calls class NewTask() and return object's values. 
//Then call function removeTaskPage and function resetAddTaskTab.
function clickNewTaskSubmit() {
    
    const objName = document.querySelector('#taskName');
    const objFolder = document.querySelector('#setFolder');
    const objDescription = document.querySelector('#taskDescription').value;
    const objNotes = document.querySelector('#taskNotes').value;
    let foundProjectObj;
    for (const projectObj of projectObjects) {
        if (objFolder.value == projectObj.projectName) {
            foundProjectObj = projectObj;
        }
    }

    if (objName.value === "" || objFolder.value === "") {
        alert("Please add task name and project folder");
        return false;
    } else {
        const newTaskObj = new NewTask(objName.value, objFolder.value, objDescription, objNotes);
        taskObjects.push(newTaskObj);
        addNewTaskToProject(newTaskObj, foundProjectObj);
        updateProjectTasksTabs(foundProjectObj, newTaskObj);
        removeTaskPage();
        resetAddTaskTab();
        return true;
    }

}

//when new task is submitted, the newTask Object is added to it's parent projectObj in its projectObj array.
function addNewTaskToProject(newTaskObj, projectObj) {
    projectObj.tasksList.push(newTaskObj);          
}

function cancelNewTask() {
    removeTaskPage();
    resetAddTaskTab();
}

function removeTaskPage() {
    const taskPage = document.querySelector('#addNewTaskPage');
    removeTransparentBackdrop();
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

//Listens to 'choose folder' button, add chosen option to the the folder input.   
function assignFolderValueOnChange () {
    const dropDown = document.querySelector('#choosingFolder');
    const setFolder = document.querySelector('#setFolder');
    dropDown.addEventListener('change', () => {
        const selectedValue = dropDown.value;
        setFolder.value = selectedValue;
    })
}

