// Assignment code here
// var Question1 = "choose between 8-12 password characters";
/*function generatePassword(length, numbers, uppercase, lowercase, symbols)


*/
var PasswordArray = "";
var passwordLength = 126; 
var numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
//
var Length = confirm("Select password length between 8 and 126 characters");
var lettersNumbers = confirm("Include numbers and letters?");
var Symbols = confirm("Include uppercase, lowercasae, numeric, and symbols?");
    
function getInputValues() {

      if (passwordLength >= 8 && passwordLength <= 126) {
        PasswordArray.concat(passwordLength)
      }
    }
    console.log(passwordLength)
      /*
      else if(numbers) {
        PasswordArray.concat(numbers)
      }
      else if(letters) {
        PasswordArray.concat(letters) 
        }
      else if(upperCase) {
        PasswordArray.concat(upperCase)
      }
      else {
        PasswordArray
      }
    }
  
    
 //for loop function all data, then script math.random & math.floor to return randomized character array
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      PasswordArray.push(element)

      return PasswordArray
    }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // this line creates a variable with a value fetched from html page using queryselector + the id
getInputValues()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
 
 // this is only happening when I refresh the page. I might need to override default behavior of AP
function generateBtn(event) {
let generateBtn = event;
generateBtn.preventDefault();

}
