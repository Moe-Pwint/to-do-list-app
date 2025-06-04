export {newItemDetails};
import {createEle, createLabel, createInput, createButton, checkInputFieldStatus} from './helper-functions.js';

//svg imports
import plusPurple from './svg/plusPurple.svg';

function newItemDetails(taskObj) {
    createAddNewItemDetailsBox(taskObj);
    assignPriorityOnChange();
}

//Create UI box to display details and edit options.
function createAddNewItemDetailsBox(taskObj) {
    const addNewItemContainer = createEle('div');
    addNewItemContainer.id = 'addNewItemContainer';
    const openTaskContainer = document.querySelector('#openTaskContainer');
    openTaskContainer.appendChild(addNewItemContainer);
        //top section
    const addItemNameSection = createEle('div');
    addItemNameSection.setAttribute('class', 'itemNameSection');
    addNewItemContainer.appendChild(addItemNameSection);

    const circle = createEle('div');
    circle.setAttribute('class', 'circle');
    addItemNameSection.appendChild(circle);

    const itemNameText = createEle('p');
    itemNameText.textContent = 'Add item name';
    itemNameText.setAttribute('class', 'itemNameText');
    addItemNameSection.appendChild(itemNameText);

    const checkbox = createCheckbox();
    checkbox.id = 'checkbox';
    addItemNameSection.appendChild(checkbox);

        //body section
    const detailsText = createEle('p');
    detailsText.textContent = 'Details:';
    detailsText.setAttribute('class', 'itemDetailsContainers');
    addNewItemContainer.appendChild(detailsText);

    //item Name Section
    const itemNameContainer = createEle('div');
    itemNameContainer.setAttribute('class', 'itemDetailsContainers');
    addNewItemContainer.appendChild(itemNameContainer);

    const itemNameLabel = createLabel('itemName', '*Item Name:');
    itemNameContainer.appendChild(itemNameLabel);

    const itemNameInput = createInput('text', 'itemName', 'inputField', 'Add item name');
    itemNameContainer.appendChild(itemNameInput);

    const itemNameAddBtn = createButton(plusPurple, 'Add', 'inputButton');
    itemNameContainer.appendChild(itemNameAddBtn);
    
    //item description Section
    const itemDescriptionContainer = createEle('div');
    itemDescriptionContainer.setAttribute('class', 'itemDetailsContainers');
    addNewItemContainer.appendChild(itemDescriptionContainer);

    const itemDescriptionLabel = createLabel('itemDescription', 'Description:');
    itemDescriptionContainer.appendChild(itemDescriptionLabel);

    const itemDescriptionInput = createInput('text', 'itemDescription', 'inputField');
    itemDescriptionInput.value = '';
    itemDescriptionContainer.appendChild(itemDescriptionInput);

    const itemDescriptionAddBtn = createButton(plusPurple, 'Add', 'inputButton');
    itemDescriptionContainer.appendChild(itemDescriptionAddBtn);

    //item Date Picker Section
    const itemDateContainer = createEle('div');
    itemDateContainer.setAttribute('class', 'itemDetailsContainers');
    addNewItemContainer.appendChild(itemDateContainer);

    const itemDateLabel = createLabel('itemDate', 'Due date:');
    itemDateContainer.appendChild(itemDateLabel);

    const itemDateInput = createInput('date', 'itemDate');
    itemDateContainer.appendChild(itemDateInput);

    //set priority section
    const priorityContainer = createEle('div');
    priorityContainer.setAttribute('class', 'itemDetailsContainers');
    addNewItemContainer.appendChild(priorityContainer);

    const priorityLabel = createLabel('priority', 'Priority:');
    priorityContainer.appendChild(priorityLabel);

    const priorityInput = createInput('text', 'priorityInput');
    priorityInput.readOnly = true;
    priorityContainer.appendChild(priorityInput);

    const select = createEle('select');
    select.setAttribute('id', 'selectingPriority');
    select.setAttribute('class', 'inputButton');
    priorityContainer.appendChild(select);
    select.addEventListener('focus', loadSelectOptions);

    const defaultOption = createEle('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Set priority';
    defaultOption.style.textAlign = 'center';
    select.appendChild(defaultOption);

    //Main Action Buttons tab
    const mainActionBtnsContainer = createEle('div');
    mainActionBtnsContainer.setAttribute('class', 'mainActionBtnsContainer');
    addNewItemContainer.appendChild(mainActionBtnsContainer);

    const addItemActionBtn = createEle('button');
    addItemActionBtn.id = 'addNewItemActionBtn';
    addItemActionBtn.addEventListener('click', ()=> clickNewItemSubmit(taskObj));
    addItemActionBtn.setAttribute('class', 'mainActionBtns addActionBtn');
    addItemActionBtn.textContent = 'Add new item';
    mainActionBtnsContainer.appendChild(addItemActionBtn);

    const newItemCancelBtn = createEle('button');
    newItemCancelBtn.addEventListener('click', cancelNewItem);
    newItemCancelBtn.setAttribute('class', 'mainActionBtns cancelActionBtn');
    newItemCancelBtn.textContent = 'Cancel item';
    mainActionBtnsContainer.appendChild(newItemCancelBtn);

    checkInputFieldStatus();
}

function loadSelectOptions() {
    const selectingPriority = document.querySelector('#selectingPriority');
    selectingPriority.replaceChildren();
    const defaultOption = createEle('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Set priority';
    selectingPriority.appendChild(defaultOption);
    
    const lowOption = createEle('option');
    lowOption.value = 'Low';
    lowOption.textContent = 'Low';
    selectingPriority.appendChild(lowOption);

    const midOption = createEle('option');
    midOption.value = 'Medium';
    midOption.textContent = 'Medium';
    selectingPriority.appendChild(midOption);

    const highOption = createEle('option');
    highOption.value = 'High';
    highOption.textContent = 'High';
    selectingPriority.appendChild(highOption);
}

//Listens to 'selectingPriority', add chosen option to the the priorityInput.   
function assignPriorityOnChange() {
    const dropDown = document.querySelector('#selectingPriority');
    const priorityInput = document.querySelector('#priorityInput');
    dropDown.addEventListener('change', () => {
        priorityInput.value = dropDown.value;
    })
}

function createCheckbox() {
    const checkboxContainer = createEle('div');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    const checkbox = createEle('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('class', 'checkbox');
    checkboxContainer.appendChild(checkbox);
    const checkboxText = createEle('p');
    checkboxText.textContent = 'Mark as done';
    checkboxContainer.appendChild(checkboxText);
    return checkboxContainer;
}

//When New Item Action Button is clicked, this function calls class NewItem() and return object's values. 
//Then call function removeItemPage and function resetAddItemTab.
function clickNewItemSubmit(taskObj) {
    const itemName = document.querySelector('#itemName').value;
    const itemDescription = document.querySelector('#itemDescription').value;
    const itemDate = document.querySelector('#itemDate').value;
    const itemPriority = document.querySelector('#priorityInput').value;
    const parentTask = taskObj.taskId;
    const checkbox = document.querySelector('#checkbox');

    if (!itemName) {
        alert('Please add the name of the task item.');
    } else {
        let dueDate;
        if (!itemDate) {
            dueDate = '';
        } else {
            dueDate = itemDate;
        }
        const newItem = new NewItem(itemName, itemDescription, dueDate, itemPriority, parentTask);
        if (checkbox.checked) {
            newItem.markStatus = true;
        }
        taskObj.itemsList.push(newItem);
        console.log(taskObj);
        console.log(newItem);
    }
}

function addNewItemToTask() {

}

function cancelNewItem() {
    const container = document.querySelector('#addNewItemContainer');
    container.remove();
}

class NewItem {
    constructor(itemName, itemDescription, itemDueDate, itemPriority,parentTaskId) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemDueDate = itemDueDate;
        this.itemPriority = itemPriority;
        this.parentTaskId = parentTaskId;
        this.itemId = crypto.randomUUID();
        this._markStatus = false;
    }
    get markStatus() {
        return this._markStatus;
    }
    set markStatus(newStatus) {
        this._markStatus = newStatus;
    }
}