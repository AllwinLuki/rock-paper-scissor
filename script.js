const playerScore = document.querySelector(".playScore");
const computerScore = document.querySelector(".compScore");
const round = document.querySelector(".roundNo");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

const gameResult = document.querySelector(".game-result");

const playerChoice = "";

function computerPlay(){
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)]
}

function play(pChoice){
    let x = computerPlay();
    round += 1;
    if(pChoice === "rock"){
        if(x === "rock"){
            return "tie"
        } else if(x === "paper"){
            return "lose"
        } else{
            return "win"
        }
    }else if(pChoice === "paper"){
        if(x === "rock"){
            return "win"
        } else if(x === "paper"){
            return "tie"
        } else{
            return "lose"
        }
    }else{
        if(x === "rock"){
            return "lose"
        } else if(x === "paper"){
            return "win"
        } else{
            return "tie"
        }
    }
}

function game(playerChoice){
    playerChoice = this.dataset.button;
    let roundResult = play(playerChoice);
    if(round === 5){
        if(playerScore > computerScore){
            gameResult = "YOU WIN!";
            playerScore += 1;
        }else{
            gameResult = "YOU LOSE...."
            computerScore += 1;
        }
    }
}

rockButton.addEventListener('click', game());
paperButton.addEventListener('click', game());
scissorButton.addEventListener('click', game());
