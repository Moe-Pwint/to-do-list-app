//import { itemObjects } from "./objects-n-classes";

//When the open-task-page.js is loaded, items will be displayed using the logics in this file.
export {createItemDisplay, createCheckbox, changeCircle};

import { createButton, createEle, createLabel, createInput, checkInputFieldStatus } from "./helper-functions";
//svg imports
import portraitDots from './svg/portraitDots.svg';
import plusPurple from './svg/plusPurple.svg';
import editPurple from"./svg/editPurple.svg";

function createItemDisplay(itemObj) {
    const itemsContainer = document.querySelector('#itemsContainer');

    const itemTab = createEle('div');
    itemTab.id = itemObj.itemId;
    itemTab.setAttribute('class', 'item-tab');
    itemsContainer.appendChild(itemTab);

    const itemCircle = createEle('div');
    itemCircle.setAttribute('class', 'circle');
    changeCircle(itemCircle, itemObj.itemPriority);
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
    })
    itemTab.appendChild(checkbox);

    //button to edit item
    const itemEditBtn = createButton(portraitDots);
    itemEditBtn.setAttribute('class', 'allItemEditBtns');
    itemTab.appendChild(itemEditBtn);
    itemEditBtn.addEventListener('click',()=> {
        editItem(itemObj);
        document.querySelectorAll('.allItemEditBtns').forEach((btn => btn.disabled = true));
    });
}

function changeCircle(circleEle, priorityStatus) {
    if (priorityStatus == 'Low') circleEle.style.backgroundColor = 'var(--green)';
    if (priorityStatus == 'Medium') circleEle.style.backgroundColor = 'var(--yellow)';
    if (priorityStatus == 'High') circleEle.style.backgroundColor = 'var(--red)';
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

function editItem(itemObj) {
    const editItemContainer = createEle('div');
    editItemContainer.id = 'editItemContainer';
    const targetItem = document.getElementById(itemObj.itemId);
    targetItem.appendChild(editItemContainer);
    // targetItem.insertAdjacentElement("afterend", editItemContainer);

    //body section
    const detailsText = createEle('p');
    detailsText.textContent = 'Details:';
    detailsText.setAttribute('class', 'itemDetailsContainers');
    editItemContainer.appendChild(detailsText);

    //item Name Section
    const itemNameContainer = createEle('div');
    itemNameContainer.setAttribute('class', 'itemDetailsContainers');
    editItemContainer.appendChild(itemNameContainer);

    const itemNameLabel = createLabel('itemName', '*Item Name:');
    itemNameContainer.appendChild(itemNameLabel);

    const itemNameInput = createInput('text', 'itemName', 'inputField', 'Add item name');
    itemNameInput.value = itemObj.itemName;
    itemNameContainer.appendChild(itemNameInput);

    if (itemNameInput.value) {
        const itemNameAddBtn = createButton(editPurple, 'Edit', 'inputButton');
    itemNameContainer.appendChild(itemNameAddBtn);
    } else {
        const itemNameAddBtn = createButton(plusPurple, 'Add', 'inputButton');
        itemNameContainer.appendChild(itemNameAddBtn);
    }

    //item description Section
    const itemDescriptionContainer = createEle('div');
    itemDescriptionContainer.setAttribute('class', 'itemDetailsContainers');
    editItemContainer.appendChild(itemDescriptionContainer);

    const itemDescriptionLabel = createLabel('itemDescription', 'Description:');
    itemDescriptionContainer.appendChild(itemDescriptionLabel);

    const itemDescriptionInput = createInput('text', 'itemDescription', 'inputField');
    itemDescriptionInput.value = itemObj.itemDescription;
    itemDescriptionContainer.appendChild(itemDescriptionInput);

    if (itemDescriptionInput.value) {
        const itemDescriptionAddBtn = createButton(editPurple, 'Edit', 'inputButton');
        itemDescriptionContainer.appendChild(itemDescriptionAddBtn);
    } else {
        const itemDescriptionAddBtn = createButton(plusPurple, 'Add', 'inputButton');
        itemDescriptionContainer.appendChild(itemDescriptionAddBtn);
    }

    //item Date Picker Section
    const itemDateContainer = createEle('div');
    itemDateContainer.setAttribute('class', 'itemDetailsContainers');
    editItemContainer.appendChild(itemDateContainer);

    const itemDateLabel = createLabel('itemDate', 'Due date:');
    itemDateContainer.appendChild(itemDateLabel);

    const itemDateInput = createInput('date', 'itemDate');
    itemDateInput.value = itemObj.itemDueDate;
    itemDateContainer.appendChild(itemDateInput);
    checkInputFieldStatus();
}