const options = ["Rock","Paper","Scissors"];
const message = alert("Let's Play Rock, paper, scissors! Choose your option:")

function computerPlay() {
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    }
    else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Scissors"
    || playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Rock"
    || playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Paper"){
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

var playerCount = 0;
var computerCount = 0;

function game(){
    for (let i = 0; i < 5; i++){
        message;
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You win")) {
            playerCount++;
        } else if(result.startsWith("You lose")) {
            computerCount++;
        }
        console.log("Round" + ( i+1 ) + " : " + result);
    }

}
game()

console.log("Final Score: Player " + playerCount + " Computer " + computerCount);

if (playerCount < computerCount) {
    console.log("You lost the match. Computer wins with " + computerCount + " points")
} else if (playerCount > computerCount) {
    console.log("You win the match with " + playerCount + " points")
} else {
    console.log("The match its tied!")
};

