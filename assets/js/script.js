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
 * I have added event listener to each of the main elements. 
 * using 'thegame('element')' it then passes the value of each to thegame function
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


// linking my clicks with each of the 3 icons. Added userclicks in my parenthese here
function theGame(userClicks) {
    let computerChooses = setChoices();
    console.log('user choice ' + userClicks)
    console.log('computer chooses ' + computerChooses);
};


/** 
 * I needed to iterate through the choices in an array that returned some form of value.
 * Mathfloor is used to capture a whole integer, and random * 3 (the number of possible choices)
 * it is labelled computerChoice as this is what i need to use for my main game function as a user opposes it
 */
 function setChoices() {
    let choiceArray = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random() * 3); 
            return choiceArray[randomNumber];
}
console.log(setChoices());












