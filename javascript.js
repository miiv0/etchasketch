const container = document.querySelector(".container");



function createGrid(row, column) {
    container.innerHTML = '';

    const rowSize = 100 / row;

    const columnSize = 100 / column;
    console.log(rowSize);
    console.log(columnSize);

    for (let i = 0; i < row * column; i++) {
        const square = document.createElement("div");
        square.style.width = `${rowSize}%`;
        square.style.height = `${columnSize}%`;
        square.classList.add("square");
        container.appendChild(square);

    }
}

createGrid(16, 16)