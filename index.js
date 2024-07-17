
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

function playGame(){
    
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();
       
       console.log(playRound(humanSelection, computerSelection))
       console.log(`Human Score: ${humanScore}`)
       console.log(`Computer Score: ${computerScore}`)
    }
    if(humanScore > computerScore)
        {
            console.log("You Won!! Game over")
        }
        else{
            console.log("You Lost!! Game Over")
        }
}

playGame()