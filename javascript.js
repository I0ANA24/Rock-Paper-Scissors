function getComputerChoice() {
    let randomNumber = Math.random();
    let randomChoice = Math.floor(randomNumber * 3);

    if(randomChoice === 0)
        return "Rock";
    else if(randomChoice === 1)
        return "Paper";
    return "Scissors";
}

function getHumanChoice() {
    let input = prompt("Please enter your choice: Rock, Paper or Scissors").toLowerCase();
    return input[0].toUpperCase() + input.slice(1);
}

function playRound(humanChoice, computerChoice) {
    let result;
    if(humanChoice === computerChoice) {
        console.log("It's a draw!");
        return 0;
    } else {
        switch(humanChoice) {
            case "Rock":
                result = computerChoice === "Paper" ? "You lose! Paper beats Rock" :
                    "You won! Rock beats Scissors";
                break;
            case "Paper":
                result = computerChoice === "Rock" ? "You won! Paper beats Rock" :
                    "You lose! Scissors beats Paper";
                break;
            case "Scissors":
                result = computerChoice === "Rock" ? "You lose! Rock beats Scissors" :
                    "You won! Scissors beats Paper";
                break;
        }

        console.log(result);
        if(result[4] === 'w') {
            return 1;
        } else {
            return 2;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);
        if(result === 1)
            humanScore++;
        else if(result === 2)
            computerScore++;

        console.log(humanSelection);
        console.log(computerSelection);            
    }

    console.log(`The score is ${humanScore} for you and ${computerScore} for computer`);
}

playGame();