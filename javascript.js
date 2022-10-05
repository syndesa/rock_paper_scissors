const CHOICES = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection = null; 
rockButton = document.querySelector('#Rock');

paperButton = document.querySelector('#Paper');
scissorsButton = document.querySelector('#Scissors')

playerP = document.querySelector('.scoreplayer');
cpuP = document.querySelector('.scorecpu');
container = document.querySelector('.container')
playerP.textContent = playerScore;
cpuP.textContent = computerScore;

ctrMessage = document.querySelector('.centermsg');
leftMessage = document.querySelector('.leftmsg');
rightMessage = document.querySelector('.rightmsg')








rockButton.addEventListener("click", function (e){
    playerSelection = e.target.id.toLowerCase();
    leftMessage.innerHTML = `<input type="image" id="rockvs" src="./images/ROCK.png">`;
    ctrMessage.textContent = 'VS.';

});

paperButton.addEventListener("click", function (e){
    playerSelection = e.target.id.toLowerCase();
    leftMessage.innerHTML = `<input type="image" id="papervs" src="./images/paper.png">`;
    ctrMessage.textContent = 'VS.';
});

scissorsButton.addEventListener("click", function (e){
    playerSelection = e.target.id.toLowerCase();
    leftMessage.innerHTML = `<input type="image" id="scissorsvs" src="./images/scissors.png">`;
    ctrMessage.textContent = 'VS.';
});

function getPlayerSelection(){
    while (playerSelection === null){
        messageContainer.textContent = "YOUR TURN! CHOOSE YOUR WEAPON!"
    }
    messageContainer.textContent = "VS!"
}

function getComputerChoice(){
    let randomChoice = CHOICES[Math.floor(Math.random()*CHOICES.length)];
    return randomChoice.toLowerCase();
}



function playRound(playerSelection, computerSelection){

    switch(playerSelection){
    case 'rock':

        switch(computerSelection){
            case 'rock':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. Tie!`);
                break;
            case 'paper':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You Lose!`);
                computerScore++;
                cpuP.textContent = computerScore;
                break;
            case 'scissors':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
                playerP.textContent = playerScore;
                break;
        }
        break;

    case 'paper':

        switch(computerSelection){
            case 'rock':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
                playerP.textContent = playerScore;
                break;
            case 'paper':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. Tie!`);
                break;
            case 'scissors':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You Lose!`);
                computerScore++;
                cpuP.textContent = computerScore;
                break;
        }
        break;

    case 'scissors':
        switch(computerSelection){
            case 'rock':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You Lose!`);
                computerScore++;
                cpuP.textContent = computerScore;
                break;
            case 'paper':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
                playerP.textContent = playerScore;
                break;
            case 'scissors':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. Tie!`);
                break;
        }
        break;

    default:
        console.log('Invalid entry!')
}
    }

function startGame(){
    console.log("ye")
}