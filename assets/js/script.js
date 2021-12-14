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
 * I needed to iterate through the choices in an array that returned a value.
 * I did math floor for a whole integer, and random * 3 (the number of possible choices)
 * it is labelled computerChoice as this is what i need to use for my main game function as a user opposes it
 */
 function computerChoices() {
    let choiceArray = ['rock', 'paper', 'scissors'];
        console.log(Math.floor(Math.random() * 3)); 
}

computerChoices();


// linking my clicks with the buttons 
function theGame(userClicks) {
}


/**
 * I have added event listener to each of the main elements. 
 * using 'the game('element')' it then passes the value of each to the main game function
 */
function mainEListeners() {
    rockIcon.addEventListener('click', function() {
        theGame('rock');
    });
    paperIcon.addEventListener('click', function() {
        theGame('paper');
    });
    scissorsIcon.addEventListener('click', function() {
        theGame('scissors');
    });
}

mainEListeners();









