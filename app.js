
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0)
    {   
        return ans = "rock";
    }

    if (num == 1)
    {
        return ans = "paper"
    }
    
    if (num == 2)
    {
        return ans = "scissors"
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper")
    {
        return str = "You lose! Paper beats rock..."
    }

    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        return str = "Nice! Rock beats scissors!"
    }
    
    if (playerSelection == computerSelection)
    {
        return str = "It's a TIE!"
    }
}
const computerSelection = getComputerChoice();

console.log(computerSelection)
