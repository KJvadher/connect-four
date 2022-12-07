var board = [
    [null, null, null,null, null, null, null],
    [null, null, null,null, null, null, null],
    [null, null, null,null, null, null, null],
    [null, null, null,null, null, null, null],
    [null, null, null,null, null, null, null],
    [null, null, null,null, null, null, null],]
    var nought = 'nought'
    var cross = 'cross'
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
    
    function anim(rw){
        var elem1 = document.getElementById(rw)
        elem1.animate({backgroundColor: "black"}, 3000);
    }
    
    function checkWinner() {
        for(let i = 0; i < board.length ; i++){
            for(let j = 0; j < board.length ; j++){
                for (var turn of ["nought", "cross"]) {
                    try{
                        if(board[i][j] == turn && board[i][j+1] == turn && board[i][j+2] == turn && board[i][j+3] == turn){
                            win = true
                            winner = turn
                            anim(`row-${i}-column-${j}`)
                            anim(`row-${i}-column-${j+1}`)
                            anim(`row-${i}-column-${j+2}`)
                            anim(`row-${i}-column-${j+3}`)
                        }
                        else if(board[i][j] == turn && board[i+1][j] == turn && board[i+2][j] == turn && board[i+3][j] == turn){
                            win = true
                            winner = turn
                            anim(`row-${i}-column-${j}`)
                            anim(`row-${i+1}-column-${j}`)
                            anim(`row-${i+2}-column-${j}`)
                            anim(`row-${i+3}-column-${j}`)               
                        }
                    }
                    catch(error){
                    }
                    try{
                        if(board[i][j] == turn && board[i+1][j+1] == turn && board[i+2][j+2] == turn && board[i+3][j+3] == turn){
                            win = true
                            winner = turn
                            anim(`row-${i}-column-${j}`)
                            anim(`row-${i+1}-column-${j+1}`)
                            anim(`row-${i+2}-column-${j+2}`)
                            anim(`row-${i+3}-column-${j+3}`)
                        } 
                        else if(board[i][j] == turn && board[i-1][j+1] == turn && board[i-2][j+2] == turn && board[i-3][j+3] == turn){
                            win = true
                            winner = turn
                            anim(`row-${i}-column-${j}`)
                            anim(`row-${i-1}-column-${j+1}`)
                            anim(`row-${i-2}-column-${j+2}`)
                            anim(`row-${i-3}-column-${j+3}`)
                        }
                    }
                    catch (error) {
                        
                    }
                }
                if(winner == 'cross'){
                    return 'crosses'
                }
                else if(winner == 'nought'){
                    return 'noughts'
                }
            }
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
    
    