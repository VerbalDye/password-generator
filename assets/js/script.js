// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Gets password length
  while (true) {
    var lengthPassword = window.prompt("Please choose a length between 8 and 128.");
    var lengthPasswordNumber = parseInt(lengthPassword);
    // Checks to makes sure length is a number in the correct range
    if (lengthPasswordNumber >= 8 && lengthPasswordNumber <= 128 && !isNaN(lengthPasswordNumber)) {
      break;
    }
  }

  // Asks user what critiria they want for password
  console.log(lengthPassword);
  var lowerCase = window.confirm("Include lowercase?");
  console.log("lowercase " + lowerCase);
  var upperCase = window.confirm("Include uppercase?");
  console.log("upperCase " + upperCase);
  var numeric = window.confirm("Include numbers?");
  console.log("numeric " + numeric);
  var specialChar = window.confirm("Include special characters? (!, ?, @, #, etc.)");
  console.log("specialChar " + specialChar);
  if (lowerCase == false && upperCase == false && numeric == false && specialChar == false) {
    return("No Password Criteria Selected. Please Try Again.");
  } else {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
