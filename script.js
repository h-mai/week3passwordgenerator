var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
//Generate Password function 

  function generatePassword() {

//First Alert prompting user to create a password

    alert("Let's create a password!") 

//Second Alert prompting user about what the password critiera must be

    alert("For a secure password, there must be a combination of upper and lower case letters, numbers and or special symbols")

//Prompt asking the user to enter a number of characters for the password
// If the number is not between 8-128 characters or is a non-number input there will be an alerting to the criteria 

    var length = Number(prompt("How many characters would you like your password to be?"));

    if (isNaN(length) || length < 8 || length > 128) {
  
      alert("The password must be between 8-128 characters")

    } 
  
    else {
  
      var upperCase = confirm("Would you like to include uppercase letters?");
      var lowerCase = confirm("Would you like to include lowercase letters?");
      var numbers = confirm("Would you like to include numbers");
      var special = confirm("Would you like to include special symbols?");
    
    }

      var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.",
      
      retVal = "";

      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  }
}

generateBtn.addEventListener("click", writePassword);

