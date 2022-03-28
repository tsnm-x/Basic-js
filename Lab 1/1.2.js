
var sum = 0;
do {
  var userInput = parseInt(prompt("Enter a number: "));
  if(!userInput){
    document.write("You have entered an invalid value...");
    break;
  }
   sum = sum + userInput;
   document.write("your sum is: " + sum+ "<br>");

} while (sum < 100)



document.write("you have exceeded the limit");
