const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playGame(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player == "rock") {
        if(computer == "scissors") {
            return "You win! Rock beats Scissors!";
        } else if(computer == "paper") {
            return "You lose! Paper beats Rock.";
        } else {
            return "Tie game!";
        }
    } else if(player == "scissors") {
        if(computer == "scissors") {
            return "Tie game!";
        } else if(computer == "paper") {
            return "You win! Scissors beats Paper.";
        } else {
            return "You lose! Rock beats Scissors.";
        }
    } else {
        if(computer == "scissors") {
            return "You lose! Scissors beats Paper!";
        } else if(computer == "paper") {
            return "Tie game!";
        } else {
            return "You win! Paper beats Rock.";
        }
    }
}