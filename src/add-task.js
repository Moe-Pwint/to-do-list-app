import "./styles.css";
import createMainElements, {createEle} from "./main-ui";

import landscapeDots from "./svg/landscapeDots.svg";
import plusPurple from "./svg/plusPurple.svg";
import folderSearch from "./svg/folderSearch.svg";
import newFolder from "./svg/newFolder.svg";

createMainElements();

const addTaskBtn = document.querySelector('.addTask');

addTaskBtn.addEventListener('click',() => {
    changeAddTaskTab();
    createTaskDetailsBox();
});

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

    const taskNameLabel = createTaskDetailsLabel('taskName', '*Task Name:');
    taskNameContainer.appendChild(taskNameLabel);

    const taskNameInput = createTaskDetailsInput('text', 'taskName', 'Add task name');
    taskNameContainer.appendChild(taskNameInput);

    const taskNameAddBtn = createAddButton();
    taskNameContainer.appendChild(taskNameAddBtn);

        //choose project folder tab
    const setFolderContainer = createEle('div');
    setFolderContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(setFolderContainer);

    const setFolderLabel = createTaskDetailsLabel('setFolder', '*Project folder:');
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

    const taskDescriptionLabel = createTaskDetailsLabel('taskDescription', 'Description:');
    taskDescriptionContainer.appendChild(taskDescriptionLabel);

    const taskDescriptionInput = createTaskDetailsInput('text', 'taskDescription');
    taskDescriptionContainer.appendChild(taskDescriptionInput);

    const taskDescriptionAddBtn = createAddButton();
    taskDescriptionContainer.appendChild(taskDescriptionAddBtn);

        //Notes tab
    const taskNotesContainer = createEle('div');
    taskNotesContainer.setAttribute('class', 'taskDetailsContainers');
    newTaskDetailsBox.appendChild(taskNotesContainer);

    const taskNotesLabel = createTaskDetailsLabel('taskNotes', 'Notes:');
    taskNotesContainer.appendChild(taskNotesLabel);

    const taskNotesInput = createTaskDetailsInput('text', 'taskNotes');
    taskNotesContainer.appendChild(taskNotesInput);

    const taskNotesAddBtn = createAddButton();
    taskNotesContainer.appendChild(taskNotesAddBtn);

        //Main Action Buttons tab
    const mainActionBtnsContainer = createEle('div');
    mainActionBtnsContainer.setAttribute('class', 'mainActionBtnsContainer');
    newTaskDetailsBox.appendChild(mainActionBtnsContainer);

    const addTaskActionBtn = createEle('button');
    addTaskActionBtn.setAttribute('class', 'mainActionBtns addActionBtn');
    addTaskActionBtn.textContent = 'Add new Task';
    mainActionBtnsContainer.appendChild(addTaskActionBtn);

    const newTaskCancelBtn = createEle('button');
    newTaskCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newTaskCancelBtn.textContent = 'Cancel Task';
    mainActionBtnsContainer.appendChild(newTaskCancelBtn);
}

function createTaskDetailsLabel (forValue, text) {
    const label = createEle('label');
    label.setAttribute('for', forValue);
    label.textContent = text;
    return label;

}

function createTaskDetailsInput(typeValue, idValue, defaultText) {
    const input = createEle('input');
    input.setAttribute('type', typeValue);
    input.id = idValue;
    input.setAttribute('name', idValue);
    defaultText && input.setAttribute('placeholder', defaultText);
    return input;
}

function createButton(iconSrc, textValue) {
    const button = createEle('button');
    
    const icon = createEle('img');
    icon.src = iconSrc;
    button.appendChild(icon);

    const text = createEle('p');
    text.textContent = textValue;
    button.appendChild(text);

    return button;
} 

function createAddButton () {
    const addBtn = createButton(plusPurple, 'Add');
    addBtn.setAttribute('class', 'plusButton');
    return addBtn;
}