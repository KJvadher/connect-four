var board = [
[null, null, null,null, null, null, null],
[null, null, null,null, null, null, null],
[null, null, null,null, null, null, null],
[null, null, null,null, null, null, null],
[null, null, null,null, null, null, null],
[null, null, null,null, null, null, null],]
var nought = 'nought'
var cross = 'cross' 
//shez is here
var counter = 0
var cArr =[5,5,5,5,5,5,5]
var num = 0
var win = false
let winner = ''

function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(win){
        return
    }
    for (let index = 0; index < cArr.length; index++) {
        if(column == index){
            if(board[cArr[index]][column] == null){
                (counter %2==0) ? board[cArr[index]][column] = nought : board[cArr[index]][column] = cross
                counter++
                cArr[index]--
            }  
        }        
    }
    return board
}

function getBoard() {
    console.log("getBoard was called");
    return board;
}

function checkWinner() {
    let count1 = 0
    let count2 = 0
    let colum_count = 0
    let col1 = 0
    let col2 = 0
    for(let i = 0; i < board.length ; i++){
        for(let j = 0; j < board.length ; j++){
            if(board[i][j] == 'nought' || board[j][colum_count] == 'nought'){
                winner = 'noughts'
                count1 += 1
                col1+= 1
            }
            else if(board[i][j] == 'cross' || board[j][colum_count] == 'cross'){
                winner = 'crosses'
                count2 += 1
                col2 += 1
            }
            if(count1 == 4 || col1 == 4){
                win = true
                return winner
            }
            else if(count2 == 4 || col2 == 4){
                win = true
                return winner
            }
            try{
                if((board[i][j] == "nought" && board[i+1][j+1] == "nought" && board[i+2][j+2] == "nought" && board[i+3][j+3] == "nought") || (board[i][j] == 'nought' && board[i-1][j+1] == 'nought' && board[i-2][j+2] == 'nought' && board[i-3][j+3] == 'nought')){
                    win = true
                    winner = 'noughts'
                    return winner
                } 
                else if((board[i][j] == "cross" && board[i+1][j+1] == "cross" && board[i+2][j+2] == "cross" && board[i+3][j+3] == "cross") || (board[i][j] == 'cross' && board[i-1][j+1] == 'cross' && board[i-2][j+2] == 'cross' && board[i-3][j+3] == 'cross')){
                    win = true
                    winner = 'crosses'
                    return winner
                }
            }
            catch (error) {
                
            }
        }
        count1 = 0
        count2 = 0
        col1 = 0
        col2 = 0
        colum_count += 1
    }
    console.log("checkWinner was called");
    if(counter == 9){
        return 'nobody'
    }
    return null;
}

function resetGame() {
    board = [
        [null, null, null,null, null, null, null],
        [null, null, null,null, null, null, null],
        [null, null, null,null, null, null, null],
        [null, null, null,null, null, null, null],
        [null, null, null,null, null, null, null],
        [null, null, null,null, null, null, null],]
    counter = 0
    win = false
    count1 = 0
    count2 = 0
    col1 = 0
    col2 = 0
    cArr =[5,5,5,5,5,5,5]
    console.log("resetGame was called");
}



if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}

