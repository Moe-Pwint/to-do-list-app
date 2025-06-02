export {appendTransparentBackdrop,removeTransparentBackdrop, createEle, createLabel, createInput, createButton, checkInputFieldStatus};

import plusPurple from "./svg/plusPurple.svg";
import editPurple from"./svg/editPurple.svg";
import disabledPlus from "./svg/disabledPlus.svg";
import disabledEdit from "./svg/disabledEdit.svg";

function appendTransparentBackdrop() {
    const backdrop = createEle('div');
    backdrop.setAttribute('id', 'transparent-backdrop');
    const leftContainer = document.querySelector('#leftContainer');
    leftContainer.appendChild(backdrop);
}

function removeTransparentBackdrop() {
    const backdrop = document.querySelector('#transparent-backdrop');
    backdrop.remove();
}

function createEle (ele) {
    return document.createElement(ele);
}

function createLabel (forValue, text) {
    const label = createEle('label');
    label.setAttribute('for', forValue);
    label.textContent = text;
    
    return label;
}

function createInput(typeValue, idValue, classValue, defaultText) {
    const input = createEle('input');
    input.setAttribute('type', typeValue);
    input.setAttribute('id', idValue);
    input.setAttribute('name', idValue);
    input.setAttribute('class', classValue);
    defaultText && input.setAttribute('placeholder', defaultText);
    
    return input;
}

function createButton(iconSrc, textValue, classValue) {
    const button = createEle('button');
    
    const icon = createEle('img');

    icon.src = iconSrc;
    button.appendChild(icon);

    const text = createEle('p');
    text.textContent = textValue;
    button.appendChild(text);

    button.setAttribute('class', classValue);

    return button;
} 

function checkInputFieldStatus() {
    const inputBtns = document.querySelectorAll('.inputButton');
    const inputFields = document.getElementsByClassName('inputField');

    function focusInputFieldByBtn() {       
        inputBtns.forEach((btn)=> {
            btn.addEventListener('click', () => {
                btn.previousElementSibling.focus();
            })
        })
    }

    function disableBtnWhenFocus() {
        for (const field of inputFields) {
            field.addEventListener('focus',()=> {
                const btn = field.nextElementSibling;
                let newValues;
                if (field.value !== '') {
                    newValues = replaceBtnContents(disabledEdit, 'Edit');
                } else {
                    newValues = replaceBtnContents(disabledPlus, 'Add');
                }
                btn.replaceChildren(...newValues);
                btn.disabled = true;
            })
        }
    }

    function checkUnfocusStatus() {
        for (const field of inputFields) {
            field.addEventListener('focusout', ()=>{
                const btn = field.nextElementSibling;
                let newValues;
                if (field.value == '') {
                    newValues = replaceBtnContents(plusPurple, 'Add');
                } else {
                    newValues = replaceBtnContents(editPurple, 'Edit');
                }
                btn.disabled = !btn.disabled;
                btn.replaceChildren(...newValues);
            })
        }
    }

    focusInputFieldByBtn();
    disableBtnWhenFocus();
    checkUnfocusStatus();
}

function replaceBtnContents(iconSrc, textValue) {
    const icon = createEle('img');
    icon.src = iconSrc;
    const text = createEle('p');
    text.textContent = textValue;

    return [icon,text];

}