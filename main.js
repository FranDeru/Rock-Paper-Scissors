let playerChoice = "Rock";
let computerChoice = getComputerChoice();

function getComputerChoice() {
    const possibleChoice = ["Rock", "Paper", "Scissor"];
    let choice = possibleChoice[Math.floor(Math.random() * 3)];
    return choice;
 }
