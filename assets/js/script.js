console.log('hey');


// JS variables
let buttons = document.getElementsByTagName('buttons') // buttons

let rockIcon = document.getElementById('rock'); // User Clicks
let paperIcon = document.getElementById('paper'); // User Clicks
let scissorsIcon = document.getElementById('scissors'); // User Clicks
let result; // User click result

var userScore = 0;
let userScored = document.getElementById('userScoreDigit'); // User score display
var computerScore = 0;
let compScored = document.getElementById('compScoreDigit');  // Comp score display 

let scoreBoardDiv = document.querySelector('.score-area'); // Used a query selector to get the first element
let resultDiv = document.getElementById('result-section');



/** 
 * Added Event Listeners following the loading of the Dom Content
**/
document.addEventListener("DOMContentLoaded", function () {

    for (let button of buttons)
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "rules-btn") {
                let rulesDiv = document.getElementById('gameRules');
                rulesDiv.innerHTML = (`
                <h2>Here is how to play our simple game:</h2>
                <ol>
                    <li>Below are three choices of Rock, Paper and Scissors</li>
                    <li>Rock Beats Scissors. Scissors beats Paper. Paper beats Rock</li>
                    <li>Your aim is to pick the icon that beats the computers chosen icon</li>
                    <li>Each winner receives a point. The first to 5 points wins!</li>
                </ol>
                <p>Good luck, and enjoy!</p>
                `);
                document.body.insertBefore(gameRules, rulesDiv);
            }  else {
                theGame();
            };
        });

/** 
 * I needed to iterate through the choices in an array that returned some form of value.
 * Mathfloor is used to capture a whole integer, and random * 3 (the number of possible choices)
 * it is labelled computerChoice as this is what i need to use for my main game function as a user opposes it
 **/

function setChoices() {
    let choiceArray = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random() * 3); 
            return choiceArray[randomNumber];
}
console.log(setChoices())

/**
 * I have added event listener to each of the main elements. 
 * using 'thegame('element')' it then passes the value of each to thegame function
 */
 function userClicks() {
    rockIcon.addEventListener('click', function() {
        theGame('rock');
    });
    paperIcon.addEventListener('click', function() {
        theGame('paper');
    });
    scissorsIcon.addEventListener('click', function() {
        theGame('scissors');
    });
};
userClicks();


function userDraws() {
    console.log('User Draws');

}

function userWins() {
    let zeroScore = parseInt(document.getElementById('userScoreDigit').innerText);
    document.getElementById("userScoreDigit").innerText = ++zeroScore;
    console.log('User Wins');
}

function userLoses() {
    let zeroScore = parseInt(document.getElementById('compScoreDigit').innerText);
    document.getElementById("compScoreDigit").innerText = ++zeroScore;
    console.log('User Loses');
}



/**
 * This is the logic behind my game. Rock beats scissors etc. Each one links in with a win, lose draw function. 
 */
function theGame(userClicks) {
    let computerChooses = setChoices();
        if (userClicks === computerChooses) {
            result = 'Draw!';
            resultDiv = `You clicked ${userClicks} and the computer clicked ${computerChooses}. You drew!`;
            userDraws();
        } else if (userClicks === 'rock' && (computerChooses === 'scissors')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
            userWins();
        } else if (userClicks === 'scissors' && (computerChooses === 'paper')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
            userWins();
        } else if (userClicks === 'paper' && (computerChooses === 'rock')) {
            result = 'You Won!';
            resultDiv = `You clicked ${userClicks} which beats the computers click of ${computerChooses}. Good job!`;
            userWins();
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
            } userLoses();
        }
    }
});
