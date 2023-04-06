// Assignment code here
// var Question1 = "choose between 8-12 password characters";
/*function generatePassword(length, numbers, uppercase, lowercase, symbols)

if(numbers){
  characters += '0123456789'
}
*/
var passwordLength =  126
var numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];

window.prompt("Select password length between 8 and 126 characters");
window.prompt("include numbers and letters?");
  let inputs = '';
    function getInputValues() {
      if(numbers) {
        return numbers
      }
      else if(letters) {
        return letters
      }
      else
        return letters + numbers
      }
  
window.prompt("Yes or no, would you like to include uppercase, lowercasae, numeric, and symbols?") 
  If 

/* Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // this line creates a variable with a value fetched from html page using queryselector + the id
var Char = ["0", "1", "2", "3", "4", "5"]; // 6789abcdefghijklmnopqrstuvwxyz!@*()_=+ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passwordLength = 128;
var password = "";
for (var i=0; i <= passwordLength; i++) {
console.log(Char[i]);
}

// return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button

var PasswordCriteria = prompt("passwords must contain at least 8 characters");

generateBtn.addEventListener("click", writePassword) 

if(generateBtn.prompt) {
  alert("Password must contain at least 8 characters & two special characters") }
 
 
 // this is only happening when I refresh the page. I might need to override default behavior of AP
function generateBtn(event) {
let generateBtn = event;
generateBtn.preventDefault();

}
*/