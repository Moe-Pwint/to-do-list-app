//this file keeps the projectObjects array and taskObjectsArray.
//It also has two classes to create a task object and a project object.
export {projectObjects, taskObjects, NewTask, NewProject, createSampleTabs};

import {updateAllProjectsTabs, updateProjectTasksTabs} from './all-projects-tabs.js';

const projectObjects = [];
const taskObjects = [];

function createSampleTabs() {
    const sampleProject = new NewProject('Sample Project');
    projectObjects.push(sampleProject);

    const sampleTask = new NewTask('Sample Task', 'Sample Project','Sample Description', 'Sample Notes');
    taskObjects.push(sampleTask);

    updateAllProjectsTabs(projectObjects[0]);
    updateProjectTasksTabs(projectObjects[0], taskObjects[0]);
}

//This class takes the inputs from user and create a new task object.
class NewTask {
    constructor(taskName,projectFolder,description,notes) {
        this.taskName = taskName;
        this.projectFolder = projectFolder;
        this.description = description;
        this.notes = notes;
        this.taskId = this.taskName.split(' ').join('_');
        this.items = [];
    }
}

//This class takes the inputs from user and create a new project object.
class NewProject {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectId = this.projectName.split(' ').join('_');
        this.tasksList = [];
    }
}