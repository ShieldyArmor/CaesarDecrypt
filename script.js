//All commented console.logs are purely for debugging purposes

//Alphabet variable that's used for shifting the alphabet during encryption
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

//The <p> tag housing the encrypted text
var encryptedField = document.getElementById("encryptedActual");

var textWarning = document.querySelector(".noTextWarning");

//The main function of the program, which is run when the "encrypt text" button is pressed and is responsible for the main encryption process
function recieveMessage() {

  forShifting = alphabet.slice(0);
  var assignedVariable = document.getElementById("choppingBlock").value;
  var assignedNumber = document.getElementById("numero").value;
  
  if (assignedVariable == ""){
    textWarning.innerText = "You need to write something!";
    console.error("No encryption variable detected, program terminated.");
  }
  else{
    textWarning.innerText = "";
  }
  
  var output = []
  //console.log(assignedVariable);

  //Converts the user string into lowercase and then logs the result
  let simplified = assignedVariable.toLowerCase();
  //console.log(simplified);
  if (simplified == "turing" || simplified == "alan turing"){
    document.location.href = "turing.html";
  }

  //Shifts the alphabet as many times as specified by the user
  for (let i = 0; i < assignedNumber; i++) {
    forShifting.push(forShifting.shift());
  }
  

  //console.log(forShifting);
  forShifting = forShifting.toString();
  //console.log(forShifting);

  forShifting = forShifting.replaceAll(',', '');

  //console.log(forShifting);

  for (i = 0; i < simplified.length; i++) {
    var index = alphabet.indexOf(simplified[i]);
    var letter = forShifting.charAt(index);
    //console.log(letter);
    output.push(letter);
    //console.log(output);
  }
  
  //Replaces the different occurences of commas with empty spaces
  output = output.toString();
  //console.log(output);
  output = output.replaceAll(',,,', ', ')
  //console.log(output);
  output = output.replaceAll(',,', ', ')
  //console.log(output);
  output = output.replaceAll(',', '')
  //console.log(output);

//Applies and shows the encrypted text on the page
encryptedField.innerHTML = output;
  
}


//Clears the forms, update to clear encrypted text as well
function clearLabel() {
  document.getElementById("myForm").reset();
  encryptedField.innerHTML = "";
  textWarning.innerText = ""
};