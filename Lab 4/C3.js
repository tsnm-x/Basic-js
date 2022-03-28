function firstReverse(Arr){
    return Arr.reverse();
}

function secondReverse(Arr){
    var revArr = [];
    for(var i=0; i<arguments[0].length;i++){
        revArr[(arguments[0].length-1) - i] = Arr[i];
    }
    return revArr;
}
function callPrompt(){
    var userInput = prompt("Enter numbers to get their array: ");
    var valArr = userInput.split("");
    console.log(secondReverse(valArr));
    console.log(firstReverse(valArr));
}