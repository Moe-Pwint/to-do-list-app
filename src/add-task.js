import "./styles.css";
import "./index.js";
import {createEle, createLabel, createInput, createButton, createPurpleAddButton} from "./helper-functions.js";

//svg imports
import landscapeDots from "./svg/landscapeDots.svg";
import folderSearch from "./svg/folderSearch.svg";
import newFolder from "./svg/newFolder.svg";


const addTaskBtn = document.querySelector('.addTask');

//Listen to "Add a new task" tab in Left Container.
addTaskBtn.addEventListener('click',() => {
    changeAddTaskTab();
    createTaskDetailsBox();
    createNewTask();
});

//Once "Add a new task" tab is clicked, it's turned yellow and text changed.
function changeAddTaskTab () {
    //change the tab contents.
    addTaskBtn.classList.add('active-yellow');
    const landscapeDotsIcon = createEle('img');
    landscapeDotsIcon.src = landscapeDots;
    landscapeDotsIcon.setAttribute('class','left-side-icons');
    addTaskBtn.appendChild(landscapeDotsIcon);

    const addingTaskText = createEle('p');
    addingTaskText.textContent = 'Adding a new task';
    addTaskBtn.appendChild(addingTaskText);
    addTaskBtn.replaceChildren(landscapeDotsIcon, addingTaskText);
}


function createTaskDetailsBox() {
    const addNewTaskPage = createEle('div');
    addNewTaskPage.id = 'addNewTaskPage';
    rightContainer.appendChild(addNewTaskPage);

    const newTaskDetailsBox = createEle('div');
    newTaskDetailsBox.id = "newTaskDetailsBox";
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
    taskNameContainer.appendChild(taskNameInput);

    const taskNameAddBtn = createPurpleAddButton();
    taskNameContainer.appendChild(taskNameAddBtn);

        //choose project folder tab
    const setFolderContainer = createEle('div');
    setFolderContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(setFolderContainer);

    const setFolderLabel = createLabel('setFolder', '*Project folder:');
    setFolderContainer.appendChild(setFolderLabel);

    const folderTabsContainer = createEle('div');
    folderTabsContainer.setAttribute('class', 'folderTabs');
    setFolderContainer.appendChild(folderTabsContainer);

    const chooseFolderAddBtn = createButton(folderSearch, 'choose project folder');
    chooseFolderAddBtn.setAttribute('class', 'setProjectFolderBtn');
    folderTabsContainer.appendChild(chooseFolderAddBtn);

    const newFolderAddBtn = createButton(newFolder, 'create new project');
    newFolderAddBtn.setAttribute('class', 'setProjectFolderBtn');
    folderTabsContainer.appendChild(newFolderAddBtn);

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
    addTaskActionBtn.id = 'addNewTaskActionBtn';
    addTaskActionBtn.setAttribute('class', 'mainActionBtns addActionBtn');
    addTaskActionBtn.textContent = 'Add new Task';
    mainActionBtnsContainer.appendChild(addTaskActionBtn);

    const newTaskCancelBtn = createEle('button');
    newTaskCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newTaskCancelBtn.textContent = 'Cancel Task';
    mainActionBtnsContainer.appendChild(newTaskCancelBtn);
}

function assignedFolder() {
    let selectedFolder;
    return selectedFolder;
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
function createNewTask() {
    const generateNewTask = document.querySelector('#addNewTaskActionBtn');
    generateNewTask.addEventListener('click', () => {
        const nameValue = document.querySelector('#taskName').value;
        const descriptionValue = document.querySelector('#taskDescription').value;
        const notesValue = document.querySelector('#taskNotes').value;
        const objName = nameValue;
        const objFolder = assignedFolder();
        let objDescription;
        let objNotes;
        if (descriptionValue) {
            objDescription = descriptionValue;
        } else {
            objDescription = '';
        }
        if (notesValue) {
            objNotes = notesValue;
        } else {
            objNotes = '';
        }

        const newTaskObj = new NewTask(objName, objFolder, objDescription, objNotes);
        newTaskObj.printTaskDetails();

        removeTaskPage();
    })
    
}


function removeTaskPage() {
    const taskPage = document.querySelector('#addNewTaskPage');
    taskPage.remove();
}