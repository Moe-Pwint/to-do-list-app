export {projectObjects, taskObjects};

const projectObjects = [];
const taskObjects = [];

class ProjectObj {
    constructor(folderName) {
        this.folderName = folderName;
    }
    addToProjectArr() {
        projectObjects.push(this);
    }
}

const sampleFolder = new ProjectObj('sample folder');
sampleFolder.addToProjectArr();
console.log(projectObjects);
