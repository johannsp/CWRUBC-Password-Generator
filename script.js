// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate an appropriate secure password on behalf of the user
// Place support variables and object inside the function call
// so they will have function scope and be removed after each
// password is generated.
function generatePassword() {

  var buildPassword = {
    var lower =
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upper =
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
       'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var punct =
      ['~', '!', '#', '$', '%', '^', '*', '-', '+', '.', ',', ':', ';'];
    initialized: false;
    passWord: "";
    hasUpper: false;
    hasPunct: false;
    function BuildPassword(startPass, needUpper, needPunct)
      this.initialized = true;
      this.passWord = startPass;
      //Note reversal of boolean parameters, so pass in whether
      //this character type is required not if it is present!
      this.hasUpper = !needUpper;
      this.hasPunct = !needPunct;
    }
    function getRand(rangeFromZero) {
      return Math.floor(Math.random * rangeFromZero);
    }
    function getPassword(minLen) {
      var complexEnough = false;
      //For future reuseability initialize internal fields unless this step was
      //already performed.
      if (!this.initialized) {
        this.BuildPassword("", true, true);
      }
      this.initialized = false;
      while ( (this.passWord.length() < minLen) && !complexEnough) ) {
        //First random number decides from which group to get the next
        //character added to the password.  Prioritize lower case but
        //require an upper case letter and a punctuation character.
        //Second random number decides which character from group
        //will be added from the chosen group.
        //Track when the password is complex enough and long enough.
        switch (this.getRand(5) {
        case 0:
          this.passWord += this.upper[this.getRand(this.upper.length)];
          this.hasUpper = true;
          complexEnough = this.hasUpper && this.hasPunct; 
          break;
        case 1:
          this.passWord += this.punct[this.getRand(this.punct.length)];
          this.hasPunct = true;
          complexEnough = this.hasUpper && this.hasPunct; 
          break;
        default:
          this.passWord += this.lower[this.getRand(this.lower.length)];
          break;
      }
    }
  }
  buildPassword.getPassword(8);
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
