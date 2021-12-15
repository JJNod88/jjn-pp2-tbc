console.log('hey');


// These lets are my storage variable
var userScore = 0;
let userScored = document.getElementById('userScoreDigit');
var computerScore = 0;
let compScored = document.getElementById('compScoreDigit'); 
// Used a query selector to get the first element
let scoreBoardDiv = document.querySelector('.score-area');
var resultDiv = document.querySelector('.result-section');
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


// linking my clicks with each of the 3 icons which competes with the computers random choice
function theGame(userClicks) {
    let computerChooses = setChoices();
        if (userClicks === computerChooses) {
            result = 'Draw!';
            resultDiv = `You clicked ${userClicks} and the computer clicked ${computerChooses}. You drew!`;
            console.log(theGame);
        } else if (userClicks === 'rock' && (computerChooses === 'scissors')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
        } else if (userClicks === 'scissors' && (computerChooses === 'paper')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
        } else if (userClicks === 'paper' && (computerChooses === 'rock')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
        } else {
            if (userClicks === 'rock' && (computerChooses === 'paper')) {
                result = 'You lost';
                resultDiv = `The computer chose ${computerChooses} which beat your choice of ${userClicks}. Try again.`;
            } else if (userClicks === 'paper' && (computerChooses === 'scissors')) {
                result = 'You lost';
                resultDiv = `The computer chose ${computerChooses} which beat your choice of ${userClicks}. Try again.`;
            } else if (userClicks === 'scissors' && (computerChooses === 'rock')) {
                result = 'You lost';
                resultDiv = `The computer chose ${computerChooses} which beat your choice of ${userClicks}. Try again.`;
            }
        }
};
theGame()


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
console.log(setChoices())