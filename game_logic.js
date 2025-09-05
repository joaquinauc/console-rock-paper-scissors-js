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

console.log(getHumanChoice());