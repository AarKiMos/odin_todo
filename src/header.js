function header() {

    let element = document.createElement('div');
    element.classList.add('header')

    let titleBox = document.createElement('div');
    titleBox.id = 'title';
    titleBox.innerText = "Odin To-Do by AarKiMos";

    let btnBox = document.createElement('div');
    btnBox.classList.add('headerBtnBox');

    let i = 3;
    while (i--) {
        let e = document.createElement('div');
        e.classList.add('headerBtn')
        btnBox.appendChild(e);
    }

    btnBox.children[0].innerText = 'Home';
    btnBox.children[1].innerText = 'About';
    btnBox.children[2].innerText = 'Contact';

    element.appendChild(titleBox);
    element.appendChild(btnBox);

    return element;
}

export default header;