// initialoze conters fot wins, losses, and ties 
let wins =0;
let losses = 0;
let ties = o;

// funcation to get the game runing 
function starGame () {
    const choies = ["R", "P" , "S"];
    const randomIndex = Math.floor(Math.random()* choies.length);
    return choies[randomIndex];
}