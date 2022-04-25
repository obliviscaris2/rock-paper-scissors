
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const buttons = document.querySelectorAll('#btn');
const result = document.querySelector('.result');
const PLAYER_SELECT = document.querySelector('.playerAnswer');



let computerChoice = computerMove();
let playerChoice = playerMove()

let gameState = 1;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'btn') {
            playRound(playerChoice, computerChoice)
        }
    })
})


function playerMove() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            return (e.target.value);
            })
    })
};



function playRound(playerSelection, computerSelection) {
    let currentResult = '';

    if(playerSelection === computerSelection) {
        currentResult += "It's a tie";
    
    }
    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        currentResult += "You lost, dawg";
    
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        currentResult += "You win dawg"
    };

    return result.innerText = currentResult;


};


function computerMove() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    computerSelect = Math.floor(Math.random() * computerOptions.length);
    let computerAnswer = computerOptions[computerSelect];
    return (computerAnswer);
};
