let humanScore = 0;
let computerScore = 0;

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

    if (humanChoice > computerChoice)
    {
        humanScore++;
        console.log(`You win! ${humanChoiceString} beats ${computerChoiceString}`);
    }
    else if (humanChoice < computerChoice)
    {
        computerScore++;
        console.log(`You lose! ${computerChoiceString} beats ${humanChoiceString}`);
    }
    else
    {
        console.log(`It's a tie! ${humanChoiceString} doesn't beat ${computerChoiceString}`);
    }
}

const gameButtons = document.querySelectorAll(".btn");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(Number(button.value), getComputerChoice())
    });
});