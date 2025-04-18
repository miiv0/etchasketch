const container = document.querySelector('.container');

function createGrid(row, column) {
    container.innerHTML = '';

    const rowSize = 100 / row;

    const columnSize = 100 / column;

    for (let i = 0; i < row * column; i++) {
        const square = document.createElement('div');
        square.style.width = `${rowSize}%`;
        square.style.height = `${columnSize}%`;
        square.classList.add('square');
        container.appendChild(square);

    }
}

createGrid(16, 16)


let color = 'black';
let eraserMode = false;
let randomColorMode = false;

function changeColor(event) {
    if (event.target.classList.contains('square'))
        if (randomColorMode) {
            event.target.style.backgroundColor = randomColor();
        } else {
            event.target.style.backgroundColor = color;
        }
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

let colorPicker = document.getElementById('color');
colorPicker.addEventListener('input', (event) => {
    color = event.target.value;
    eraser.textContent = "Eraser: OFF";
});

let randomC = document.querySelector('.randomColor');
randomC.addEventListener('click', () => {
    randomColorMode = !randomColorMode;
    if (randomColorMode) {
        randomC.textContent = "Rainbow Colors: ON";
        eraser.textContent = "Eraser: OFF";
        eraserMode = false;
    } else {
        randomC.textContent = "Rainbow Colors: OFF";
    }
});

let eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    eraserMode = !eraserMode;
    if (eraserMode) {
        color = "white";
        eraser.textContent = "Eraser: ON";
        randomColor.textContent = "Random Colors: OFF";
    } else {
        color = "black";
        eraser.textContent = "Eraser: OFF";
        randomColor.textContent = "Random Colors: OFF";
    }
});



container.addEventListener('mouseover', changeColor);