
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
const hScore = document.createElement('p'); 
const cScore = document.createElement('p'); 
let GameOver = document.createElement('p');

function playRound(humanChoice, computerChoice){

    hScore.textContent = humanScore;
    cScore.textContent = computerScore; 
    
    if(humanScore == 5)
        {
            GameOver.textContent = "You Won!! Game over"
        }
        else if (computerScore == 5){
            GameOver.textContent = "You Lost!! Game Over"
        }

    if (humanChoice === computerChoice) {
        return "Draw! Try Again";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }


}

        const btnRock = document.createElement('button');
        btnRock.textContent = 'Rock'
        const btnPaper = document.createElement('button');
        btnPaper.textContent = 'Paper'
        const btnScissor = document.createElement('button');
        btnScissor.textContent = 'Scissor'

        const result = document.createElement('span')
        
        btnRock.addEventListener('click', () =>{
        const humanSelection = 'Rock'; 
        const computerSelection = getComputerChoice();

        result.textContent = playRound(humanSelection, computerSelection)
        });

        btnPaper.addEventListener('click', () =>{
        const humanSelection = 'Paper'; 
        const computerSelection = getComputerChoice();

        result.textContent = playRound(humanSelection, computerSelection)
        });

        btnScissor.addEventListener('click', () =>{
        const humanSelection = 'Scissor'; 
        const computerSelection = getComputerChoice();

        result.textContent = playRound(humanSelection, computerSelection)
        });

        const body = document.querySelector('body')
        const div = document.createElement('div'); 
        body.appendChild(div);

        div.appendChild(btnRock); 
        div.appendChild(btnPaper); 
        div.appendChild(btnScissor); 


        div.appendChild(hScore);
        div.appendChild(cScore);
        div.appendChild(result); 
        div.appendChild(GameOver); 
        