function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        return "Rock";
    } else if (humanChoice == "paper") {
        return "Paper";
    } else if (humanChoice == "scissor") {
        return "Scissor";
    }
    else {
        return "invalid input!"
    }

}
console.log(getHumanChoice());
console.log(getComputerChoice());