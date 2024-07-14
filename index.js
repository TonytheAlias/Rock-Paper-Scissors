
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"]
    return choices[Math.floor(Math.random() * choices.length)];

}

function getHumanChoice(){
    
    let choice = prompt("Enter Rock, Paper, or Scissor", "");

    return choice
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        return "Draw! Try Again";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

function playGame(){
    let round
    let human = humanScore
    let computer = computerScore
    
    for(let i = 0; i <= 5; i++){
       round = playRound(humanSelection, computerSelection)
       console.log(`Human Score: ${human}`)
        console.log(`Computer Score: ${computer}`)
    }
    console.log("Game Over")
}

playGame()