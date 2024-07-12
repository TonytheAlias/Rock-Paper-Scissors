function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0){
        return "Rock"
    }
    else if(choice == 1){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}


function getHumanChoice(){
    
    let choice = prompt("Enter Rock, Paper, or Scissor", " ");

    return choice
}
let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChioce){
thehumanChoice = humanChoice.toLowerCase;

if(thehumanChoice == "Rock" && computerChoice == "Paper"){
    
    computerScore++; 
    return "You lose! Paper beats Rock."
}
else if(thehumanChoice == "Paper" && computerChoice == "Rock")
    {
        humanScore++; 
        return "You win! Paper beats Rock."
    }
else if(thehumanChoice == "Paper" && computerChoice == "Paper")
    {
        return "Draw! Try Again"
    }
else if(thehumanChoice == "Rock" && computerChoice == "Rock")
    {
        return "Draw! Try Again"
    }
else if(thehumanChoice == "Rock" && computerChioce == "Scissor")
    {
        humanScore++;
        return "You Win! Rock beats Scissor"
    }
else if(thehumanChoice == "Scissor" && computerChoice == "Rock")
    {
        computerScore++; 
        return "You lose! Rock beats Scissor"
    }
else if(thehumanChoice == "Scissor" && computerChoice == "Scissor")
    {
        return "Draw! Try Again"
    }
else if(thehumanChoice == "Paper" && computerChioce == "Scissor")
    {
        computerScoreScore++;
        return "You lose! Scissor beats Paper"
    }
else
    {
        humanScore++;
        return "You Win! Scissor beats Paper"
    }
}

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);