var st = prompt("Enter three numbers: ");
var stArr = st.split("");

function conversion(stArr){
  var intArr = new Array;
  for(var i=0; i<3; i++){
    var x = parseFloat(stArr[i]);
    intArr[i] = x;
  }
  return intArr;
}

function add(stArr){
  var intArr = conversion(stArr);
  var sum = intArr[0] + "+" + intArr[1] + "+" +intArr[2] + "=" + parseFloat(intArr[0]+intArr[1]+intArr[2]);
  return sum;
}

function multiply(stArr){
  var intArr = conversion(stArr);
  var sum = intArr[0] + "*" + intArr[1] + "*" +intArr[2] + "=" + parseFloat(intArr[0]*intArr[1]*intArr[2]);
  return sum;
}

function division(stArr){
  var intArr = conversion(stArr);
  var sum = intArr[0] + "/" + intArr[1] + "/" + intArr[2] + "=" + parseFloat(intArr[0]/intArr[1]/intArr[2]);
  return sum;
}

document.write("sum of three numbers " + add(stArr) + "</br>")
document.write("multiplication of three numbers is " + multiply(stArr) + "</br>")
document.write("division of three numbers is " + division(stArr) + "</br>")
