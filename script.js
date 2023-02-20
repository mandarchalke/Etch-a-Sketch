function createRow(times) {
    for (let i = 0; i < times; i++) {
        const container = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

const input1 = prompt("Number 1: ");

createRow(input1);
