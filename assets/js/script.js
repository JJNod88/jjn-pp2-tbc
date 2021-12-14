console.log('hey');

// Needed to obtain the 3 main elements for playing the game. I did this putting them in "let's"
let rockIcon = document.getElementById('rock');
let paperIcon = document.getElementById('paper');
let scissorsIcon = document.getElementById('scissors');


/** 
 * Main function. I needed to iterate through the choices in an array that returned a value.
 * I did math floor for a whole integer, and random * 3 (the number of possible choices)
 */
function randomChoice {
    let userChoices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
        return userChoices[randomNumber];
}


// function for collating the score when user wins
function userWin() {
    let userScoreD = getElementById('userScoreDigit');
}

// function for collating the score when computer wins
function computerWin() {
    let computerScoreD = getElementById('compScoreDigit');
}
