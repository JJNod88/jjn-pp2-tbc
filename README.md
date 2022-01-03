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
Welcome! This site has been built to host the iconic Rock, Paper, Scissor, Lizard Spock game.

The focus of this site is to use the JavaScript language to provide an interactive game where Users can compete against the Computer.

The site is aimed at everyone looking to play a chilled out, competetive game of Rock, Paper, Scissors, Lizard, Spock. 

# Value
## New User / Target Audience
* Users looking for a competetive game of Rock, Paper, Scissors, Lizard Spock.
* Who want to test themselves in a game that is more complex than the famous Rock, Paper, Scissors game.

## Return User
* Users who have previously utilised the site to play the game
* Who want to return to beat the computer
* Enjoy a relaxing but competetive online game

## Site Aims
* The site aims to provide users a platform for playing a fun game
* Providing the opportunity to:
    * Learn how to play Rock, Paper, Scissors, Lizard Spock, famously introduced on the hit TV Show 'The Big Bang Theory'
    * Play a more complex game of the typical Rock Paper Scissors game
    * Compete against the Computer with Five options each turn to win, draw or lose
    * Get to see each turn what icon they won, lost or draw against
    * Track scores for rounds and the game, delivering an interactive and engaging game environment
    * Toggle the option to play with sound or not

## How the Site achieves this
* The site has an SEO defined to accurately show up when people search for rock, paper scissor games, with the addition of lizard, spock, big bang theory and games
* Three languages used to focus on structure, design and interactivity
* Designed to be simple and engaging, users will know instantly what the sites intention is, and can navigate around the site with ease.
    * A basic but effective design, with content displayed on one page, and functions to show and hide additional content
    * Evident background picture that sets the scene, with an evident large title 
    * A consistent Header with a Home and audio buttion, accessible at all times for each user

### Page specific
* One page site, with a clear image and title instantly telling the user the intention of the site
* Background is transparent, ensuring all content displayed is easy to use, readable and accessible.
* Navigation elements in the header accessible at all times, which are fixed with a high index.
* The site is strucutred appropriately, with a rules section followed by the games essential components with a results and score section
* Color coded buttons that correlates the rules and information content.
* Consistent coloring for button hovers, and content.
* Responsive design for all screen sizes and devices

# UX
## 1. Strategy Plane
* My startegy Plane has been explained in detail in my Values section [here](#Value)
* Wireframes were used for the basic designs and overview of funcitonality. It was designed to be easily identifyable with the use of apropriate background images, titles and icons. To be enjoyable, intuitive with a competetive edge.

## 2. Scope Plane
* The Scope plane includes the features needed to provide content, material, access and functionality for Users.
* You can find this in detail here in my [Festures](#Festures)] section.
* I needed to ensure the content was relevant and outline the key functions for a User of the site - Title, Images, Appropriate Icons, Rules, Results and Score Section for the site to feedback to the users, this was essential to making the game usable and interactive.
* Key functions were:
    * Enable the Users to choose their selection with the click of a button
    * Result section to confirm the result of each user selevtion. This was color coded to represent win, draw and lose.
    * Scoring section to track the results and provide tje opportunity to win rounds and the game. 

## 3. Structure Plane
* For the site I have used HTML for the core structure, CSS for styling and JavaScriot for interactivity-
    ### HTML structuring:
    * The structure of the site and its simplistic design results in a one page, interactive game
    * Stylesheet, googlefonts, fontawesome, description and SEO were all linked within the Head element
    * Script.js was linked at the bottom of the Body element
    * I followed the industry standard for a core html structure, utilising Flexbox to structure my content:
        * Flexbox is very responsive and provided excellent opportunity to align all of my divs and content. 
    * The order of my content aligns correctly with the structure of the site. At the top of the page is the header and h1 title. Followed by a rules div that as inner HTML and an assigned JS function so that is is both visible and hidden with clicks.
    * Within the HTML, attributes have been chosen with appropriate and easy to identify names, as these interact both with CSS and JS.
    * CSS Media Querys ensure that the structure of the site is maintained regardless of screen size and device.

    ### CSS:
    * CSS has been stored within a stylesheet that resides in an Asset Folder. This is best practice especially if you wanted to add aditional pages. It also helps keep the HTML clean
    * Images have been stored within an Images folder, within the same Assets Folder
        * The background Image used is of real people playing a similar game to the sites game
        * It also has a transparent dark div over this to further improve how the content is displayed
    * Icons are directly comparable to each button of the game. For Rock i have used the Rock icon for button. This is the same for all Five buttons
        * Icons have an active and hover status with a different color for improved UX. In the Rules section, each btton has also been colored in the same color as the buttons, to improve identity and repetitition
    * Button Hovers have been added for improved UX, and are consistent with a red color
    * Images have been resized and converted to WebP for improved site functionality and performance
    * Media Queries have been added to ensure the site is responsive on any device

    ### JavaScript:
    * JavaScript has been used for the sites interactiveness, enabling the game.
    * The variables have been primarily stored as Const and Lets where appropriate as best practice. These variables are then used throughout the functions 
        * Functions and Variables were all named approriately, giving obvious meaning to each
    * Clear and informative comments has been added to every variable and function. This is absolutely vital both for my use but also any future developers who may want to copy / work on the game. These comments also acted as information and drivers for me as I built the site using JavaScripy. It acted as reminders for me
        * Effective use of // and /** depending on the depth of comments neccessary
    * A DomContentLoader event listener was added to ensure any functionality was active once the dom had loaded, to reduce and remove any user / site errors.

## 4. Skeleton Plane
* Balsamiq Wireframes were used to for the initial structure, design and conent of the Site.

    ### Layout
    * I decided to go with just one page for the site, with all content and functions accessible from the landing page
    * It has a relateale background image, with a background gradient for improved content visibility.
    * The site flows appropriately from Top to Bottom. Header, H1 title, rules div, game div, result div, sscore div and finally a footer displaying a simple thank you message
    * Font has been kept consistent. FleBox was primarily used for the display of each Div. Supporting the contents alignment and responsiveness.
    * Appropriate use of only one H1, and then h2 and h3 utilised repectively
    * To ensure the content was disoplayed appropriately, the rules section was confined to a button, that hid the div unless a button was clicked
    * each div / section of the site has a clear prupose, and is manipulated in some way by JavaScript making it interactive and an enjoyable experiene for the user

    ### Navigation
    * Because there is only one page, the header of the site is basic. It consists of a home button which refreshes the page, and an audio button, that is used to toggle sound for the site.
    * The rules button and the close button are designed to hide and make visible the rules information div

    ### Functionality
    * I needed to confirm what the sies game did and how it would create a good experience for the User
    * once i decided on the Rock Paper Scissor game, i needed to identify the process behind this:
        * theGame function(). This was the pivotal function that provided the foundations of each choice and how it compared with the computers choice.
        * userclick Function() = 5 buttons representing each selection of Rock, Paper, Scissors, Lizard Spock
        * Each button identified as a click, which represented a user Selection
        * setChoices function() = acted as the comps selection. compared with the Comps automaed Choice = 
        * User Draws, userWins, userLoses functions() = once a Selection was made, a result was displayed identoifying the result. This shows the user if they won, drew or lost, what their selection was and what the Comp chose
        * roundReset function() = reset the round once a score of 10 was achieved
        * gameReset Function() = reset the game once a score of 3 rounds was achieved
        * showRules, closeRuled functions() = This provided the functiomality of hiding and making visible the rules div
        * A set of highly identifiable variables
        * A Dom content Loader event listener to ensure the site was loaded correctly before certain functions were made available.

## 5. Surface Plane
* This identifies the sites main goals, its color, design, styling and images.

    ### User Friendly
    * The sites goal and content is specific
        * With aclear site title, page title, background image, button icons and rules informstion, the sites is instantly recognisable to any User what its purpose and intentions are
        * A Fun, interactive rock paper scissors type game.

    ### Color Palette
    * The site needs obly an index page. The color palette has been consistent throughout, and has been designed to be interactive.
    * Bacground has a transparent black color, with all standard text in white.
    * Buttons for the Rules div is standard, with a red hover color for both
    * Each of the five main game buttons begin with the same color, however have actibve and hover status with indepedent colors. These colors have been choses for disparity but also how it appears against the background
        * The colors of each background also directly reflect the same color in the content of the rules div. The rules div sets out the rolus and how to play, with each icon element colour to replicate the five main button choices.
    * The text in the results section is designed to represent the result of each round. A win is green, a lose is red, and a draw is yellow (neutral)
    * The incrementations of the score have also been colored with UX in mind. A user score is green, a comp score is red.

    ### Font size, color, type and styling
    * A google fonts has been loaded into the site
    * The sites font is defaulted as Montserrat. This was chosen as the text reminds me of an arcade type game, which correlated to what i was tring to achieve. A san-Serif backup font was added incase for any reason the added font was not loaded
    * The size of the fonts --- 

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

15. When 3 rounds won is reached, it is not resetting both scores to 0. 
Fix: 



# Technologies
Three technologies were used to build the interactive front-website website:
* HTML for the structure
* CSS for the design
* JavaScript for the interactivity and DOM manipulation.