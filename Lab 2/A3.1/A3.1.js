var num1;
var num2;
var oprt;
var ans;
var checkNums = false;
function EnterNumber(num){
    if(!checkNums){
        if(num1 === undefined){
            num1 = parseFloat(num);
        } else {
            if(isNaN(num)){
                num1 = num1.toString() + ".";
            } else{
                num1= num1.toString() + num.toString();
                num1 = parseFloat(num1);
            }
        }

    } else{
        if (num2 === undefined){
             num2 = parseFloat(num);
        } else {
            if(isNaN(num)){
                num2 = num2.toString() + ".";
            } else{
                num2= num2.toString() + num.toString();
                num2 = parseFloat(num2);
            }
        }
    }
    
}

function EnterEqual(){
        if(num1 != undefined && num2 != undefined){
            switch (oprt) {
                case "+":
                ans = num1 + num2;
                document.getElementById("Answer").value = ans;
                return document.getElementById("Answer").value
                break;
                case "-":
                ans = num1 - num2;
                return document.getElementById("Answer").value = ans;
                break;
                case "/":
                ans = num1 / num2;
                return document.getElementById("Answer").value = ans;
                break;
                case "*":
                ans = num1 * num2;
                return document.getElementById("Answer").value = ans;
                break;
            
                default:
                    break;
            }
            checkNums = false;
        }
}

function EnterOperator(op){
    oprt = op;
    checkNums = true;
}

function EnterClear(){
    num1 = 0;
    num2 = 0;
    oprt = undefined;
    checkNums = false;
    return document.getElementById("Answer").value = "";
}
