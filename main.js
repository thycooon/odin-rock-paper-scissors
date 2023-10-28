function getComputerChoice() {
    const CHOICES = ["rock","paper","scissors"];
    return CHOICES[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    let playerInput = prompt("Enter selection (rock, paper, scissors)");
    // format input
    playerInput = playerInput.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log(`Both players selected ${playerSelection}. It's a tie.`)
        return "tie"
    } else {
        let winningConditions = [
            ["rock", "scissors"],
            ["scissors","paper"],
            ["paper","rock"]
        ]
        let winnerEval = winningConditions.some(condition => {playerSelection === condition[0] && computerSelection === condition[1]})
        console.log(winnerEval ? "Hooray! You won." : "Computer won. Best luck next time!")
    }    
    return winnerEval ? "player" : "computer";
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    while (computerScore < 5 && playerScore < 5){
        let roundResult = playRound(getPlayerChoice(),getComputerChoice())
        if (roundResult === "tie"){
            ties++;
        } else if (roundResult === "player"){
            playerScore++;
        } else if (roundResult === "computer"){
            computerScore++;
        } else {
            console.log("Error occured while playing round (continue to next round).");
        }
    }
    if(computerScore === 5){
        console.log(`Aww. Computer won the game. (${ties} ties.)`)
    } else if (playerScore){
        console.log(`Congratulations you won the game. (${ties} ties.)`)
    }
}