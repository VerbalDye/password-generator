// Assignment code here
var specialCharacters = ["!",'”',"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var upperCaseCharacters = ["A",'B',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseCharacters = ["a",'b',"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];

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
    console.log(lengthPassword);

    var totalCriteria = [];
    // Asks user what criteria they want for password
    var lowerCase = window.confirm("Include lowercase?");
    console.log("lowercase " + lowerCase);
    if (lowerCase) {
        totalCriteria = totalCriteria.concat(lowerCaseCharacters);
    }

    var upperCase = window.confirm("Include uppercase?");
    console.log("upperCase " + upperCase);
    if (upperCase) {
        totalCriteria = totalCriteria.concat(upperCaseCharacters);
    }

    var numeric = window.confirm("Include numbers?");
    console.log("numeric " + numeric);
    if (numeric) {
        totalCriteria = totalCriteria.concat(numericCharacters);
    }

    var specialChar = window.confirm("Include special characters? (!, ?, @, #, etc.)");
    console.log("specialChar " + specialChar);
    if (specialChar) {
        totalCriteria = totalCriteria.concat(specialCharacters);
    }

    // Check to make sure user selected at least one criteria
    if (lowerCase == false && upperCase == false && numeric == false && specialChar == false) {
        return ("No Password Criteria Selected. Please Try Again.");
    } else {
        var password = "";
        var digit = "";
        for (var i = 0; i < lengthPasswordNumber; i++) {
            digit = totalCriteria[Math.floor(Math.random() * totalCriteria.length )];
            password += digit;
            console.log(password);
        }
        return(password);
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
