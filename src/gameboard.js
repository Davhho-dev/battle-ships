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

export {createGameBoard};