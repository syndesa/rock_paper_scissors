const CHOICES = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let randomChoice = CHOICES[Math.floor(Math.random()*CHOICES.length)];
    console.log(randomChoice);
    return randomChoice;
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
                break;
            case 'scissors':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
                break;
        }
        break;

    case 'paper':

        switch(computerSelection){
            case 'rock':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
                break;
            case 'paper':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. Tie!`);
                break;
            case 'scissors':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You Lose!`);
                computerScore++;
                break;
        }
        break;

    case 'scissors':
        switch(computerSelection){
            case 'rock':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You Lose!`);
                computerScore++;
                break;
            case 'paper':
                console.log(`You chose ${playerSelection}, and the computer chose ${computerSelection}. You win!`);
                playerScore++;
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


    function game(){        
        while (playerScore !== 5 && computerScore !== 5){
            const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            const computerSelection = getComputerChoice().toLowerCase();
            playRound(playerSelection, computerSelection);
            console.log(`SCORE | You: ${playerScore} | Computer ${computerScore}`)
        }
    }