 const choice = ["rock", "paper", "scissor"];
 
 function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
 }