ReadMe for Jon's new project 2, javaScript

* Introduction
* Value
* UX
* Accessibility
* Responsiveness
* Features
* Technologies
* Validation
* Testing
* Deployment
* Credits



# Introduction
The site has been built to host the iconic Rock, Paper Scissor game.
The user can choose which element they want to choose in hopes of beating the comoputer. 
A score will be kept depending on the result of each round.

# Value


# UX
Accessibility
Responsiveness
features
Card game style battle using the Top trumpz method of choosing your cards best ability to overpower your competitors.
it consists of a header element, game area, score area and a feedback form where you can requests new heroes to be added.

# Accessibility

# Responsiveness

# Features
The website comprises a number of features that make it entuitive, usable and fun

# Credits
* CloudConvert for webp converter imagecompressor.com to reduce image size
* lovemaths for math.floor and math.random technique for creating random numbers for my array to link with my rock paper scissors
* I utilised the [FreeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) resources to boost my knowledge of functions and how to structure them

# Testing
JS ConsoleLog tests:
* Button array within the Dom Loader, including innerHTML addition to the 'Rules div'
    * console.log tested to see if it was showing....
* Random choice array for each of the three main choices (rock, paper, scissors).
    * console.log tested a random number to ensure the Math was working up to 3 - success
* Event Listener for rock paper scissor. console.log(rock or paper or scissor). 
    * Replaced by function = theGame()
* console.log for the game logic. Testing user choice vs computer choice
    * Replaced by the functions = userDraws(), userWins(), userLoses()
    * console.log tested these - success.
* 

# Bugs
1. My three main elements of rock, paper and scissors were in global Lets. when i first began to create my code, i did not really understand where they needed to go. 
    * 

2. In my event listeners, I tested with console.log and it worked with a message. I then changed the console.log to a function, but nothing happened.
    * fix: I hadnt actually created the function, so it was displaying 'theGame is not defined'. This prompted me to create the main game function that consisted of my game logic. 

3. My console log for the rock, paper scissor iteration using math.floor & random was not giving me a number

4. My let array for my rock paper scissors in my setChoices was declared but valiue was never read, it was greyed out.
    * fix: I hadnt returned it. Once i added a return and included the new let of random numbers, it worked.
    * This was something i learned during my coding. At first, seeing grey made me think I had made a mistale, but on reflection things are grey because they havent been declared, called etc.

5. Added event listener to my button, added inner.html to my 'rules infromation div' that on click, it shows all of the 'game rules'  in js html. But, when i click rule, nothing happen. I am keeping this as i want this to run from JS and not be set in the index.html file.
    * 

6. When clicking rock, it is only logging a draw
    * I had my user winds, draws, loses functions added incorrectly. see bug 7. This fixed it. 

7. When clicking my buttons, it wasn't incrementing the score every time.
    * I had my functions inside an individual if/else/else if statement, so it was only checking one particulsr piece of logic.

8. I added innerHTML to the results display but nothing was happening. tried query selector, elemebt by id
    * I hadn't called the game function. Once i did, this then updated!

9. When there is a draw, it duplicates the chosen button, even though i am just declaring userClicks in the innerhtml and the functions parenthese.
    * I had both userClick and computerChooses in the function parenthese on the actual Logic of the game. I removed these also, and it worked!.

# Technologies
Three technologies were used to build the interactive front-website website:
* HTML for the structure
* CSS for the design
* JavaScript for the interactivity and DOM manipulation.