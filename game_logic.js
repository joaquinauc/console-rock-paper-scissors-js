let humanScore = 0;
let computerScore = 0;

const divHumanScore = document.querySelector(".human-score");
const divComputerScore = document.querySelector(".computer-score");

const divComputerChoice = document.querySelector(".computer-choice");
const divRoundResult = document.querySelector(".round");
const divGameResult = document.querySelector(".game");

function getComputerChoice()
{
    return Math.ceil(Math.random() * 3);
}

function playRound(humanChoice, computerChoice)
{
    gameOptions = ["rock", "paper", "scissors"];

    let humanChoiceString = gameOptions[humanChoice - 1];
    let computerChoiceString = gameOptions[computerChoice - 1];

    divComputerChoice.textContent = `The computer chose: ${computerChoiceString}`;

    let roundResult = humanChoice - computerChoice;

    if (roundResult == 1 || roundResult == -2)
    {
        humanScore++;
        divRoundResult.textContent = `You won the round! ${humanChoiceString} beats ${computerChoiceString}`;
    }
    else if (roundResult == 2 || roundResult == -1)
    {
        computerScore++;
        divRoundResult.textContent = `You lost the round! ${computerChoiceString} beats ${humanChoiceString}`;
    }
    else
    {
        divRoundResult.textContent = `The round is a tie! ${humanChoiceString} doesn't beat ${computerChoiceString}`;
    }

    divHumanScore.textContent = `Human's Score: ${humanScore}`;
    divComputerScore.textContent = `Computer's Score: ${computerScore}`;
}

function checkWinner()
{
    if (humanScore >= 5)
    {
        humanScore = 0;
        computerScore = 0;
        divGameResult.textContent = "Congratulations! You won the game."
    }
    else if (computerScore >= 5)
    {
        humanScore = 0;
        computerScore = 0;
        divGameResult.textContent = "You lost the game! Please try again."
    }
}

const gameButtons = document.querySelectorAll(".btn");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(Number(button.value), getComputerChoice());

        if (humanScore >= 5 || computerScore >= 5)
        {
            divRoundResult.textContent = "";
            checkWinner();
        }
    });
});
