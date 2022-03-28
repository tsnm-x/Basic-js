var win;
var timerId;
function openChildWindow(){
  win = open("ChildWindow.html", "", "width=150,height=150");
  win.focus();
  typer();
  setTimeout(function(){ clearInterval(timerId); win.close(); }, 6000)
}

function typer(){
  var para = "This message will be displayed character by character then will terminate after a few seconds..."
  var char = 0;
  timerId = setInterval(() => {
    win.document.write(para[char]);
    char++;
    if(char==para.length){
      clearInterval(timerId)
    }
  }, (5000/para.length));
}