var name = prompt("Enter your name: ");
var telephone = prompt("What's your telephone number? ");
var mobile = prompt("What's your mobile number? ");
var email = prompt("What's your email? ");
var checkColor = prompt("What color do you prefer to use in displaying the results: for blue press '1', for green press '2', for red press '3'")
var emvld = /\S+@\S+\.\S+/;
var today = new Date();

if (!isNaN(parseInt(name)) || (isNaN(parseInt(telephone)) || telephone.length != 8 ) || (isNaN(parseInt(mobile)) || (mobile.indexOf("011") != 0 && mobile.indexOf("012") != 0 && mobile.indexOf("010") != 0) || mobile.length != 11 ) || !emvld.test(email)) {
  console.log("Please enter valid values...");

}
else
{
  document.write("<h1>Entering user info</h1>")
  switch (checkColor) {
    case '1':
    document.write("<span style=\"color:blue\">Welcome " + name + "</br>");
    document.write("Your telephone number is " + telephone + "</br>");
    document.write("Your mobile number is " + mobile + "</br>");
    document.write("Your email is " + email + "</br>");
    document.write("Today is " + today);
      break;
    case '2':
    document.write("<span style=\"color:green\">Welcome " + name + "</br>");
    document.write("Your telephone number is " + telephone + "</br>");
    document.write("Your mobile number is " + mobile + "</br>");
    document.write("Your email is " + email + "</br>");
    document.write("Today is " + today);
      break;
    case '3':
    document.write("<span style=\"color:red\">Welcome " + name + "</br>");
    document.write("Your telephone number is " + telephone + "</br>");
    document.write("Your mobile number is " + mobile + "</br>");
    document.write("Your email is " + email + "</br>");
    document.write("Today is " + today);
      break;
  }

}
