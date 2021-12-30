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
A score will be kept depending on the result of each round - When a user reaches 10 before the computer, a second more challenging game is accessible.

# Value

# UX

# Accessibility
Added title for cursor knowledge
color coded in the rules and the icons

# Responsiveness

# Features
The website comprises a number of features that make it intuitive, usable and fun.
- Two runnable games of Rock, Paper Scissors
    - Gives a result to the user of how they won, drew or lost
    - Has a score of 10 that resets the game scores and displays a message to the user that they won the game. 
    - Second game is of increased difficulty, only accessible when the first game is won
- A score tracking System and results section
- A score limit, giving Users something to aim for by gaining access to the second game by winning the first. 

# Credits
* CloudConvert for webp converter imagecompressor.com to reduce image size
* lovemaths for math.floor and math.random technique for creating random numbers for my array to link with my rock paper scissors
* I utilised the [FreeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) resources to boost my knowledge of functions and how to structure them
    * settimeout was highlighted here - fixed my Result Text colour solution.
* tutor Support - Fatima
    * Helped me with my reset game function that reset the scores and gave a message. This then allowed me to build on this with further scoring functionality. 
* sep5 lead - Jack Controy - for my rules button open and closing div, he gave me the idea of storing the div in html and using display to show it. He also helped me condense the code into two functions (i originally had 4 functions that worked)

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

2. In my event listeners, I tested with console.log and it worked with a message. I then changed the console.log to a function, but nothing happened.
    * fix: I hadnt actually created the function, so it was displaying 'theGame is not defined'. This prompted me to create the main game function that consisted of my game logic. 

3. My console log for the rock, paper scissor iteration using math.floor & random was not giving me a number

4. My let array for my rock paper scissors in my setChoices was declared but valiue was never read, it was greyed out.
    * fix: I hadnt returned it. Once i added a return and included the new let of random numbers, it worked.
    * This was something i learned during my coding. At first, seeing grey made me think I had made a mistale, but on reflection things are grey because they havent been declared, called etc.

5. Had a rules button that hen clicked opens up a div explaining the rules etc. When clicking, it was creating duplications, and i could close the div with the button.
    * Fix: I added a close button within the div, added two functions with event listeners to both open and close the div, this was done with style display being none and block.

6. When clicking rock, it is only logging a draw to the console.
    * Fix: I had my user win, draw and loss functions added incorrectly. see bug 7. This fixed it. 

7. When clicking my buttons, it wasn't incrementing the score every time.
    * Fix: I had my functions inside an individual if/else/else if statement, so it was only checking one particulsr piece of logic.

8. I added innerHTML to the results display but nothing was happening. I tried query selector, element by id etc.
    * Fix: I hadn't called the game function. 

9. When there is a draw, it duplicates the chosen button, even though i am just declaring userClicks in the innerhtml and the draw functions parenthese.
    * Fix: I had both userClick and computerChooses in the function parenthese on the actual Logic of the game (theGame function). I removed these also, and it worked!.

10. I wanted to add some text colour to the result section that correlated to the result. I added a classList, but it wasnt changing color:
    * Fix: Because it was a class, i added the '.' - but removing this meant it worked.

11. When i added colour to my result wording, it stayed there.
    * Fix: setTimeOut function helped with this
    
12. I have created a Score Limit function. However it makes my win, lose draw functionality inactive.
    * Fix: My scores increment is based on a string. When looking for user score === 10, it wasnt registering. I added '10' for a string and it worked.

13. I have created a Round tally funciton - It is incrementing the total round score after a score of 10 is reached, but not by 1 as expected, by 2/4/6. So if ends up that i lost three times in a row ion opaoper, it adds by 3. If i lost on one paper, it adds by 1. This is the bug, 
    * Fix: I had the resetGame() function within a setTimeOut function which was in both my userWin and userLoses functions. I put the resetGame function outside of the setTimeOut function and tested it. it now works!

14. Added addiitonal function to reset the game after 3 rounds have been run. It doesnt reset, and allows the rounds won score to increase incorrectly by simply clicking on one of the buttons (it should stop at 10 and not increase)
    * fix: 



# Technologies
Three technologies were used to build the interactive front-website website:
* HTML for the structure
* CSS for the design
* JavaScript for the interactivity and DOM manipulation.