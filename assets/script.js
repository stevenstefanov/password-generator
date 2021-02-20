// Assignment Code

var generateBtn = document.querySelector("#generate");

var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var characters = ["!@#$%^&*()-+?~"];


// Write password to the #password input

var generatePassword = function() {

  // Ask user how many characters they would like their password to contain.

  var passwordMix = [];
  var criteriaConfirm
  var lengthSelection = window.prompt("Please enter a number that has between 8 - 128 characters:");      
  if (!lengthSelection) {
    return("");
  }

  // Make sure that the entered number is between 8 and 128

  else if (lengthSelection < 8 || lengthSelection > 128) {
    criteriaConfirm = window.confirm("Your selection does not meet the criteria provided. Please try again.");
    if (!criteriaConfirm) {
      return("");
    }
    if (criteriaConfirm) {
      generatePassword();
      return("");
    }
  }

  // Makee sure that the entered character is an number

  else if (isNaN(lengthSelection)) {
    criteriaConfirm = window.confirm("Your selection does not meet the criteria provided. Please try again.");
    if (!criteriaConfirm) {
      return("");
    }
    if (criteriaConfirm) {
      generatePassword();
      return("");
    }
  }
  else {
   
    // Adds the different strings that are confirmed to a separate var passwordSelection

    var passwordSelection = [];
  
    var lowerSelection = confirm("Please indicate if you would like your password to contain lowercase letters (ex. a, b, c):");
  
    if (lowerSelection) {
      passwordSelection += lowerLetters;
    }
  
    var upperSelection = confirm("Please indicate if you would like your password to contain uppercase letters (ex. A, B, C):");
  
    if (upperSelection) {
      passwordSelection += upperLetters;
    }

    var numberSelection = confirm("Please indicate if you would like your password to contain numbers (ex. 0, 1, 2):");
 
    if (numberSelection) {
      passwordSelection += numbers;
    }

    var characterSelection = confirm("Please indicate if you would like your password to contain special characters (ex. $, #, %):");

    if (characterSelection) {
      passwordSelection += characters;
    }

    // If all options are declined, loop back to beginning

    if (passwordSelection == "") {
      alert("Please select at least one of the selection criteria!");
      generatePassword();
      return("");
    }

    // Generate random password

    for (var i = 0; i < lengthSelection; i++) {
      passwordMix = passwordMix + passwordSelection[Math.floor(Math.random() * passwordSelection.length)];
    }
    return passwordMix;
  };

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);