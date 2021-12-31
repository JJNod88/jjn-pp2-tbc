console.log('hey');


// JS variables
const buttons = document.getElementsByTagName('buttons'); // buttons
const rulesButton = document.getElementById('rulesButton'); // rule button
const closeButton = document.getElementById('closeButton'); // close rule button

const rulesDiv = document.getElementById('rules'); // Rules dive that can be hidden

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
 * This function ensures the DomContent is loaded before certain functions are active
 **/
document.addEventListener("DOMContentLoaded", function () {
    setChoices();
    userClicks();
});


/**
 * Two functions to Show and Hide the Rules Div
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
 * My Array for each of the five choices.
 * Mathfloor is used to capture a whole integer, and random * 5 (the number of possible choices)
 **/
function setChoices() {
    let choiceArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    return choiceArray[randomNumber];
}

/**
 * I have added event listener to each of the main choice elements. 
 * Using 'thegame('element')' it then passes the value to theGame() function for it to work
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

function buttonAudio() {
    const audioBtn = document.getElementById('audioButton');
    audioBtn.muted = false;
}


/**
 * This function displays the message when there is a draw following a user click
 * @param {*} userClicks 
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
 * These two functions increment the round score after each user click, displays the choices and why said result
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
 * This is the function that resets the Rounds once a score of 10 is reached
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


// This is the function that resets the game once 3 rounds has been achieved
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
 * This is the function and logic that creates the game. Each user click is compared with a computers choice, giving a result
 * @param {} userclick 
 */
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