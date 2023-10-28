function getComputerChoice() {
    const CHOICES = ["rock","paper","scissors"];
    let choice = CHOICES[Math.floor(Math.random() * 3)];
    return choice
}

function getPlayerChoice() {
    let playerInput = prompt("Enter selection (rock, paper, scissors)");
    // format input
    playerInput = playerInput.toLowerCase();
    return playerInput
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
        console.log(`%cYou: %c${playerSelection} %c| Computer: %c${computerSelection}`,"color:lightgrey","color:white","color:ligth-grey","color:white")
        if (winnerEval){
            console.log(`👤 %c- %cYou won%c.      (${playerSelection} > ${computerSelection})`,"color:lightgrey","color: green","color:lightgrey")

        } else {
            console.log(`💻 %c- %cComputer won%c. (${playerSelection} > ${computerSelection})`,"color:lightgrey","color: red","color:lightgrey")

        }
        return winnerEval ? "player" : "computer";
    }    
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    let roundCount = 1;
    while (computerScore < 5 && playerScore < 5){
        console.log(`------------ Round ${roundCount<10 ? "0"+roundCount : roundCount} -------------`)
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
        roundCount++
        console.log(`Scores: 💻: ${computerScore}|👤: ${playerScore}`)
    }
    if(computerScore === 5){
        console.log(`Aww. Computer won the game. (${ties} ties.)`)
    } else if (playerScore){
        console.log(`Congratulations you won the game. (${ties} ties.)`)
    }
}