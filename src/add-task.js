import "./styles.css";
import createMainElements, {createEle} from "./main-ui";

import landscapeDots from "./svg/landscapeDots.svg";

createMainElements();
//const rightContainer = document.querySelector('#rightContainer');
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
    landscapeDotsIcon.setAttribute('class','icons');
    addTaskBtn.appendChild(landscapeDotsIcon);

    const addingTaskText = createEle('p');
    addingTaskText.textContent = 'Adding a new task';
    addTaskBtn.appendChild(addingTaskText);
    addTaskBtn.replaceChildren(landscapeDotsIcon, addingTaskText);
}

function createTaskDetailsBox() {
    const newTaskDetailsBox = createEle('div');
    newTaskDetailsBox.id = "newTaskDetailsBox";
    rightContainer.appendChild(newTaskDetailsBox);

    const taskDetailsTitle = createEle('h1');
    taskDetailsTitle.textContent = "New Task Details:";
    newTaskDetailsBox.appendChild(taskDetailsTitle);
}