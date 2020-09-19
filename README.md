# Password-Generator

## Table of Contents
* [About the Project](#about-the-project)
  * [Arrays](#arrays)
  * [Functions](#functions)
  * [If/Else Statements](#ifelse-statements)
  * [Loops](#loops)
* [Benefits of This Project](#benefits-of-this-project)
* [Accessing the Project](#accessing-the-project)
* [Acknowledgments](#acknowledgments)
  
## About the Project
For this project, I was given the source code for a password generating page. I was then instructed to build the generatePassword function which would return a random password matching the user's preference for number of characters, and type of characters used. In the below preview of the deployed page, the user selects a password of 15 characters, made up of lower-case letters and numbers. They chose to not include upper-case letters or special characters. This resulted in a password of "y9j31fr0ont67pg".

### Arrays
The first thing I did for this project was create four arrays for the various character types (lower-case letters, upper-case letters, numbers, and special characters). Arrays are variables that contain multiple values that can be accessed individually, or as a group. 

### Functions
Functions allow us to perform tasks within the code, at the time when the function is called. For this assignment, I created the generatePassword function. generatePassword was called once the user presses the "Generate Password" button. This call makes the function run perform all of the actions within its bounds. 

In this case, the generatePassword function also included other functions within it. For instance, the prompt() function was used to collect the number of characters the user would like to include in their password, and store this as a variable. The confirm() function was used multiple times to confirm what type of characters should be used in the password, and store these responses as a boolean value. Additionally, the alert() function was used to confirm user choices, or alert the user to any errors. 

### If/Else Statements
If/else statements allow the function to produce different results, based on the criteria presented. One of the if/else statements in this project is used to verify that the user input a number between 8 and 128. The code is written as follows:

    if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
        alert("You have selected " + passLength + " characters.")
      } else {
        alert("Error! Please input a number between 8 and 128.")
        return("Please try again")
      }
This checks if the input from the question "How many characters would you like your password to be? Please input a number between 8 and 128" (converted to an integer) is greater-than or equal-to 8 and that the answer is also less-than or equal-to 128. If this is true, the user receives an alert which says "You have selected x characters" (where x is the number they input). Otherwise, they will receive an alert that says "Error! Please input a number between 8 and 128" and the function will return "Please try again," which is written to the page.

### Loops
Loops allow us to repeat a sequence while particular criteria are being met. In this function I used a while-loop, which repeated while the criteria was met that the variable of i is less than the prefered length of the password. This loop first chose a random character from the array of allowable characters, then added this character to the password, and then increased the value of i by 1. If i was still less than the preferred password length, this sequence would repeat until the prefered length was met. 

## Benefits of This Project
JavaScript is an incredibly powerful and diverse programming language. This project helped me to begin my exploration of what can be accomplished using this language. I was given the opportunity to explore various pre-programmed functions, as well as build my own. This also helped me to exercise my logic skills to be able to build outcomes which are dependent on user input. 

## Accessing the Project
The HTML and CSS files are included in this repository for review. 

Additionally, you can access the deployed webpage at https://aubrey-heim.github.io/password-generator/

## Acknowledgments
Source code for user interface (index.html, style.css, and original script.js) provided by the UW Full-Stack Web Development Bootcamp: https://uwa.bootcampcontent.com/UWA-Bootcamp/uw-sea-fsf-pt-08-2020-u-c. 
