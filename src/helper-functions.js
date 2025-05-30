export {createEle, createLabel, createInput, createButton, createPurpleAddButton};

import plusPurple from "./svg/plusPurple.svg";

function createEle (ele) {
    return document.createElement(ele);
}

function createLabel (forValue, text) {
    const label = createEle('label');
    label.setAttribute('for', forValue);
    label.textContent = text;
    
    return label;
}

function createInput(typeValue, idValue, defaultText) {
    const input = createEle('input');
    input.setAttribute('type', typeValue);
    input.setAttribute('id', idValue);
    input.setAttribute('name', idValue);
    defaultText && input.setAttribute('placeholder', defaultText);
    
    return input;
}

function createButton(iconSrc, textValue) {
    const button = createEle('button');
    
    const icon = createEle('img');
    icon.src = iconSrc;
    button.appendChild(icon);

    const text = createEle('p');
    text.textContent = textValue;
    button.appendChild(text);

    return button;
} 

function createPurpleAddButton () {
    const addBtn = createButton(plusPurple, 'Add');
    addBtn.setAttribute('class', 'plusButton');
    
    return addBtn;
}