let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.value;
        computerChoice = getComputerChoice().toLowerCase();

        playRound(playerChoice, computerChoice);
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

        if(playerScore === 5 || computerScore === 5){
            declareWinner();
        }
    });
});

function getComputerChoice() {
    const possibleChoice = ["Rock", "Paper", "Scissors"];
    let choice = possibleChoice[Math.floor(Math.random() * 3)];
    return choice;
 }

 function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        result.textContent = "Its a tie!"
    }else if((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
        computerScore = ++computerScore;
        result.textContent = `You lose, ${computerChoice} beats the ${playerChoice}`;
    } else{
        playerScore = ++playerScore;
        result.textContent = `You win, ${playerChoice} beats the ${computerChoice}`;
    }
 }

 function declareWinner() {
    if(playerScore === 5) {
        alert('You won the game!');
    } else {
        alert('You lose the game!');
    };
    playerScore = 0;
    computerScore= 0;
 }

//  function game() {
//     initializeRound();
//     for(let i = 0; i < 5; i++){
//         playerChoice = prompt("Choose your weapons", "Rock").toLowerCase();
//         computerChoice = getComputerChoice().toLowerCase();
//         playRound(playerChoice, computerChoice);
//         console.log(playerScore, computerScore);
//     }

//     if(playerScore == computerScore) {
//         alert("No winner for this time");
//     } else if(playerScore > computerScore){
//         alert("You win the game!");
//     } else{
//         alert("You lose the game!");
//     }
//  }