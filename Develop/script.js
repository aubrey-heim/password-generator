///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "~", "&", "^", "*", "?", "<", ">"]

function generatePassword() {

var passLength = prompt("How many characters would you like your password to be? Please input a number between 8 and 128.")

// if (parseInt(passLength) < 8 || parseInt(passLength) > 128 || passLength === null) {
//   alert("Error! Please input a number between 8 and 128.")
//   return
// } else alert("You have selected " + passLength + " characters.")

if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
  alert("You have selected " + passLength + " characters.")
} else {
  alert("Error! Please input a number between 8 and 128.")
  return("Please try again")
}

var useLower = confirm('Would you like your password to contain lower-case letters? (Select "OK" for yes, or "Cancel" for no)')
if (useLower) {
  alert("You have chosen to include lower-case letters")
} else {
  alert("You have chosen to not include lower-case letters")
}

var useUpper = confirm('Would you like your password to contain upper-case letters? (Select "OK" for yes, or "Cancel" for no)')
if (useUpper) {
  alert("You have chosen to include upper-case letters")
} else {
  alert("You have chosen to not include upper-case letters")
}

var useNumbers = confirm('Would you like your password to contain numbers? (Select "OK" for yes, or "Cancel" for no)')
if (useNumbers) {
  alert("You have chosen to include numbers")
} else {
  alert("You have chosen to not include numbers")
}

var useSpecial = confirm('Would you like your password to contain special characters? (Select "OK" for yes, or "Cancel" for no)')
if (useLower) {
  alert("You have chosen to include special characters")
} else {
  alert("You have chosen to not include special characters")
}



if (useLower === false && useUpper === false && useNumbers === false && useSpecial === false) {
  alert("Error! Please select at least one character type.")
  return("Please try again")
}


if (useLower) {
  var characters = lowerAlpha
} else {
  var characters = []
}

if (useUpper) {
  var characters = characters.concat(upperAlpha)
}

if (useNumbers) {
  var characters = characters.concat(numbers)
}

if (useSpecial) {
  var characters = characters.concat(special)
}

output = ""

var i = 0

while (i<passLength) {
  var random = characters[Math.floor(Math.random()*characters.length)];
  output = output + random
  i++;
}

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
