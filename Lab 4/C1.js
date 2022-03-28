var userInput = prompt("Enter two numbers: ");

function func(x, y){
    if (2 > arguments[0].length){
       throw "not enough parameters! Please, enter 2";
    } else if (2 < arguments[0].length){
        throw "You have exceeded the number of parameters...";
    } else {
        x= userInput[0];
        y= userInput[1];
        console.log("You have entered both " + x +" and " + y)
    }
}

func(userInput);