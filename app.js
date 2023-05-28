
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0)
    {   
        return ans = "rock";
    }

    if (num == 1)
    {
        return ans = "paper";
    }
    
    if (num == 2)
    {
        return ans = "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock")
    {
        return str = "You lose! " + computerSelection + " beats " + playerSelection;
    }

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock")
    {
        return str = "Nice! "+ playerSelection +  " beats " + computerSelection;
    }
    
    if (playerSelection == computerSelection)
    {
        return str = "It's a TIE!";
    }
}
const computerSelection = getComputerChoice();

const playerSelection = "scissors";

console.log(playRound(playerSelection, computerSelection));
