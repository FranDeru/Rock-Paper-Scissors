let playerChoice;
let computerChoice;
let playerScore;
let computerScore;

function initializeRound() {
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    const possibleChoice = ["Rock", "Paper", "Scissors"];
    let choice = possibleChoice[Math.floor(Math.random() * 3)];
    return choice;
 }

 function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return "It's a tie!"
    }else if((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
        computerScore = ++computerScore;
        return "You lose! Paper beats Rock" 
    } else{
        playerScore = ++playerScore;
        return "You win! Paper beats Rock"
    }
 }

 function game() {
    initializeRound();
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Choose your weapons", "Rock").toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();
        playRound(playerChoice, computerChoice);
        console.log(playerScore, computerScore);
    }

    if(playerScore == computerScore) {
        alert("No winner for this time");
    } else if(playerScore > computerScore){
        alert("You win the game!");
    } else{
        alert("You lose the game!");
    }
 }

 console.log(game());