var win;
var heightCounter=5;
var widthCounter=5;
var stopCounter = 0;
var stopBool = false;
var timerID;

function openChildWindow(){
  win = open("ChildWindow.html", "", "width=150,height=150");
  win.focus();
}


function stopWin() {
  win.focus();
  clearInterval(timerID);
}

function moved(){
  win.focus();
  timerID = setInterval(mover, 50);

}

function mover(){
  if(stopCounter < 100 && !stopBool){
    win.moveBy(heightCounter, widthCounter);
    stopCounter++;
  } 
  else {
    win.moveBy(-heightCounter, -widthCounter);
    stopBool = true;
    stopCounter--;
    if(stopCounter == 0){
      stopBool = false;
    }
  }

}
