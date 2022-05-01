const container = document.querySelector('#container');

const gamePlay = document.querySelector('#play');
const turns = document.querySelector('.turns-left');
const playerButtons = document.querySelectorAll('#btn');
playerButtons.forEach(button => button.disabled = true); // Disabling buttons at the start of the game
const gameReset = document.querySelector('#refresh');

const displayPlayerMove = document.querySelector('.player-move');
const displayComputerMove = document.querySelector('.computer-move');
const playerTally = document.querySelector('.player-tally');
const computerTally = document.querySelector('.computer-tally');
const result = document.querySelector('.result');

let computerSelect;
let turnsLeft = 5;

let gameState = 0;

// Making play button work

gamePlay.addEventListener('click', (e) => {
    gamePlay.disabled = true;
    gameState = 1;
    if (gameState = 1) {
        playerButtons.forEach(button => button.disabled = false);
        playerButtons.forEach(playerButton => {
            playerButton.addEventListener('click', (e) => {
                if (turnsLeft > 0) {
                    turnsLeft -= 1;
                    turns.innerText = turnsLeft;
                    let playerMove;
                    let computerMove = computerPlay();
                    playerMove = e.currentTarget.value;
                    console.log(computerMove)
                    console.log(playerMove)
                    compareMove(playerMove, computerMove);
                    displayPlayerMove.innerText = `Your move: ${playerMove}`;
                    displayComputerMove.innerText = `Computer's move: ${computerMove}`;
                    result.innerText = `${compareMove(playerMove, computerMove)}`
                
                }if (turnsLeft === 0) {
                    playerButtons.forEach(button => {
                        button.disabled = true;
                        gameState = 0;
                    });
                    
                }
        
            });
        });
        // Function to create computer choices... 
    
        function computerPlay(){
            let computerOptions = ['rock', 'paper', 'scissors'];
            computerSelect = Math.floor(Math.random() * computerOptions.length)
            let computerChoice = computerOptions[computerSelect];
            return computerChoice;
        };
    
    
    // Function to compare the moves.....
    
        function compareMove(playerSelection, computerSelection){
            let newResult = ''
            if (playerSelection === computerSelection) {
                newResult = "It is a draw, dawgg";
        
            }else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
                newResult = "You did it, yousonofabitch";
        
            }else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
                newResult = "You lost, you worthless scum";

            }
            return (newResult);
        };   
    }  
});

// Making refresh button's function -- 

gameReset.addEventListener('click', (e) => {
    window.location.reload();
})
