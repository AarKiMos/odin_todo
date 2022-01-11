function sidebar() {
    let element = document.createElement('div');
    element.classList.add('sidebar');

    let homeTab = document.createElement('div');
    homeTab.classList.add('sideBarTab');
    element.appendChild(homeTab);
    homeTab.innerText = 'Home';


    return element;
}

export default sidebar;