var userChoice = prompt("choose one of these operations: - press '1' for calculating area of a circle. press '2' for calculating square root of a number. - press '3' for calculating cos of a number.")

switch (userChoice) {
  case "1":
    getArea();

    break;
  case "2":
    var userInput = parseInt(prompt("Enter the number: "));
    alert("the square root of "+userInput+" is "+Math.sqrt(userInput));

    break;
  case "3":
    var userInput = parseInt(prompt("Enter the angle: "));
    document.write("cosine of "+userInput+ "<sup>o</sup> "+" is "+ Math.cos(userInput*(Math.PI / 180)).toFixed(4));
    break;
  default:

}
function getArea()
{
  var userInput = parseInt(prompt("Enter the value of radius: "));
  var area = userInput * userInput * Math.PI;
  return alert("the area of the circle is: " + area);
}
