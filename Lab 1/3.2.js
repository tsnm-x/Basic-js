var st = prompt("Enter five numbers: ");
var stArr = st.split("");
var intArr = conversion(stArr);
console.log(intArr);

var ascSortArr = intArr.sort(function (a, b){ return a - b; });

document.write("you've entered the values of: " + st + "</br>");
document.write("your values sorted ascendingly: " + ascSortArr + "</br>");
document.write("your values sorted descendingly: " + ascSortArr.reverse() + "</br>");

function conversion(stArr){
  var intArr = new Array;
  for(var i=0; i< stArr.length; i++){
    var x = parseInt(stArr[i]);
    intArr[i] = x;
  }
  return intArr;
}
