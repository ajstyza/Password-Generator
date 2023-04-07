
var PasswordArray = [];
var numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
//
    
function generatePassword() {
  var password = ""
  // ask user length of password
  var passwordLength = prompt("What's the length of password you");
  passwordLength= parseInt(passwordLength);

  // check length -  if not valid stop
  if (passwordLength < 8 || passwordLength > 126) {
    // stop 
    return;
  }

  // valid length
  var wantUppercase = confirm("Include uppercase?");
  // YES / NO
  if (wantUppercase) {
    PasswordArray = PasswordArray.concat(upperCase)
  }
  
  var wantLowercase = confirm("Include lowercasae?");
  if (wantLowercase) {
    PasswordArray = PasswordArray.concat(letters)
  }
  var numbers = confirm("include numbers?")
  if (numbers) {
    PasswordArray = PasswordArray.concat(numbers)
  }
  var specialCharacters = confirm("Include special characters?")
  if (specialCharacters) {
    PasswordArray = PasswordArray.concat(specialCharacters)
  }
  
      for (let i = 0; i < passwordLength; i++) {

        var rnum = Math.floor(Math.random() * PasswordArray.length);
        var rchar = PasswordArray[rnum];
        password = password+rchar;
        
    }
    return password
  
  }


// Get references to the #generate element

var generateBtn = document.querySelector("#generate"); // this line creates a variable with a value fetched from html page using queryselector + the id
//writePassword()

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
 
 // this is only happening when I refresh the page. I might need to override default behavior of API
// function generateBtn(event) {
// let generateBtn = event;
// generateBtn.preventDefault(); 
// }