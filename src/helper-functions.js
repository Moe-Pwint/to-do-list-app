export {createEle, createLabel, createInput, createButton, checkInputFieldStatus};

import plusPurple from "./svg/plusPurple.svg";
import editPurple from"./svg/editPurple.svg";
import disabledPlus from "./svg/disabledPlus.svg";
import disabledEdit from "./svg/disabledEdit.svg";


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
                if (field.value !== '') {
                    const disabledEditBtn = createButton(disabledEdit, 'Edit', 'inputButton');
                    disabledEditBtn.disabled = true;
                    field.parentNode.replaceChild(disabledEditBtn, btn);
                } else {
                    const disabledAddBtn = createButton(disabledPlus, 'Add', 'inputButton');
                    disabledAddBtn.disabled = true;
                    field.parentNode.replaceChild(disabledAddBtn, btn);
                }

            })
        }
    }

    function checkUnfocusStatus() {
        for (const field of inputFields) {
            field.addEventListener('focusout', ()=>{
                const btn = field.nextElementSibling;
                if (field.value == '') {
                    const purpleAddBtn = createButton(plusPurple, 'Add', 'inputButton');
                    field.parentNode.replaceChild(purpleAddBtn, btn);
                } else {
                    const purpleEditBtn = createButton(editPurple, 'Edit', 'inputButton');
                    field.parentNode.replaceChild(purpleEditBtn, btn);
                }
            })
        }
    }

    focusInputFieldByBtn();
    disableBtnWhenFocus();
    checkUnfocusStatus();
}



