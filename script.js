const options = ["rock","paper","scissors"];
const message = alert("Let's Play Rock, paper, scissors! \nChoose your option:")
function computerPlay() {
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

let playerCount = 0;
let computerCount = 0;

function userChoice(){
    let selection = prompt("Rock, paper, or scissors?");
    if (selection === null) {
        return "Match cancelled"
    }
    while (
        selection.toLowerCase() !== "rock" &&
        selection.toLowerCase() !== "paper" &&
        selection.toLowerCase() !== "scissors"
    ) {
        selection = prompt("Invalid selection. Please enter rock, paper, or scissors.");
    }
    return selection;
}

function matchResult(){
    if (playerCount < computerCount) {
        console.log("You lost the match. Computer wins with " + computerCount + " points")
    } else if (playerCount > computerCount) {
        console.log("You win the match with " + playerCount + " points")
    } else {
        console.log("The match its tied!")
    };
}

function game(){
    if (playerCount > 0 && computerCount > 0 ) {
        playerCount = 0;
        computerCount = 0;
    }
    for (let i = 0; i < 5; i++){
        let playerSelection = userChoice()
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You win")) {
            playerCount++;
        } else if(result.startsWith("You lose")) {
            computerCount++;
        }
        console.log("Round " + ( i+1 ) + " : " + result);
    }
    matchResult();
}

game();
