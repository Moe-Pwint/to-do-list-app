import "./styles.css";

import odinImage from "./images/odin.png";
import plus from "./svg/plus.svg";
import search from "./svg/search.svg";
import today from "./svg/today.svg";
import addProject from "./svg/addProject.svg";
import del from "./svg/del.svg";
import portraitDots from './svg/portraitDots.svg';

export default createMainElements;
export {createEle};

function createEle (ele) {
    return document.createElement(ele);
}

function createMainElements () {


    //main containers
    const appContainer = createEle('div');
    appContainer.id = 'appContainer';
    document.body.appendChild(appContainer);

    const leftContainer = createEle('div');
    leftContainer.id = 'leftContainer';
    appContainer.appendChild(leftContainer);

    const rightContainer = createEle('div');
    rightContainer.id = 'rightContainer';
    appContainer.appendChild(rightContainer);



    //logo section
    const logoContainer = createEle('div');
    logoContainer.id = 'logoContainer';
    leftContainer.appendChild(logoContainer);

    const logo = createEle("img");
    logo.src = odinImage;
    logo.id= 'logo';
    logoContainer.appendChild(logo);

    const logoText = createEle('p');
    logoText.textContent = 'DoMe';
    logoText.id = 'logoText';
    logoContainer.appendChild(logoText);


    // top left tabs
    const topLeftContainer = createEle('div');
    topLeftContainer.id = 'topLeftContainer';
    leftContainer.appendChild(topLeftContainer);

        //Add new task tab
    const newTaskContainer = createEle('button');
    //addTask class will do adding task logic.
    newTaskContainer.setAttribute('class','addTask top-left-tabs');
    topLeftContainer.appendChild(newTaskContainer);

    const plusIcon = createEle('img');
    plusIcon.src = plus;
    plusIcon.setAttribute('class','left-side-icons');
    newTaskContainer.appendChild(plusIcon);

    const newTaskText = createEle('p');
    newTaskText.textContent = 'Add a new task';
    newTaskContainer.appendChild(newTaskText);

        //Search tab
    const searchContainer = createEle('button');
    //searchLogic class will do search logic.
    searchContainer.setAttribute('class','searchLogic top-left-tabs');
    topLeftContainer.appendChild(searchContainer);

    const searchIcon = createEle('img');
    searchIcon.src = search;
    searchIcon.setAttribute('class','left-side-icons');
    searchContainer.appendChild(searchIcon);

    const searchText = createEle('p');
    searchText.textContent = 'Search task or project';
    searchContainer.appendChild(searchText);

        //Today tab
    const todayContainer = createEle('button');
    //todayLogic class will do today logic.
    todayContainer.setAttribute('class','todayLogic top-left-tabs');
    topLeftContainer.appendChild(todayContainer);

    const todayIcon = createEle('img');
    todayIcon.src = today;
    todayIcon.setAttribute('class','left-side-icons');
    todayContainer.appendChild(todayIcon);

    const todayText = createEle('p');
    todayText.textContent = 'Today';
    todayContainer.appendChild(todayText);


    //Bottom section
    const projectsTitleContainer = createEle('div');
    projectsTitleContainer.setAttribute('id', 'projectsTitleContainer');
    leftContainer.appendChild(projectsTitleContainer);

    const allProjectsTitle = createEle('h2');
    allProjectsTitle.textContent = 'All Projects';
    projectsTitleContainer.appendChild(allProjectsTitle);

        //Add Project icon
    const addProjectIcon = createEle('button');
    addProjectIcon.id = 'addProjectIcon';
    const projectIcon = createEle('img');
    projectIcon.src = addProject;
    projectIcon.setAttribute('class','left-side-icons');
    projectIcon.id = 'projectIcon';
    addProjectIcon.appendChild(projectIcon);
    projectsTitleContainer.appendChild(addProjectIcon); 



    //PROJECTS DISPLAY

    const projectsContainer = createEle('div');
    projectsContainer.id = 'projectsContainer';
    leftContainer.appendChild(projectsContainer);

    //Deleted tasks

    const delContainer = createEle('div');
    leftContainer.appendChild(delContainer);

    const delTab = createEle('button');
    //this is common class for all dynamically created projects.
    delTab.setAttribute('class', 'projects-tabs');
    delTab.id = 'del-tab';
    delContainer.appendChild(delTab);

    const delIcon = createEle('img');
    delIcon.src = del;
    delIcon.setAttribute('class', 'left-side-icons');
    delTab.appendChild(delIcon);

    const delTabText = createEle('p');
    delTabText.textContent = 'Deleted Tasks';
    delTab.appendChild(delTabText);

    const portraitDotsIcon = createEle('img');
    portraitDotsIcon.src = portraitDots;
    portraitDotsIcon.setAttribute('class', 'left-side-icons push-right');
    delTab.appendChild(portraitDotsIcon);
}

