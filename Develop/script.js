// Assignment code here


// Get references to the #generate element
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
/*function generateBtn(event) {
let generateBtn = event;
generateBtn.preventDefault();

}
