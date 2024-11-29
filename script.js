// Initialize counters for wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;

// Function to randomly select the computer's choice
function startGame() {
    const choices = ["R", "P", "S"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of the game
function playGame(userChoice) {
    const computerChoice = startGame();
    let resultMessage = "";

    // Determine the result
    if (userChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${convertChoice(userChoice)}.`;
        ties++;
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "S" && computerChoice === "P") ||
        (userChoice === "P" && computerChoice === "R")
    ) {
        resultMessage = `You win this round! ${convertChoice(userChoice)} beats ${convertChoice(computerChoice)}.`;
        wins++;
    } else {
        resultMessage = `You lose this round! ${convertChoice(computerChoice)} beats ${convertChoice(userChoice)}.`;
        losses++;
    }

    // Update the DOM with results and scores
    document.getElementById("results").textContent = resultMessage;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}

// Helper function to convert choice to a readable format
function convertChoice(choice) {
    switch (choice) {
        case "R":
            return "Rock";
        case "P":
            return "Paper";
        case "S":
            return "Scissors";
    }
}