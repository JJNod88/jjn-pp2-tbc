console.log('hey');


// JS variables
const buttons = document.getElementsByTagName('buttons'); // buttons
const rulesButton = document.getElementById('rulesButton'); // rule button
const closeButton = document.getElementById('closeButton');

const rulesDiv = document.getElementById('rules');

const rockIcon = document.getElementById('rock'); // User Clicks
const paperIcon = document.getElementById('paper'); // User Clicks
const scissorsIcon = document.getElementById('scissors'); // User Clicks
const lizardIcon = document.getElementById('lizard'); // User Clicks
const spockIcon = document.getElementById('spock'); // User Clicks
let result; // User click result

const userScored = document.getElementById('userScoreDigit'); // User score display
const compScored = document.getElementById('compScoreDigit'); // Comp score display 
let userRoundsWon = 0; // numerical variable to count the rounds won
let compRoundsWon = 0;

const scoreBoardDiv = document.querySelector('.score-area'); // Used a query selector to get the first element
const resultDiv = document.getElementById('resultUpdate'); // This returns and displays the result, who chose what


/** 
 * Added Event Listeners following the loading of the Dom Content
 * Looking to use this to open the new div for the rules button
 **/

document.addEventListener("DOMContentLoaded", function () {
    setChoices();
    userClicks();
});


/** function that contains the html when clicking on rules
 * Not yet working 
 */

function showRulesDiv() {
    document.getElementById("rulesDiv").style.display = "block";
}

function closeRulesDiv() {
    document.getElementById("rulesDiv").style.display = "none";
}

rulesButton.addEventListener("click", showRulesDiv);
closeButton.addEventListener("click", closeRulesDiv);

/** 
 * I needed to iterate through the choices in an array that returned some form of value.
 * Mathfloor is used to capture a whole integer, and random * 3 (the number of possible choices)
 * it is labelled computerChoice as this is what i need to use for my main game function as a user opposes it
 **/

function setChoices() {
    let choiceArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    return choiceArray[randomNumber];
}

/**
 * I have added event listener to each of the main elements. 
 * using 'thegame('element')' it then passes the value of each to thegame function
 */
function userClicks() {
    rockIcon.addEventListener('click', function () {
        theGame('rock');
    });
    paperIcon.addEventListener('click', function () {
        theGame('paper');
    });
    scissorsIcon.addEventListener('click', function () {
        theGame('scissors');
    });
    lizardIcon.addEventListener('click', function () {
        theGame('lizard');
    });
    spockIcon.addEventListener('click', function () {
        theGame('spock');
    });
};


/**
 * Three functions that collate the score from the gamne logic and incriment user & comp scores
 * I also update the results and choices in these functions, style them with classList add and remove, with css styling
 */
function userDraws(userClicks) {
    console.log('User Draws');
    resultDiv.innerHTML = `A Draw! You both chose ${userClicks}. Keep going!`;
    document.getElementById('resultUpdate').classList.add('user-draw');
    setTimeout(function () {
        document.getElementById('resultUpdate').classList.remove('user-draw')
    }, 2000)
};

/**
 * Explain function
 * @param {*} userClicks 
 * @param {*} computerChooses 
 */

function userWins(userClicks, computerChooses) {
    let zeroScoreUser = parseInt(document.getElementById('userScoreDigit').innerText);
    document.getElementById("userScoreDigit").innerHTML = ++zeroScoreUser;
    console.log('User Wins');
    resultDiv.innerHTML = `You won! ${userClicks}  beats the computers ${computerChooses}. Good job!`;
    document.getElementById('resultUpdate').classList.add('user-won');
    setTimeout(function () {
        document.getElementById('resultUpdate').classList.remove('user-won');
    }, 2000);
    resetRounds();
};

function userLoses(userClicks, computerChooses) {
    let zeroScoreComp = parseInt(document.getElementById('compScoreDigit').innerText);
    document.getElementById("compScoreDigit").innerHTML = ++zeroScoreComp;
    console.log('User Loses');
    resultDiv.innerHTML = `Too bad. ${computerChooses} beats your choice of ${userClicks}. Try again!`;
    document.getElementById('resultUpdate').classList.add('user-loss');
    setTimeout(function () {
        document.getElementById('resultUpdate').classList.remove('user-loss');
    }, 2000);
    resetRounds();
};

/**
 * TBC
 * Function that will complete the game round and reset the results, and in future make the second game available
 **/
function resetRounds() {
    if (userScored.innerHTML === '10') {
        document.getElementById('userRoundsWon').innerHTML = ++userRoundsWon;
        resultDiv.innerHTML = `Well Done! You won this round. The scores will now reset`;
        document.getElementById('resultUpdate').classList.add('user-won');
            userScored.innerHTML = 0;
            compScored.innerHTML = 0;
        resetGame();
        return true
    } else if (compScored.innerHTML === '10') {
        document.getElementById('compRoundsWon').innerHTML = ++compRoundsWon;
        resultDiv.innerHTML = `Oh no, you lost this round! The scores will now reset`;
        document.getElementById('resultUpdate').classList.add('user-loss');
            userScored.innerHTML = 0;
            compScored.innerHTML = 0;
        resetGame();
        return true
    } else {
        return false;
    }
}


// function to reset the game to 0
function resetGame() {
    if(userRoundsWon === 3) {
        document.getElementById('userRoundsWon').innerHTML = '0';
        resultDiv.innerHTML = `Well done, you were the first to Three Rounds. You won!;`;
            userRoundsWon = 0;
            userRoundsWon = 0;
        return true
    } else if (compRoundsWon === 3) {
        document.getElementById('compRoundsWon').innerHTML = '0';
        resultDiv.innerHTML = `Unlucky, the Computer was first to Three Rounds. Try again!;`;
            userRoundsWon = 0;
            userRoundsWon = 0;
        return true
    } else {
        return false;
    }
}

/**
 * This is the logic behind my game. Rock beats scissors etc. Each one links in with a win, lose draw function. 
 **/

function theGame(userclick) {
    let computerChooses = setChoices();
    if (userclick === computerChooses) {
        result = 'Draw!';
        userDraws(userclick); // draw
    } else if (userclick === 'rock' && (computerChooses === 'scissors')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'scissors' && (computerChooses === 'paper')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'paper' && (computerChooses === 'rock')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'rock' && (computerChooses === 'lizard')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'paper' && (computerChooses === 'spock')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'scissors' && (computerChooses === 'lizard')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'lizard' && (computerChooses === 'paper')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'lizard' && (computerChooses === 'spock')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'spock' && (computerChooses === 'scissors')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } else if (userclick === 'spock' && (computerChooses === 'rock')) {
        result = 'You Won!';
        userWins(userclick, computerChooses);
    } // you won 
    else {
        if (userclick === 'rock' && (computerChooses === 'paper')) {
            result = 'You lost';
        } else if (userclick === 'paper' && (computerChooses === 'scissors')) {
            result = 'You lost';
        } else if (userclick === 'scissors' && (computerChooses === 'rock')) {
            result = 'You lost';
        } else if (userclick === 'lizard' && (computerChooses === 'rock')) {
            result = 'You lost';
        } else if (userclick === 'spock' && (computerChooses === 'paper')) {
            result = 'You lost';
        } else if (userclick === 'lizard' && (computerChooses === 'scissors')) {
            result = 'You lost';
        } else if (userclick === 'paper' && (computerChooses === 'lizard')) {
            result = 'You lost';
        } else if (userclick === 'spock' && (computerChooses === 'lizard')) {
            result = 'You lost';
        } else if (userclick === 'scissors' && (computerChooses === 'spock')) {
            result = 'You lost';
        } else if (userclick === 'rock' && (computerChooses === 'spock')) {
            result = 'You lost';
        }
        userLoses(userclick, computerChooses); // lose
    }
};