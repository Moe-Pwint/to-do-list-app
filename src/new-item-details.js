export {newItemDetails};

function newItemDetails(taskObj) {
    
    createAddNewItemDetailsBox();

}

//Create UI box to display details and edit options.
function createAddNewItemDetailsBox() {

}

class NewItem {
    constructor(itemName, itemDescription, itemDueDate, itemPriority,parentTask) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemDueDate = itemDueDate;
        this.itemPriority = itemPriority;
        this.parentTask = parentTask;
        this.itemId = this.itemName.split(' ').join('_');
    }
}