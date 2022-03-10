let currentRound = document.querySelector('.round');
let currentScore = document.querySelector('.score');
let userScore = 0;
let compScore = 0;
let round = 0;
let userImg = document.querySelector('.userImgChoice');
let userTxt = document.querySelector('.userTextChoice');
let compImg = document.querySelector('.compImgChoice');
let compTxt = document.querySelector('.compTextChoice');

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorButton = document.querySelector('.scissor-button');

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorButton.addEventListener('click', playGame);

function findWinner(userInput){
    let compChoice = compInput();
    userTxt.textContent = userInput;
    compTxt.textContent = compChoice;
    if(userInput === 'rock'){
        userImg.src = './images/rock.png';
    }else if(userInput === 'paper'){
        userImg.src = './images/paper.png';
    }else{
        userImg.src = './images/scissor.png';
    }

    if(compChoice === 'rock'){
        compImg.src = './images/rock.png';
    }else if(compChoice === 'paper'){
        compImg.src = './images/paper.png';
    }else{
        compImg.src = './images/scissor.png';
    }



    if((userInput === "rock" && compChoice === "paper") || (userInput === "paper" && compChoice === "scissor") || (userInput === "scissor" && compChoice === "rock")){
        return "loss";
    }else if((userInput === "rock" && compChoice === "scissor") || (userInput === "paper" && compChoice === "rock") || (userInput === "scissor" && compChoice === "paper")){
        return "win";
    }else{
        return "tie";
    }
}

function playGame(){
    let button = this.dataset.type;
    if(findWinner(button) === "loss"){
        compScore++;
     }else if(findWinner(button) === "win"){
        userScore++;
    }
    round++;
    currentRound.textContent = `Round: ${round}`;
    currentScore.textContent = `Score: ${userScore} - ${compScore}`;
    if(compScore === 5 || userScore === 5){
        rockButton.removeEventListener('click', playGame);
        paperButton.removeEventListener('click', playGame);
        scissorButton.removeEventListener('click', playGame);
        if(userScore > compScore){
            alert("YOU WIN!");
        }else if(compScore > userScore){
            alert("YOU LOSE...");
        }else{
            alert("TIE");
        }
    }
}

function compInput(){
    const rpsArr = ['rock', 'paper', 'scissor'];
    return rpsArr[Math.floor(Math.random() * 2)];
}