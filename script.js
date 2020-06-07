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
    initialized: false,
    passWord: "",
    hasUpper: false,
    hasDigit: false,
    hasPunct: false,
    BuildPassword: function(startPass, needUpper, needDigit, needPunct) {
      this.initialized = true;
      this.passWord = startPass;
      //Note reversal of boolean parameters, so pass in whether
      //this character type is required not if it is present!
      this.hasUpper = !needUpper;
      this.hasDigit = !needDigit;
      this.hasPunct = !needPunct;
    },
    getRand: function(rangeFromZero) {
      return Math.floor(Math.random() * rangeFromZero);
    },
    getPassword: function(minLen, maxLen) {
      var complexEnough = false;
      //For future reuseability initialize internal fields unless this step was
      //already performed.
      if (!this.initialized) {
        this.BuildPassword("", true, true, true);
      }
      this.initialized = false;
      //Unless maximum password length has been reached continue
      //adding random characters until both the minimum length
      //and complex enough requrements have been satisfied.
      //Note that lower case letters are more likely to be added
      //than upper case letters or punctuation, but an extremely
      //long password is very unlikely.
      while ( (this.passWord.length < minLen) ||
              !complexEnough &&
              (this.passWord.length < maxLen) ) {
        //console.log("passWord.length="+this.passWord.length);
        //DEBUG by uncommenting:
        //if (confirm("Password="+this.passWord+"\nStop early?")) { break; }
        //First random number decides from which group to get the next
        //character added to the password.  Prioritize lower case but
        //require an upper case letter and a punctuation character.
        //Second random number decides which character from group
        //will be added from the chosen group.
        //Track when the password is complex enough and long enough.
        switch (this.getRand(10)) {
        case 0:
          this.passWord += this.upper[this.getRand(this.upper.length)];
          this.hasUpper = true;
          complexEnough = this.hasUpper && this.hasDigit && this.hasPunct; 
          break;
        case 1:
          this.passWord += this.digit[this.getRand(this.digit.length)];
          this.hasDigit = true;
          complexEnough = this.hasUpper && this.hasDigit && this.hasPunct; 
          break;
        case 2:
          this.passWord += this.punct[this.getRand(this.punct.length)];
          this.hasPunct = true;
          complexEnough = this.hasUpper && this.hasDigit && this.hasPunct; 
          break;
        default:
          this.passWord += this.lower[this.getRand(this.lower.length)];
          break;
        }
        //console.log("WIP password="+this.passWord);
      }
    }
  }
  buildPassword.getPassword(8,128);
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
