function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a draw! Both chose ${humanChoice}`;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        resultsDiv.textContent = `You lose! ${humanChoice} beats ${computerChoice}`;
        computerScore++;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    else {
        console.log("Invalid input!");
    }
}

const rockBtn = document.getElementById('Rock');
const paperBtn = document.getElementById('Paper');
const scissorsBtn = document.getElementById('Scissors');
const resultsDiv = document.getElementById('results');

rockBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
});

paperBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
});

scissorsBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
});
