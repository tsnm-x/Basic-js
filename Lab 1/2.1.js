var userInput = prompt("Enter a string: ");

var stringArr = userInput.split("");

var counter = 0;

for (var i=0; i<stringArr.length; i++){
  if (stringArr[i] == "e") {
    counter++;
  }
}

document.write("The total number of 'e's is "+ counter);
