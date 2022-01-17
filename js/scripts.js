const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
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

// function game() {
//     for(let i = 0; i < 5; i++) {
//         console.log("Lets play Rock, Paper, Scissors! Best of 5 wins!");
//         let playerSelection = prompt("What do you choose? Rock, Paper, or Scissors?");
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

const btnList = document.querySelectorAll("button");
btnList.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let result = playRound(playerSelection, computerPlay());
        console.log(result);
        document.getElementById("content").textContent = result;
    });
});