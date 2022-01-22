export class todoCard {

    constructor(inputOb) {
        this.todoOb = inputOb;
    }

    createCardElement() {
        let element = document.createElement('div');
        element.classList.add('todoCard');

        let title = document.createElement('div');
        title.classList.add('todoCardTitle');
        title.innerText = this.todoOb.title;


        let description = document.createElement('div');
        description.classList.add('todoCardDescription');
        description.innerText = this.todoOb.description;

        let dueDate = document.createElement('div');
        dueDate.classList.add('todoCardDueDate');
        dueDate.innerText = this.todoOb.dueDate;

        let statusBtn = document.createElement('div');
        statusBtn.classList.add('todoCardStatusBtn');
        statusBtn.innerText = String(this.todoOb.status);
        statusBtn.addEventListener('click', (event) => {
            this.todoOb.changeStatus();
            this.element.children[3].innerText = String(this.todoOb.status);

        });

        let colorMap = {
            'low': 'green',
            'med': 'yellow',
            'high': 'red'
        }

        element.style.backgroundColor = colorMap[(this.todoOb.priority).toLowerCase()];

        element.appendChild(title);
        element.appendChild(description);
        element.appendChild(dueDate);
        element.appendChild(statusBtn);

        return element;
    }
}
