let playerChoice = "Paper";
let computerChoice = getComputerChoice();

function getComputerChoice() {
    const possibleChoice = ["Rock", "Paper", "Scissors"];
    let choice = possibleChoice[Math.floor(Math.random() * 3)];

    if(choice === playerChoice) {
        choice = getComputerChoice();
    }
    return choice;
 }

 