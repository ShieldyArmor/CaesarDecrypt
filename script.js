var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];
var encryptedField = document.getElementById("encryptedActual");
function recieveMessage() {
  forShifting = alphabet.slice(0);
  var assignedVariable = document.getElementById("choppingBlock").value;
  var assignedNumber = document.getElementById("numero").value;
  var output = []


  let simplified = assignedVariable.toLowerCase();
  // simplified = simplified.replaceAll(" ", '_');
  console.log(simplified);

  for (let i = 0; i < assignedNumber; i++) {
    forShifting.push(forShifting.shift());
  }
  
  console.log(forShifting);
  forShifting = forShifting.toString();
  console.log(forShifting);

  forShifting = forShifting.replaceAll(',', '');

  console.log(forShifting);

  for (i = 0; i < simplified.length; i++) {
    var index = alphabet.indexOf(simplified[i]);
    var letter = forShifting.charAt(index);
    console.log(letter);
    output.push(letter);
    console.log(output);
  }
  
  
  output = output.toString();
  console.log(output);
  output = output.replaceAll(',,,', ', ')
  console.log(output);
  output = output.replaceAll(',,', ', ')
  console.log(output);
  output = output.replaceAll(',', '')
  console.log(output);

document.getElementById("encryptedActual").innerHTML = output;
  
}



function clearLabel() {
  document.getElementById("myForm").reset();
};
