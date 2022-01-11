import header from './header.js';
import sidebar from './sidebar.js';
import mainPanel from './mainPanel.js';

import './style.css';

const body = document.querySelector("body");

body.appendChild(header());

let mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
body.appendChild(mainContent);

mainContent.appendChild(sidebar());
mainContent.appendChild(mainPanel());

