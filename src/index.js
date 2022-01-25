import header from './client/header.js';
import sidebar from './client/sidebar.js';
import mainPanel from './client/mainPanel.js';

import { todoObject, addTodo } from './todoObject.js';
import { todoCard } from './todoCard.js';
import createFormElement from './client/inputForm.js';

import './styles/style.css';

const body = document.querySelector("body");

let head = header();
body.appendChild(head.element);

let mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
body.appendChild(mainContent);

let sBar = sidebar();
let mPanel = mainPanel();
mainContent.appendChild(sBar);
mainContent.appendChild(mPanel);

head.btnBox.children[0].addEventListener('click', addAtodo);

let cardList = [];

function addAtodo() {

    let newTodo = addTodo();
    let card = new todoCard(newTodo);

    card.element = card.createCardElement();
    mPanel.appendChild(card.element);
    cardList.push(card);
}

head.btnBox.children[2].addEventListener('click', () => {
    let element = createFormElement();
    body.appendChild(element);
})