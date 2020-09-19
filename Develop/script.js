//creating arrays of possible characters
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]

//writing function
function generatePassword() {

  //storing the desired password length as a variable
  var passLength = prompt("How many characters would you like your password to be? Please input a number between 8 and 128.")

  //creating variable to collect the usable characters
  var characters = []

  //creating variable to collect the string of randomly generated characters for password
  var output = ""

  //making sure the password is between 8 and 128 characters
  if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
    alert("You have selected " + passLength + " characters.")
  } else {
    alert("Error! Please input a number between 8 and 128.")
    return("Please try again")
  }

  //confirms use of lower-case letters
  var useLower = confirm('Would you like your password to contain lower-case letters? (Select "OK" for yes, or "Cancel" for no)')
  
  if (useLower) {
    
    //verifies user's choice
    alert("You have chosen to include lower-case letters")
    
    //adds lower-case letters to the array of characters allowed to be used
    characters = characters.concat(lowerAlpha)
    
    //adds one random lower-case letter to the password to guarantee a lower-case letter is included
    output = output + lowerAlpha[(Math.floor(Math.random()*lowerAlpha.length))]
  
  } else {

    //verifies user's choice
    alert("You have chosen to not include lower-case letters")

  }

  //confirms use of upper-case letters
  var useUpper = confirm('Would you like your password to contain upper-case letters? (Select "OK" for yes, or "Cancel" for no)')

  if (useUpper) {

    //verifies user's choice
    alert("You have chosen to include upper-case letters")

    //adds upper-case letters to the array of characters allowed to be used
    characters = characters.concat(upperAlpha)

    //adds one random upper-case letter to the password to guarantee an upper-case letter is included
    output = output + upperAlpha[(Math.floor(Math.random()*upperAlpha.length))]

  } else {

    //verifies user's choice
    alert("You have chosen to not include upper-case letters")

  }

  //confirms use of numbers
  var useNumbers = confirm('Would you like your password to contain numbers? (Select "OK" for yes, or "Cancel" for no)')

  if (useNumbers) {

    //verifies user's choice
    alert("You have chosen to include numbers")

    //adds numbers to the array of characters allowed to be used
    characters = characters.concat(numbers)

    //adds one random number to the password to guarantee a number is included
    output = output + numbers[(Math.floor(Math.random()*numbers.length))]

  } else {

    //verifies user's choice
    alert("You have chosen to not include numbers")

  }

  //confirms use of special characters
  var useSpecial = confirm('Would you like your password to contain special characters? (Select "OK" for yes, or "Cancel" for no)')

  if (useLower) {

    //verifies user's choice
    alert("You have chosen to include special characters")

    //adds special characters to the array of characters allowed to be used
    characters = characters.concat(special)

    //adds one random special character to the password to guarantee a special character is included
    output = output + special[(Math.floor(Math.random()*special.length))]
  
  } else {
    //verifies user's choice
    alert("You have chosen to not include special characters")
  }

  //alerts user if they have selected to not include any character types
  if (useLower === false && useUpper === false && useNumbers === false && useSpecial === false) {
    alert("Error! Please select at least one character type.")
    return("Please try again")
  }

  //since output already contains characters, this starts the while loop at the number of characters already included
  var i = output.length

  //creates a loop for randomly generating remaining characters needed until desired password length is attained
  while (i<passLength) {

    //selects a random character from the array of allowable characters that was created above
    var random = characters[Math.floor(Math.random()*characters.length)];

    //adds the new random character to the end of the password
    output = output + random

    //increases "i" variable by 1 to restart the while-loop, or stop it if the desired password length has been reached
    i++;
  }

  //returns the password
  return(output)
}

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
