const container = document.querySelector(".container");



function createGrid(row, column) {
    for (let i = 0; i < row * column; i++) {
        const square = document.createElement("div");
        square.style.width = "50px";
        square.style.height = "50px";
        square.classList.add("square");
        container.appendChild(square);

    }
}

createGrid(16, 16)