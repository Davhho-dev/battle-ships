function hover(square, length, direction, mouse) {
    let startNode = square;
    let index = nodeIndex(square);
    let parentNode = startNode.parentNode;
    if(gridExist(square, length, direction)) {
        for(let i = 0; i < length; i++) {
            if(direction === "horizontal") {
                startNode = parentNode.childNodes[index];
                if(mouse === "in" && startNode.style.backgroundColor !== "rgb(0, 35, 0)") startNode.style.backgroundColor = "grey";
                else if(mouse === "out" && startNode.style.backgroundColor !== "rgb(0, 35, 0)") startNode.style.backgroundColor = "black";
                else startNode.style.backgroundColor = "rgb(0, 35, 0)";
                parentNode = parentNode.nextElementSibling;
            }else {
                if(mouse === "in" && startNode.style.backgroundColor !== "rgb(0, 35, 0)") startNode.style.backgroundColor = "grey";
                else if(mouse === "out" && startNode.style.backgroundColor !== "rgb(0, 35, 0)") startNode.style.backgroundColor = "black";
                else startNode.style.backgroundColor = "rgb(0, 35, 0)";
                startNode = startNode.nextElementSibling;
            }
        }
    }
}

//Figure out index of node to input into parentNode when going horizontal - return index minus 1
function nodeIndex(square) {
    const str = square.textContent;
    let index = 0;
    str.length === 2 ? index = str.slice(str.length - 1) : index = str.slice(str.length - 2);
    return --index;
}

//Determine if a grid should be highlighted if the grid exist
function gridExist(square, length, direction) {
    let node;
    direction === "horizontal" ? node = square.parentNode : node = square;
    for(let i = 0; i < length; i++) {
        if(node === null || square.style.backgroundColor === "rgb(0, 35, 0)") return false;
        else node = node.nextElementSibling;
    }
    return true;
}

export {hover};