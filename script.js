// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "~" ];



// Write password to the #password input

var inputOptions = function() {

  // Ask user how many characters they would like their password to contain.

  var lengthSelection = window.prompt("Please enter a number that has between 8 - 128 characters:");      
  if (!lengthSelection) {
    return;
  }
  else if (lengthSelection < 8 || lengthSelection > 128) {
    window.prompt("Please enter a number that has between 8 - 128 characters.");
    inputOptions();
  }
  else if (isNaN(lengthSelection)) {
    window.prompt("Please enter a number that has between 8 - 128 characters.");
    inputOptions();
  }
  else {
    var passLength = userInput;
    return;
  }

  var lowerSelection = confirm("Please indicate if you would like your password to contain lowercase letters:");
  var upperSelection = confirm("Please indicate if you would like your password to contain uppercase letters:");
  var numberSelection = confirm("Please indicate if you would like your password to contain numbers:");
  var specialSelection = confirm("Please indicate if you would like your password to contain special characters:");

  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var options = function() {
  var lowerCase = window.confirm("Would you like your password to contain lowercase letters? (ex. a, b, c)");
  var upperCase = window.confirm("Would you like your password to contain uppercase letters? (ex. A, B, C)");
}

inputOptions();
