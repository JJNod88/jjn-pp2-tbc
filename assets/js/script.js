console.log('hey');


// These lets are my storage variable
let userScore = 0;
let userScored = document.getElementById('userScoreDigit');
let computerScore = 0;
let compScored = document.getElementById('compScoreDigit'); 
// Used a query selector to get the first element
let scoreBoardDiv = document.querySelector('.score-area');
let resultDiv = document.querySelector('.result-section');
// Needed to obtain the 3 main elements for playing the game. I did this putting them in "let"
let rockIcon = document.getElementById('rock');
let paperIcon = document.getElementById('paper');
let scissorsIcon = document.getElementById('scissors');


/** 
 * Main function. I needed to iterate through the choices in an array that returned a value.
 * I did math floor for a whole integer, and random * 3 (the number of possible choices)
 * it is labelled computerChoice as this is what i need to use for my main game function as a user opposes it
 */
function computerChoices() {
    let userChoices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
        return userChoices[randomNumber];
}

/**
 * I have added event listener to each of the main elements. 
 * using 'the game('element')' it then passes the value of each to the main game function
 */
    rockIcon.addEventListener('click', function() {
        console.log('You clicked Rock');
    });
    paperIcon.addEventListener('click', function() {
        console.log('You clicked Paper');
    });
    scissorsIcon.addEventListener('click', function() {
        console.log('You clicked Scissors');
    });


/** 
 * This is my attempt at the logic. I used switch and case for the 
 */
function mainGame(userChoices) {
    let computerChoice = computerChoices();
    // win
        switch (userChoices + computerChoice) {
            case    'paperrock':
            case    'rockscissors':
            case    'scissorspaper':
                console.log('Awesome, you won')
            case    'rockpaper':
            case    'paperscissors':
            case    'scissorsrock':
                console.log('Oh no, you lost. Better look next time!')
            case    'rockrock':
            case    'scissorscissor':
            case    'paperpaper':
                console.log('Draw! Close one.')
        }
}

// function for collating the score when user wins
function userWin() {
}

// function for collating the score when computer wins
function computerWin() {
}
