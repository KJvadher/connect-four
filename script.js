var rows = 7
var columns = 6
var count = 0
var win = false
var boardElement = document.getElementById("board")
const createBoardElements = (a, b) => {
    let html = "<table>"
    for (let i = 0; i < b + 1; i++) {
        html += "<tr>"
        for (let j = 0; j < a; j++) {
            html += (i == 0) ? `<th id="${j}"} class="play-btn"> play</th>` : `<td id="${i - 1}${j}">_</td>`
        }
        html += "</tr>"
    }
    html += "</table>"
    return (html)
}

boardElement.innerHTML = createBoardElements(rows, columns) //Creates board
const handlePlayClick = () => {
    let col = event.srcElement.id //get current column
    for (let i = 5; i >= 0; i--) { //iterate through current column to find empty space
        let curElement = document.getElementById(`${i}${col}`) //get current element
        if (curElement.innerText == "_") {
            (count % 2 == 0 ? curElement.innerText = "Y" : curElement.innerText = "R")
            break
        };
    }
    count++
    checkWinner()
}
function checkWinner() {
    console.log(`In check winner`)
    if (win) {
        return
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            for (var turn of ["Y", "R"]) {
                try {
                    if (document.getElementById(`${i}${j}`).innerText == turn
                        && document.getElementById(`${i}${j + 1}`).innerText == turn
                        && document.getElementById(`${i}${j + 2}`).innerText == turn
                        && document.getElementById(`${i}${j + 3}`).innerText == turn) {
                        win = true
                        console.log(win, document.getElementById(`${i}${j}`).innerText)
                        // document.getElementById(`${i}${j}`).classList.add("font-italic")
                    }
                } catch (error) {

                }
                try {
                    if (document.getElementById(`${i}${j}`).innerText == turn
                        && document.getElementById(`${i + 1}${j}`).innerText == turn
                        && document.getElementById(`${i + 2}${j}`).innerText == turn
                        && document.getElementById(`${i + 3}${j}`).innerText == turn) {
                        win = true
                        console.log(win, document.getElementById(`${i}${j}`).innerText)
                    }
                } catch (error) {

                }
                try {
                    if (document.getElementById(`${i}${j}`).innerText == turn
                        && document.getElementById(`${i + 1}${j + 1}`).innerText == turn
                        && document.getElementById(`${i + 2}${j + 2}`).innerText == turn
                        && document.getElementById(`${i + 3}${j + 3}`).innerText == turn) {
                        win = true
                        console.log(win, document.getElementById(`${i}${j}`).innerText)
                    }
                } catch (error) {

                }
                try {
                    if (document.getElementById(`${i}${j}`).innerText == turn
                        && document.getElementById(`${i - 1}${j + 1}`).innerText == turn
                        && document.getElementById(`${i - 2}${j + 2}`).innerText == turn
                        && document.getElementById(`${i - 3}${j + 3}`).innerText == turn) {
                        win = true
                        console.log(win, document.getElementById(`${i}${j}`).innerText)

                    }
                } catch (error) {

                }
            }
        }
    }
}
addEvents()
function resetGame() {
    count = 0
    boardElement.innerHTML = createBoardElements(rows, columns)
    addEvents()

}

function addEvents() { //adds event listeners to the table and button
    document.querySelector('.btn').addEventListener('click', resetGame)
    document.querySelectorAll('.play-btn').forEach(item => { //adds onclick to all play buttons
        item.addEventListener('click', handlePlayClick);
    });
}

