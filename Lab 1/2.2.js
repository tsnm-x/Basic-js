var userInput = prompt("Enter a string: ");
var userConf = confirm("Should we consider case sensitivity? ");

function ChkPalindrome(){
  var strArr = userInput.split("");
  var revArr = strArr.reverse();
  var revString = revArr.join("");
  if (userInput==revString) {
    document.write("Yay, it's a palindrome!!");
  } else {
    document.write("it's not a palindrome...");
  }
}


if(userConf) {
  userInput= userInput.toLowerCase();
  console.log(userInput);
  ChkPalindrome();
} else {
  ChkPalindrome();
}
