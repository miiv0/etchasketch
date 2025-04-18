const container = document.querySelector('.container');

function createGrid(row, column) {
    container.innerHTML = '';

    const rowSize = 100 / row;

    const columnSize = 100 / column;
    console.log(rowSize);
    console.log(columnSize);

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


function changeColor(event) {
    event.target.style.backgroundColor = color;
}


let colorPicker = document.getElementById('color');
colorPicker.addEventListener('input', (event) => {
    color = event.target.value;
    eraser.textContent = "Eraser: OFF";
});

let eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    eraserMode = !eraserMode;
    if (eraserMode) {
        ;
        color = "white";
        eraser.textContent = "Eraser: ON";
    } else {
        color = "black";
        eraser.textContent = "Eraser: OFF";
    }
})



container.addEventListener('mouseover', changeColor);