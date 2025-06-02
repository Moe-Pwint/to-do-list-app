export {openTaskPage};

import './styles.css';
import './object-arrays.js';
import {createEle} from './helper-functions.js';

function openTaskPage(childTaskObj) {
    const container = createEle('div');
    const rightContainer = document.querySelector('#rightContainer');
    rightContainer.replaceChildren();
    rightContainer.appendChild(container);
    container.textContent = childTaskObj;
}