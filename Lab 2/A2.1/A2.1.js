var win;

function userInfo(){
  win = open("ChildWindow2.1.html", "", "width=150,height=150");
  var info = [document.getElementById("name").value, document.getElementById("email").value, document.getElementById("job").value, document.getElementById("gender").value, document.getElementById("address").value];
  displayInfo(info);
}


function displayInfo(infoArr){
  win.document.write("<h1>Welcome!!</h1>")
  win.document.write("Your name is "+ infoArr[0] + "<br>");
  win.document.write("Your email is "+ infoArr[1] + "<br>");
  win.document.write("Your job title is "+ infoArr[2]  + "<br>");
  win.document.write("Your gender is "+ infoArr[3]  + "<br>");
  win.document.write("Your address is "+ infoArr[4]  + "<br>");
}
