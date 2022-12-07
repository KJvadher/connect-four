var n_score = 0
var c_score = 0

document.getElementById("counting").innerText = c_score + '  VS  ' + n_score;

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).className = "";
        }
    }
    document.querySelector( "output" ).classList.remove('yellow' || 'red');
}

function soham ()
{
    console.log("Soham");
}

function drawBoard(board) {
    var name = ""
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === 'nought' ? "yellow" : "red";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).className = cellText;
        }
    }
}

function scoreCounter(winner){
    if(winner == 'noughts'){
        c_score += 1
    }
    else if(winner == 'crosses'){
        n_score += 1
    }

    document.getElementById("counting").innerText = n_score + '  VS  ' + c_score;

}



function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex);
    const board = getBoard();
    drawBoard(board);
    const winner = checkWinner();
    var color = ''
    output = document.querySelector( "output" );
    if (winner) {
        if (typeof winner !== "string" || !["noughts", "crosses", "nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'noughts', 'crosses' or 'nobody'. Actually received: " + winner;
        }
        //color = winner === 'noughts' ? 'yellow' : 'red';
        if(winner === 'noughts'){
            color = 'yellow'
        }else if(winner === 'crosses'){
            color = 'red'
        }
        output.classList.add(color);
    }
    scoreCounter(winner);
}

function resetClick(event) {
    resetGame();
    winner = false;
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    clearBoard();
}

for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
        //order--
    }
}


// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);


if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        scoreCounter,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}