//todo: Pending work-------------------------------------------------------------

/* 
Also need to make the css look better.

also, in the future might add a difficulty button and the minimax algorithm, depends on how hard it is.

The winner display pushes the tictactoe grid down. needs to be fixed.*/



const ticTacToe = (() => {

    let gameBoardPs = document.getElementById('game-grid').getElementsByTagName('p');
    let pressCount = 0;
    let arrayRandom = [...gameBoardPs];
    let winDetected = false;
    let xCount = 0;
    let oCount = 0;
    let removeButton = document.getElementById('restart');
    let displayDiv = document.getElementById('result-display');
    let displayDivPs = document.getElementById('result-display').getElementsByTagName('p');

    const userAndComputerInput = () =>{

        for(let i = 0; i < gameBoardPs.length; i++){
    
            gameBoardPs[i].addEventListener('click', () =>{
                
                if (pressCount < 9 && gameBoardPs[i].textContent == " "){
        
                    //*player input------------------------------------------
                    if (winDetected === false){
                        gameBoardPs[i].style.color = "red";
                        gameBoardPs[i].textContent = 'x';
                        arrayRandom.splice(arrayRandom.indexOf(gameBoardPs[i]), 1);
                        winCheckAndDisplay(); //had to add in order to stop computer answer after a win has been detected.
                    }
                    
                    //*computer answer---------------------------------------
                    //todo: in the future ill add the minimax algorithm.
                    if (pressCount < 4 && winDetected === false){
                        let randomChoice = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
                        randomChoice.style.color = "blue";
                        randomChoice.textContent = "o";
                        arrayRandom.splice(arrayRandom.indexOf(randomChoice), 1);
                    }
                    //*------------------------------------------------------
                
                    pressCount++ // This variable is used in order to stop the event listeners from changing the text content of the squares and to detect a tie.
                }
                
                //* Here the program runs the function 'winCheckAndDisplay' which does exactly what it's name states.
                
                if (pressCount >= 3 && winDetected === false){ //avoids senseless wincheck.
                    winCheckAndDisplay();
                    
                }
                //*-----------------------------------------------------------------------------------------
            });
        }
    }

    //------------------------------------------
    const winCheckAndDisplay = () =>{

        let horizontalWin = [gameBoardPs[0].textContent,gameBoardPs[1].textContent,gameBoardPs[2].textContent,'linebreak',gameBoardPs[3].textContent,gameBoardPs[4].textContent,gameBoardPs[5].textContent,'linebreak',gameBoardPs[6].textContent,gameBoardPs[7].textContent,gameBoardPs[8].textContent];
        let verticalWin = [gameBoardPs[0].textContent,gameBoardPs[3].textContent,gameBoardPs[6].textContent,'linebreak',gameBoardPs[1].textContent,gameBoardPs[4].textContent,gameBoardPs[7].textContent,'linebreak',gameBoardPs[2].textContent,gameBoardPs[5].textContent,gameBoardPs[8].textContent];
        let diagonalWin = [gameBoardPs[0].textContent,gameBoardPs[4].textContent,gameBoardPs[8].textContent,'linebreak',gameBoardPs[2].textContent,gameBoardPs[4].textContent,gameBoardPs[6].textContent];

        
        //Loop to detect horizontal win

        if (winDetected === false){
            xCount = 0;
            oCount = 0;

            for (square = 0; square < horizontalWin.length; square++){

                if (xCount === 3 || oCount === 3){
                    if (xCount === 3){displayDivPs[0].textContent = '[ X ] WINS!'
                    
                    } else if (oCount === 3){
                        displayDivPs[0].textContent = '[ O ] WINS!'
                    }
                    
                    displayDiv.style.display = "flex";
                    winDetected = true;
                    break;
                }

                if (horizontalWin[square] === 'x'){
                    oCount = 0;
                    xCount++;
                    
                }else if (horizontalWin[square] === 'o'){
                    xCount = 0;
                    oCount++;

                }else if (horizontalWin[square] === 'linebreak' || horizontalWin[square] === ' '){
                    xCount = 0;
                    oCount = 0;
                }
            }
            if (xCount === 3 || oCount === 3){
                if (xCount === 3){
                    displayDivPs[0].textContent = '[ X ] WINS!'
                    
                } else if (oCount === 3){displayDivPs[0].textContent = '[ O ] WINS!'
                }
                displayDiv.style.display = "flex";
                winDetected = true;
            }
        }
        //Loop to detect vertical win

        if (winDetected === false){
            xCount = 0;
            oCount = 0;

            for (square = 0; square < verticalWin.length; square++){

                if (xCount === 3 || oCount === 3){
                    if (xCount === 3){
                        displayDivPs[0].textContent = '[ X ] WINS!'
                    
                    } else if (oCount === 3){
                        displayDivPs[0].textContent = '[ O ] WINS!'
                    }

                    displayDiv.style.display = "flex";
                    winDetected = true;
                    break;
                }

                if (verticalWin[square] === 'x'){
                    oCount = 0;
                    xCount++;
                    
                }else if (verticalWin[square] === 'o'){
                    xCount = 0;
                    oCount++;

                }else if (verticalWin[square] === 'linebreak' || verticalWin[square] === ' '){
                    xCount = 0;
                    oCount = 0;
                }
            }

            if (xCount === 3 || oCount === 3){
                if (xCount === 3){
                    displayDivPs[0].textContent = '[ X ] WINS!'
                    
                } else if (oCount === 3){
                    displayDivPs[0].textContent = '[ O ] WINS!'
                }

                displayDiv.style.display = "flex";
                winDetected = true;
            }
        }

        //Loop to detect diagonal win.

        if (winDetected === false){
            xCount = 0;
            oCount = 0;

            for (square = 0; square < diagonalWin.length; square++){

                if (xCount === 3 || oCount === 3){
                    if (xCount === 3){
                        displayDivPs[0].textContent = '[ X ] WINS!'
                    
                    } else if (oCount === 3){
                        displayDivPs[0].textContent = '[ O ] WINS!'
                    }

                    displayDiv.style.display = "flex";
                    winDetected = true;
                    break;
                }

                if (diagonalWin[square] === 'x'){
                    oCount = 0;
                    xCount++;
                    
                }else if (diagonalWin[square] === 'o'){
                    xCount = 0;
                    oCount++;

                }else if (diagonalWin[square] === 'linebreak' || horizontalWin[square] === ' '){
                    xCount = 0;
                    oCount = 0;
                }
            }

            if (xCount === 3 || oCount === 3){
                if (xCount === 3){
                    displayDivPs[0].textContent = '[ X ] WINS!'
                    
                } else if (oCount === 3){
                    displayDivPs[0].textContent = '[ O ] WINS!'}
                
                displayDiv.style.display = "flex";
                winDetected = true;
            }
            
        }
        //* tie display.
        if (pressCount === 5 && winDetected === false){
            displayDivPs[0].textContent = "It's a TIE!"; 
            displayDiv.style.display = "flex";
                
        }
    }

//*REMOVE BUTTON------------------------------------------------
removeButton.addEventListener('click', () => {

    xCount = 0;
    oCount = 0;
    winDetected = false;
    arrayRandom = [...gameBoardPs];
    displayDiv.style.display = "none";
    pressCount = 0;
    for (let i = 0; i < gameBoardPs.length; i++){ gameBoardPs[i].textContent = " "};

})

return {userAndComputerInput};

})();

ticTacToe.userAndComputerInput();
    

     
    




