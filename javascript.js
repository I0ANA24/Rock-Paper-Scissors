function getComputerChoice() {
    let randomNumber = Math.random();
    let randomChoice = Math.floor(randomNumber * 3);

    if(randomChoice === 0)
        return "rock";
    else if(randomChoice === 1)
        return "paper";
    return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const final = document.querySelector("#final");

    if(humanScore < 5 && computerScore < 5) {
        //human choice
        let humanChoice;
        if(this.id == "btn1") {
            humanChoice = "rock";
        } else if(this.id == "btn2") {
            humanChoice = "paper";
        } else if(this.id == "btn3") {
            humanChoice = "scissors";
        } else {
            final.textContent = "Oops! Something went wrong.";
        }

        //computer choice
        let computerChoice = getComputerChoice();

        if(humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            resultsParagraph.textContent = "It's a draw!"
            playerScoreParagraph.textContent = humanScore;
            computerScoreParagraph.textContent = computerScore;
        } else {
            let result;
            switch(humanChoice) {
                case "rock":
                    result = computerChoice === "paper" ? "You lose! Paper beats Rock" :
                        "You won! Rock beats Scissors";
                    break;
                case "paper":
                    result = computerChoice === "rock" ? "You won! Paper beats Rock" :
                        "You lose! Scissors beats Paper";
                    break;
                case "scissors":
                    result = computerChoice === "rock" ? "You lose! Rock beats Scissors" :
                        "You won! Scissors beats Paper";
                    break;
            }

            if(result.includes("won")){
                humanScore++;
                resultsParagraph.textContent = result;
                playerScoreParagraph.textContent = humanScore;
            } else {
                computerScore++;
                resultsParagraph.textContent = result;
                computerScoreParagraph.textContent = computerScore;
            }
        }
    } else {
        if(humanScore === 5){
            final.textContent = "Yaaay! You won!";
        } else {
            final.textContent = "I'm sorry! You lose :(("
        }
    }
}

function playGame() {
    const btn = document.querySelectorAll("button");
    btn.forEach((button) => {
        button.addEventListener("click", playRound);
    })
}

///DOM for results, player score and computer score
const resultsParagraph = document.querySelector("#results");
const playerScoreParagraph = document.querySelector("#player-score");
const computerScoreParagraph = document.querySelector("#computer-score");
resultsParagraph.textContent = "Please click a button until you or the computer reaches a score of 5.";
playerScoreParagraph.textContent = 0;
computerScoreParagraph.textContent = 0;

playGame();