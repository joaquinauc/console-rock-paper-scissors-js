let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    return Math.ceil(Math.random() * 3);
}

function getHumanChoice()
{
    let userInput = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
    let humanChoice;

    switch (userInput)
    {
        case "rock":
            humanChoice = 1;
            break;
        case "paper":
            humanChoice = 2;
            break;
        case "scissors":
            humanChoice = 3;
            break;
    }

    return humanChoice;
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

function playGame()
{
    for (i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Computer's score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);

    if (humanScore > computerScore)
    {
        console.log("Congratulations, you win!")
    }
    else if (humanScore < computerScore)
    {
        console.log("You lose! Please try again.")
    }
    else
    {
        console.log("It's a tie! Please try again.")
    }
}

playGame();

