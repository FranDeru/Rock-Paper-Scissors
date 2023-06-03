let playerChoice;
const computerChoice = getComputerChoice();
let playerScore;
let computerScore;

function initializeRound() {
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    const possibleChoice = ["Rock", "Paper", "Scissors"];
    let choice = possibleChoice[Math.floor(Math.random() * 3)];

    if(choice === playerChoice) {
        choice = getComputerChoice();
    }
    return choice;
 }

 function playRound(playerChoice, computerChoice) {
    if(playerChoice === "Rock" && computerChoice === "Paper") {
        computerScore ++;
        return "You lose! Paper beats Rock" 
    } else if(playerChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper" 
    } else if(playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore ++
        return "You lose! Rock beats Scissors" 
    } else if(playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore ++
        return "You win! Rock beats Scissors" 
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore ++
        return "You win! Scissors beats Rock" 
    } else if(playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore ++
        return "You win! Paper beats Rock"
    }
 }

 function game() {
    initializeRound();
    console.log(playerScore, computerScore);
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Choose your weapons", "Rock");
        playRound();
        console.log(playerScore, computerScore);
    }

    if(playerScore > computerScore) {
        alert("You win the game!");
    } else{
        alert("You lose the game!");
    }
 }

 console.log(game());