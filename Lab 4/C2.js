function add(){
    var sum =0;

    for(var i = 0; i<arguments[0].length; i++){
        sum += parseInt(arguments[0][i]);
    }

    if(arguments[0].length == 0){
        throw "You haven't entered any numbers!!";
    } else if(isNaN(sum)){
        throw "Uh-Oh .. seems like you passes something other than a number...";
    } else {
        console.log(sum);
    }
}

function callPrompt(){
    var userInput = prompt("Enter numbers to get their sum: ");
    var valArr = userInput.split("");
    add(valArr);
}