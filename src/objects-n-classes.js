//this file keeps the projectObjects array and taskObjectsArray.
//It also has two classes to create a task object and a project object.
export {projectObjects, taskObjects, itemObjects, NewTask, NewProject, NewItem, createSampleTabs, createSampleItem};

import {updateAllProjectsTabs, updateProjectTasksTabs} from './all-projects-tabs.js';

const projectObjects = [];
const taskObjects = [];
const itemObjects = [];

function createSampleTabs() {
    const sampleProject = new NewProject('Sample Project');
    projectObjects.push(sampleProject);

    const sampleTask = new NewTask('Sample Task', sampleProject.projectId,'Sample Description', 'Sample Notes');
    taskObjects.push(sampleTask);
    projectObjects[0].tasksList.push(sampleTask.taskId);

    updateAllProjectsTabs(projectObjects[0]);
    updateProjectTasksTabs(projectObjects[0].projectId, taskObjects[0]);
}

function createSampleItem() {
    const sampleItem = new NewItem('Sample item', 'sample description text', "2025-06-17", 'Low', "07fc00eb-8a46-4cbf-b55f-762fa2658a35");
    sampleItem.markStatus = false;
    itemObjects.push(sampleItem);
    const parentTask = taskObjects.find(task => task.taskName == 'Sample Task');
    parentTask.itemsList.push(sampleItem.itemId);
}

//This class takes the inputs from user and create a new task object.
class NewTask {
    constructor(taskName,projectFolder,description,notes) {
        this.taskName = taskName;
        this.projectFolder = projectFolder;
        this.description = description;
        this.notes = notes;
        this.taskId = crypto.randomUUID();
        this.itemsList = [];
    }
}

//This class takes the inputs from user and create a new project object.
class NewProject {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectId = crypto.randomUUID();
        this.tasksList = [];
    }
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