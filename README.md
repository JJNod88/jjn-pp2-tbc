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

5. Added event listener to my button, added inner.html to my 'rules infromation div' that on click, it shows all of the 'game rules'  in js html. But, when i click rule, nothing happen. I am keeping this as i want this to run from JS and not be set in the index.html file.
    * 

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
    * Fix: 

# Technologies
Three technologies were used to build the interactive front-website website:
* HTML for the structure
* CSS for the design
* JavaScript for the interactivity and DOM manipulation.