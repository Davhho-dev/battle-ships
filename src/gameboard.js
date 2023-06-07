const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function createGameBoard(elem) {
    for(let col = 0; col < 10; col++) {
        const column = document.createElement("div");
        column.className = `col-${letters[col]}`;
        elem.appendChild(column)
        for(let row = 1; row <= 10; row++) {
            const sq = document.createElement("div");
            sq.className = `sq-${letters[col]}${row}`;
            sq.textContent = `${letters[col]}${row}`;
            column.appendChild(sq);
        }
    }
}

function createShips(length) {
    const shipImg = document.createElement("div");
    shipImg.className = "ship-img";
    for(let i = 0; i < length; i++) {
        const shipSq = document.createElement("div");
        shipSq.className = "ship-sq";
        shipImg.appendChild(shipSq);
    }
    return shipImg;
}

export {createGameBoard, createShips};