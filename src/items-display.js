//import { itemObjects } from "./objects-n-classes";

//When the open-task-page.js is loaded, items will be displayed using the logics in this file.
export {createItemDisplay, createCheckbox};

import { createEle } from "./helper-functions";


function createItemDisplay(itemObj) {
    const itemsContainer = document.querySelector('#itemsContainer');

    const itemTab = createEle('div');
    itemTab.setAttribute('class', 'item-tab');
    itemsContainer.appendChild(itemTab);

    const itemCircle = createEle('div');
    itemCircle.setAttribute('class', 'circle');
    const priorityStatus = itemObj.itemPriority;
    if (priorityStatus == 'Low') itemCircle.style.backgroundColor = 'green';
    if (priorityStatus == 'Medium') itemCircle.style.backgroundColor = 'yellow';
    if (priorityStatus == 'High') itemCircle.style.backgroundColor = 'red';
    itemTab.appendChild(itemCircle);

    const itemName = createEle('p');
    itemName.setAttribute('class', 'item-display-name');
    itemName.textContent = itemObj.itemName;
    itemTab.appendChild(itemName);

    //checkbox section
    const checkbox = createCheckbox(itemObj.markStatus);
    checkbox.firstChild.addEventListener('change', () => {
        if (checkbox.firstChild.checked == true) {
            itemObj.markStatus = true;
            checkbox.lastChild.textContent = 'Unmark';
        }
        else {
            itemObj.markStatus = false;
            checkbox.lastChild.textContent = 'Mark as done';
    }
        console.log(itemObj);
    })
    itemTab.appendChild(checkbox);
}

function createCheckbox(markStat) {
    const checkboxContainer = createEle('div');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    const checkbox = createEle('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('class', 'checkbox');
    checkboxContainer.appendChild(checkbox);
    const checkboxText = createEle('p');
    if (markStat) {
        checkbox.checked = true;
        checkboxText.textContent = 'Unmark';
    } else {
        checkbox.checked = false;
        checkboxText.textContent = 'Mark as done';
    }
    checkboxContainer.appendChild(checkboxText);
    return checkboxContainer;
}