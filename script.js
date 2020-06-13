// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate an appropriate secure password on behalf of the user
// Place support variables and object inside the function call
// so they will have function scope and be removed after each
// password is generated.
function generatePassword() {

  var buildPassword = {
    lower:
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upper:
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
       'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    digit:
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    punct:
      ['~', '!', '#', '$', '%', '^', '*', '-', '+', '.', ',', ':', ';'],
    included: 
      [],
    initialized: false,
    passWord: "",
    BuildPassword: function(startPass, needUpper, needDigit, needPunct) {
      this.initialized = true;
      this.passWord = startPass;
      //Build the a single character set by concatenating to the mandatory
      //lower case letter subset whichever optional special charcter subsets
      //were selected as need.
      this.included = this.lower.concat(
        (needUpper) ? this.upper : [],
        (needDigit) ? this.digit : [],
        (needPunct) ? this.punct : [],
      );

    },
    getRand: function(rangeFromZero) {
      return Math.floor(Math.random() * rangeFromZero);
    },
    getPassword: function(passLen) {
      //For future reuseability initialize internal fields unless this step was
      //already performed.
      if (!this.initialized) {
        this.BuildPassword("", true, true, true);
      }
      this.initialized = false;
      //Since included property has been built by the constructor with the
      //proper character set of allowable characters, just loop adding one
      //random character from included until the desired password length is
      //achieved.
      while (this.passWord.length < passLen) {
        this.passWord += this.included[this.getRand(this.included.length)];
      }
    }
  }
  
  do {
    pLen = parseInt(prompt("Password length 8 up to 128 characters"),10);
  }
  while (isNaN(pLen) || (pLen < 8) || (pLen > 128));
  var needU = confirm("Can include upper case letters?");
  var needD = confirm("Can include digits?");
  var needP = confirm("Can include punctuation characters?");
  buildPassword.BuildPassword("", needU, needD, needP);
  buildPassword.getPassword(pLen);
  return buildPassword.passWord;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
