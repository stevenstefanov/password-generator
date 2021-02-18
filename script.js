// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "~" ];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lengthSelector = function() {
  var userInput = window.prompt("Please enter a number that has between 8 - 128 characters.");
  if (!userInput) {
    return;
  }
  else if (userInput < 8 || userInput >128) {
    window.alert("Please enter a number that has between 8 - 128 characters.");
    return;
  }
  else {
    var passLength = userInput;
    console.log(passLength);
    return;
  }
};
