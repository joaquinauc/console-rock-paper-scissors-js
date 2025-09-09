let humanScore = 0;
let computerScore = 0;

const divHumanScore = document.querySelector(".human-score");
const divComputerScore = document.querySelector(".computer-score");

function getComputerChoice()
{
    return Math.ceil(Math.random() * 3);
}

function playRound(humanChoice, computerChoice)
{
    gameOptions = ["rock", "paper", "scissors"];

    let humanChoiceString = gameOptions[humanChoice - 1];
    let computerChoiceString = gameOptions[computerChoice - 1];

    console.log(`The computer chose: ${computerChoiceString}`)

    let roundResult = humanChoice - computerChoice;

    if (roundResult == 1 || roundResult == -2)
    {
        humanScore++;
        console.log(`You win! ${humanChoiceString} beats ${computerChoiceString}`);
    }
    else if (roundResult == 2 || roundResult == -1)
    {
        computerScore++;
        console.log(`You lose! ${computerChoiceString} beats ${humanChoiceString}`);
    }
    else
    {
        console.log(`It's a tie! ${humanChoiceString} doesn't beat ${computerChoiceString}`);
    }

    console.log(humanScore);
    console.log(computerScore);
}

function checkWinner()
{
    if (humanScore >= 5)
    {
        console.log("Congratulations! You win")
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5)
    {
        console.log("You lose! Please try again")
        humanScore = 0;
        computerScore = 0;
    }
}

const gameButtons = document.querySelectorAll(".btn");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(Number(button.value), getComputerChoice());
        checkWinner();

        divHumanScore.textContent = `Human's Score: ${humanScore}`;
        divComputerScore.textContent = `Computer's Score: ${computerScore}`;
    });
});
