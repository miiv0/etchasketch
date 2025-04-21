const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "default";

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;

const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('.colorPicker');
const sizeSlider = document.querySelector('.size');
const sizeValue = document.querySelector('.sizeValue');
const rainbowButton = document.querySelector('.rainbow');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');
const opaqueButton = document.querySelector('.opaque');
const blackButton = document.querySelector('.black');

sizeSlider.onmousemove = (e) => {
    sizeValue.textContent = `${e.target.value} x ${e.target.value}`;
    size = e.target.value;
    createGrid(size);
}

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

blackButton.addEventListener('click', () => {
    color = 'black';
    mode = 'default';
});

colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
    mode = 'default';
});

rainbowButton.addEventListener('click', () => {
    mode = 'rainbow';
});

eraserButton.addEventListener('click', () => {
    mode = 'eraser';
});

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});

function createGrid(size) {
    grid.innerHTML = '';

    let percentageSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${percentageSize}%`;
        square.style.height = `${percentageSize}%`;
        square.style.backgroundColor = "white";
        square.classList.add('square');
        grid.appendChild(square);
    }
}

createGrid(size);

function changeColor(e) {
    if (e.target.classList.contains('square')) {
        if (mode === 'default') {
            e.target.style.backgroundColor = color;
        } else if (mode === 'rainbow') {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (mode === 'eraser') {
            e.target.style.backgroundColor = "white";
        }
    }
}

grid.addEventListener('mouseover', (e) => {
    if (isMouseDown) {
        changeColor(e);
    }
});