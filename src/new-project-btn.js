export {addNewProjectByIcon};

import {displayNewFolderWindow} from './add-new-project.js';

function addNewProjectByIcon() {
    const newProjectBtn = document.querySelector('#addProjectIcon');
    newProjectBtn.addEventListener('click', () => {
        displayNewFolderWindow();
})
}