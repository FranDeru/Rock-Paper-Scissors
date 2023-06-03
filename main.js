const playerChoice = "Scissors";
const computerChoice = getComputerChoice();

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
        return "You lose! Paper beats Rock"
    } else if(playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper"
    } else if(playerChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors"
    } else if(playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats Rock"
    } else if(playerChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock"
    }
 }

 console.log(playRound(playerChoice, computerChoice));