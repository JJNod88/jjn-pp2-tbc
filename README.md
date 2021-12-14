ReadMe for Jon's new project 2, javaScript

Introduction
Value
UX
Accessibility
Responsiveness
Features
Technologies
Validation
Testing
Deployment
Credits
introduction

The site has been built to host the iconic Rock, Paper Scissor game.
The user can choose which element they want to choose in hopes of beating the comoputer. 
A score will be kept depending on the result of each round.


ux
Accessibility
Responsiveness
features
Card game style battle using the Top trumpz method of choosing your cards best ability to overpower your competitors.
it consists of a header element, game area, score area and a feedback form where you can requests new heroes to be added.


credits
CloudConvert for webp converter imagecompressor.com to reduce image size
w3schools for switch and case statements - provided a good basis for my main games win / lose capability.
lovemaths for math.floor and math.random technique for creating random numbers for my array to link with my rock paper scissors
https://www.javatpoint.com/if-else-vs-switch - this helped me decide and use the switch case instead of if else 

bugs
My three main elements of rock, paper and scissors were in global Lets. when i first began to create my code, i did not really understand where they needed to go. 

In my event listeners, i tested with console.log and it worked with a message. I then changed the console.log to a function, but nothing happened.
fix: I hadnt actually created the function, so it was displaying 'theGame is not defined;

bug. My concole log for the rock paper scissor iteration using math.floor & random was not giving me a number
fix:

my let array for my rock paper scissors in my computerChopices was declared but valiue was never read
fix: i hadnt returned it. Once i added a return and included the new let of random numbers, it worked.