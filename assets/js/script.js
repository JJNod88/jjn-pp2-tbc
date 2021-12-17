console.log('hey');


// JS variables
let buttons = document.getElementsByTagName('buttons') // buttons

let rockIcon = document.getElementById('rock'); // User Clicks
let paperIcon = document.getElementById('paper'); // User Clicks
let scissorsIcon = document.getElementById('scissors'); // User Clicks
let result; // User click result


let userScored = document.getElementById('userScoreDigit'); // User score display
let compScored = document.getElementById('compScoreDigit');  // Comp score display 
let zeroScoreUser = 0;

let scoreBoardDiv = document.querySelector('.score-area'); // Used a query selector to get the first element
let resultDiv = document.getElementById('resultUpdate'); // This returns and displays the result, who chose what



/** 
 * Added Event Listeners following the loading of the Dom Content
**/
document.addEventListener("DOMContentLoaded", function () {

    for (let button of buttons)
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "rules-btn") {
                let rulesDiv = document.getElementById('gameRules');
                rulesDiv.innerHTML = (`
                <div id="newRulesDiv> 
                <h2>Here is how to play our simple game:</h2>
                <ol>
                    <li>Below are three choices of Rock, Paper and Scissors</li>
                    <li>Rock Beats Scissors. Scissors beats Paper. Paper beats Rock</li>
                    <li>Your aim is to pick the icon that beats the computers chosen icon</li>
                    <li>Each winner receives a point. The first to 5 points wins!</li>
                </ol>
                <p>Good luck, and enjoy!</p>
                </div>
                `);
                document.body.insertBefore(gameRules, rulesDiv);
            }  else {
                theGame();
            };
        });
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
setChoices();

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


/**
 * Three functions that collate the score from the gamne logic and incriment user & comp scores
 * I also update the results and choices in these functions, style them with classList add and remove, with css styling
 */
function userDraws(userClicks) {
    console.log('User Draws');
    resultDiv.innerHTML = `A Draw! You both chose ${userClicks}. Keep going!`;
    document.getElementById('resultUpdate').classList.add('user-draw');
    setTimeout(function() {
        document.getElementById('resultUpdate').classList.remove('user-draw')}, 2000) 
};

function userWins(userClicks, computerChooses) {
    let zeroScoreUser = parseInt(document.getElementById('userScoreDigit').innerText);
    document.getElementById("userScoreDigit").innerHTML = ++zeroScoreUser;
    console.log('User Wins');
    resultDiv.innerHTML = `You won! ${userClicks}  beats the computers ${computerChooses}. Good job!`;
    document.getElementById('resultUpdate').classList.add('user-won');
    setTimeout(function() {
        document.getElementById('resultUpdate').classList.remove('user-won')}, 2000) 
};

function userLoses(userClicks, computerChooses) {
    let zeroScoreComp = parseInt(document.getElementById('compScoreDigit').innerText);
    document.getElementById("compScoreDigit").innerHTML = ++zeroScoreComp;
    console.log('User Loses');
    resultDiv.innerHTML = `Too bad. ${computerChooses} beats your choice of ${userClicks}. Try again!`;
    document.getElementById('resultUpdate').classList.add('user-loss');
    setTimeout(function() {
        document.getElementById('resultUpdate').classList.remove('user-loss')}, 2000);
};

/**
 * Function that will complete the game round and reset the results, and in future make the second game available
 */
function resetGame() {
    if (userScored = 10) {
        document.getElementById("userScoreDigit").innerHTML = 0;
        console.log('user won');
    } else if (compScored = 10) {
    document.getElementById("compScoreDigit").innerHTML = 0;
    console.log('user lost');
    }
};

/**
 * This is the logic behind my game. Rock beats scissors etc. Each one links in with a win, lose draw function. 
 */
function theGame(userClicks) {
    let computerChooses = setChoices();
        if (userClicks === computerChooses) {
            result = 'Draw!';
            userDraws(userClicks);
        } else if (userClicks === 'rock' && (computerChooses === 'scissors')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'scissors' && (computerChooses === 'paper')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'paper' && (computerChooses === 'rock')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else {
            if (userClicks === 'rock' && (computerChooses === 'paper')) {
                result = 'You lost';
            } else if (userClicks === 'paper' && (computerChooses === 'scissors')) {
                result = 'You lost';
            } else if (userClicks === 'scissors' && (computerChooses === 'rock')) {
                result = 'You lost';
            } userLoses(userClicks, computerChooses);
        }
    };

