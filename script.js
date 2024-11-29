// initialoze conters fot wins, losses, and ties 
let wins = 0;
let losses = 0;
let ties = o;

// funcation to get the game runing 
function starGame() {
    const choies = ["R", "P", "S"];
    const randomIndex = Math.floor(Math.random() * choies.length);
    return choies[randomIndex];
}

// funcation to pkay a single round of the game 
function playGame(userChoice) {
    const computerChoice = starGame();
    let resultMessage = "";

    // Determine the result 
    if (userChoice === computerChoice) {
        resultMessage = "It's a tie! Both chose ${convertChice(userChoice)}.";
        ties++;
        { else if (
            (userChoice === "R" && computerChoice === "S") ||
            (userChoice === "S" && computerChoice === "R") ||
            (userChoice === "P" && computerChoice === "P")
        ) {
            resultMessage = "You win this round!${convertChoice(userChoice)} beat ${convertChoice(computerChoice)}.";
            wins++;
        } else
        resultMessage = "You lose this round!${convertChoice(computerChoicee)} beat ${convertChoice(userChoice)}.";
            losses++;
        }
        
        // Helper function to convert choice to readable format 
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