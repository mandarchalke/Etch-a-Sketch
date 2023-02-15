function createRow(times) {
    for (let i = 0; i < times; i++) {
        const container = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('row');
        container.appendChild(div);
    }
}

function createColumn(times) {
    for(let i = 0; i < times; i++) {
        const container = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('column');
        container.appendChild(div);
    }
}


const input1 = prompt("Number 1: ");
const input2 = prompt("Number 2: ");

createRow(input1);
createColumn(input2);
