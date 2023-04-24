
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArr = ["!", "@", "#", "$", "%", "&", "*"];
//

function generatePassword() {
  var PasswordArray = [];
  var password = ""
  var passwordLength = prompt("How long would you like your password, pick between 8-126 characters");

  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 126) {
    return "Invalid Length";
  }
  var wantUppercase = confirm("Include uppercase?");
  if (wantUppercase) {
    PasswordArray = PasswordArray.concat(upperCase)
  }
  var wantLowercase = confirm("Include lowercasae?");
  if (wantLowercase) {
    PasswordArray = PasswordArray.concat(letters)
  }
  var numbers = confirm("include numbers?")
  if (numbers) {
    PasswordArray = PasswordArray.concat(numbersArr)
  }
  var specialCharacters = confirm("Include special characters?")
  if (specialCharacters) {
    PasswordArray = PasswordArray.concat(specialCharactersArr)
  }
  //console.log("PA",PasswordArray)
  if(PasswordArray.length === 0){
    return "Choose 1"
  }

  for (let i = 0; i < passwordLength; i++) {

    var rnum = Math.floor(Math.random() * PasswordArray.length);
    var rchar = PasswordArray[rnum];
    password = password + rchar;

  }
  return password

}


// Get references to the #generate element

var generateBtn = document.querySelector("#generate"); // this line creates a variable with a value fetched from html page using queryselector + the id


// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)
