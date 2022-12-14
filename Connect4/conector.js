var n_score = 0
var c_score = 0
var res = []
var height = 545
document.getElementById("counting").innerText = c_score + '  VS  ' + n_score;

// $(document).ready(function() {
//     $("#coolDiv").animate({'top':height+'px'}, 3000);
// });

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).className = "td";
        }
    }
    document.querySelector( "output" ).classList.remove('yellow' || 'red');
}

function drawBoard(board) {
    var name = 0
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === 'nought' ? "yellow td" : "red td";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).className = cellText;
            height = document.getElementById(`row-${rowIndex}-column-${columnIndex}`).offsetTop;
            // var newDiv = document.createElement("div")
            // newDiv.innerText = `Bababooie${name++}`
            // var parent = document.getElementById("newDiv")
            // parent.insertBefore(newDiv,document.getElementById("coolDiv"))
            // $("#coolDiv").animate({'top':height+'px'}, 3000);
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

function animateL(line){
}

function positionClick(rowIndex, columnIndex, event) {
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');
    var cont = document.getElementById('counting');
    var title = document.getElementById('title');
    var out = document.getElementById('winner')

    takeTurn(columnIndex);
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
        out.style.color = color;
        out.innerText = color + ' Wins!';
        //console.log(cArr)
        //animateL(pos)
        if (out.style.display == 'block') {
            red.style.display = 'block';
            yellow.style.display = 'block';
            title.style.display = 'block';
            cont.style.display = 'block';
            out.style.display = 'none';

        }
        else {
            red.style.display = 'none';
            yellow.style.display = 'none';
            title.style.display = 'none';
            cont.style.display = 'none';
            out.style.display = 'block';
        }    
        //output.classList.add(color);

    }
    scoreCounter(winner);
}

function game(columnIndex) {
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');
    var cont = document.getElementById('counting');
    var title = document.getElementById('title');
    var out = document.getElementById('winner')

    takeTurn(columnIndex);
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
        out.style.color = color;
        out.innerText = color + ' Wins!';
        //console.log(cArr)
        //animateL(pos)
        if (out.style.display == 'block') {
            red.style.display = 'block';
            yellow.style.display = 'block';
            title.style.display = 'block';
            cont.style.display = 'block';
            out.style.display = 'none';

        }
        else {
            red.style.display = 'none';
            yellow.style.display = 'none';
            title.style.display = 'none';
            cont.style.display = 'none';
            out.style.display = 'block';
        }    
        //output.classList.add(color);

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
        //const pos = document.getElementsById(`item-${rowIndex}-${columnIndex}`);
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
        game
    }
} else {
    console.log("Running in Browser")
}