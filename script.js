let currentRound = document.querySelector('.round');
let currentScore = document.querySelector('.score');
let userScore = 0;
let compScore = 0;
let round = 0;

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paperButton');
const scissorButton = document.querySelector('.scissor-button');
const allButton = document.querySelectorAll(button);

function findWinner(userInput){
    let compChoice = compInput;
    console.log(compChoice);
    if((userInput === "rock" && compChoice === "paper") || (userInput === "paper" && compChoice === "scissor") || (userInput === "scissor" && compChoice === "rock")){
        return "loss";
    }else if((userInput === "rock" && compChoice === "scissor") || (userInput === "paper" && compChoice === "rock") || (userInput === "scissor" && compChoice === "paper")){
        return "win";
    }else{
        return "tie";
    }
}

function playGame(button){
    if(findWinner(button) === "loss"){
        compScore++;
     }else if(findWinner(button) === "win"){
        userScore++;
    }
    round++;
    currentRound.textContent = round;
}

function compInput(){
    const rpsArr = ['rock', 'paper', 'scissor'];
    return rpsArr[Math.floor(Math.random() * 2)];
}