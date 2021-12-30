console.log('hey');


// JS variables
let buttons = document.getElementsByTagName('buttons'); // buttons
let rulesButton = document.getElementById('rulesButton'); // rule button
let closeButton = document.getElementById('closeButton');

let rulesDiv = document.getElementById('rules');

let rockIcon = document.getElementById('rock'); // User Clicks
let paperIcon = document.getElementById('paper'); // User Clicks
let scissorsIcon = document.getElementById('scissors'); // User Clicks
let lizardIcon = document.getElementById('lizard'); // User Clicks
let spockIcon = document.getElementById('spock'); // User Clicks
let result; // User click result


let userScored = document.getElementById('userScoreDigit'); // User score display
let compScored = document.getElementById('compScoreDigit');  // Comp score display 
let userRoundsWon = 0; // numerical variable to count the rounds won
let compRoundsWon = 0; 

let scoreBoardDiv = document.querySelector('.score-area'); // Used a query selector to get the first element
let resultDiv = document.getElementById('resultUpdate'); // This returns and displays the result, who chose what


/** 
 * Added Event Listeners following the loading of the Dom Content
 * Looking to use this to open the new div for the rules button
**/

document.addEventListener("DOMContentLoaded", function () {
            
});


/** function that contains the html when clicking on rules
 * Not yet working 
 */

function showRulesDiv() {
        document.getElementById("rulesDiv").style.display = "block";
        console.log('button hey');
    }

function closeRulesDiv() {
    document.getElementById("rulesDiv").style.display = "none";
    console.log('button bye');
}

rulesButton.addEventListener("click", showRulesDiv);
closeButton.addEventListener("click", closeRulesDiv);
     
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
    lizardIcon.addEventListener('click', function() {
        theGame('lizard');
    });
    spockIcon.addEventListener('click', function() {
        theGame('spock');
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
        document.getElementById('resultUpdate').classList.remove('user-won');}, 2000);
        resetGame();
};

function userLoses(userClicks, computerChooses) {
    let zeroScoreComp = parseInt(document.getElementById('compScoreDigit').innerText);
    document.getElementById("compScoreDigit").innerHTML = ++zeroScoreComp;
    console.log('User Loses');
    resultDiv.innerHTML = `Too bad. ${computerChooses} beats your choice of ${userClicks}. Try again!`;
    document.getElementById('resultUpdate').classList.add('user-loss');
    setTimeout(function() {
        document.getElementById('resultUpdate').classList.remove('user-loss');}, 2000);
        resetGame();
};
 
/**
 * TBC
 * Function that will complete the game round and reset the results, and in future make the second game available
**/
function resetGame() {
    if (userScored.innerHTML === '10') {
        userRoundsWon = document.getElementById('userRoundsWon').innerHTML = ++userRoundsWon;
        resultDiv.innerHTML = `Well Done! You won this round. The scores will now reset`;
        document.getElementById('resultUpdate').classList.add('user-won');
        setTimeout(function() {
            userScored.innerHTML = 0;
            compScored.innerHTML = 0;}, 3000);
        return true
    } else if (compScored.innerHTML === '10') {
        compRoundsWon = document.getElementById('compRoundsWon').innerHTML = ++compRoundsWon;
        resultDiv.innerHTML = `Oh no, you lost this round! The scores will now reset`;
        document.getElementById('resultUpdate').classList.add('user-loss');
        setTimeout(function() {
            userScored.innerHTML = 0;
            compScored.innerHTML = 0;}, 3000);
        return true
    } else {
        return false;
    }
}
// resetGame()

/**
 * This is the logic behind my game. Rock beats scissors etc. Each one links in with a win, lose draw function. 
**/

function theGame(userClicks) {
    let computerChooses = setChoices();
        if (userClicks === computerChooses) {
            result = 'Draw!';
            userDraws(userClicks); // draw
        } else if (userClicks === 'rock' && (computerChooses === 'scissors')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'scissors' && (computerChooses === 'paper')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'paper' && (computerChooses === 'rock')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } 
          else if (userClicks === 'rock' && (computerChooses === 'lizard')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'paper' && (computerChooses === 'spock')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } else if (userClicks === 'scissors' && (computerChooses === 'lizard')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } 
        else if (userClicks === 'lizard' && (computerChooses === 'paper')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } 
        else if (userClicks === 'lizard' && (computerChooses === 'spock')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } 
        else if (userClicks === 'spock' && (computerChooses === 'scissors')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } 
        else if (userClicks === 'spock' && (computerChooses === 'rock')) {
            result = 'You Won!';
            userWins(userClicks, computerChooses);
        } // you won 
        else {
            if (userClicks === 'rock' && (computerChooses === 'paper')) {
                result = 'You lost';
            } else if (userClicks === 'paper' && (computerChooses === 'scissors')) {
                result = 'You lost';
            } else if (userClicks === 'scissors' && (computerChooses === 'rock')) {
                result = 'You lost';
            } else if (userClicks === 'lizard' && (computerChooses === 'rock')) {
                result = 'You lost';
            } else if (userClicks === 'spock' && (computerChooses === 'paper')) {
                result = 'You lost';
            } else if (userClicks === 'lizard' && (computerChooses === 'scissors')) {
                result = 'You lost';
            } else if (userClicks === 'paper' && (computerChooses === 'lizard')) {
                result = 'You lost';
            } else if (userClicks === 'spock' && (computerChooses === 'lizard')) {
                result = 'You lost';
            } else if (userClicks === 'scissors' && (computerChooses === 'spock')) {
                result = 'You lost';
            } 
            else if (userClicks === 'rock' && (computerChooses === 'spock')) {
                result = 'You lost';
            } userLoses(userClicks, computerChooses);
        }
    };

