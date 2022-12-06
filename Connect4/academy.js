// Make your changes to store and update game state in this file
var board = [[null, null, null],[null, null, null],[null, null, null]]
var nought = 'nought'
var cross = 'cross'
var counter = 0
var win = false
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(win){
        return
    }
    if(board[row][column] == null){
        (counter %2==0) ? board[row][column] = nought : board[row][column] = cross
        counter++
    }
    return board
}

function comp_takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(win){
        return
    }
    if(board[row][column] == null){
        (counter == 1) ? board[row][column] = nought : board[row][column] = cross
        counter++
    }
    return board
    //return avail_moves
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    let count1 = 0
    let count2 = 0
    let winner = ''
    for(let i = 0; i < board.length ; i++){
        for(let j = 0; j < board.length ; j++){
            if(board[i][j] == 'nought'){
                winner = 'noughts'
                count1 += 1
            }
            else if(board[i][j] == 'cross'){
                winner = 'crosses'
                count2 += 1
            }
            if(count1 == 3 ){
                win = true
                return winner
            }
            else if(count2 == 3){
                win = true
                return winner
            }
        }
        count1 = 0
        count2 = 0
    }
    let colum_count = 0
    let col1 = 0
    let col2 = 0
    for(let i = 0; i < 3 ; i++){
        for(let j = 0; j < 3 ; j++){
            if(board[j][colum_count] == 'nought'){
                winner = 'noughts'
                col1+= 1
            }
            else if(board[j][colum_count] == 'cross'){
                winner = 'crosses'
                col2 += 1
            }
            if(col1 == 3 ){
                win = true
                return winner
            }
            else if(col2 == 3){
                win = true
                return winner
            }
        }
        col1 = 0
        col2 = 0
        colum_count += 1
    }    
    if( (board[0][0] == 'cross' || board[0][2] == 'cross') && board[1][1] == 'cross' && (board[2][0] == 'cross' || board[2][2] == 'cross')){
        winner = 'crosses'
        win = true
        return winner
    }
    else if( (board[0][0] == 'nought' || board[0][2] == 'nought') && board[1][1] == 'nought' && (board[2][0] == 'nought' || board[2][2] == 'nought')){
        winner = 'noughts'
        win = true
        return winner
    }
    //onsole.log(count)
    console.log("checkWinner was called");
    if(counter == 9){
        return 'nobody'
    }
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [[null, null, null],[null, null, null],[null, null, null]]
    counter = 0
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        comp_takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
