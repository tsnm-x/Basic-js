var topH=170;
var topW=170;
var leftH=170;
var leftW=170;
var rightH=170;
var rightW=170;
var stopCounter = 0;
var stopBool = false;
var topTimerId;
var leftTimerId;
var rightTimerId;
var mvCount = 0;
function topMoved(){
    topTimerId = setInterval(topMover, 50);
  
}
  
function topMover(){
if(stopCounter < 100 && !stopBool){
    document.images[2].style.top = topH+"px";
    document.images[2].style.left = topW+"px";
    stopCounter++;
    topH+=5;
} 
else {
    document.images[2].style.top = topH+"px";
    document.images[2].style.left = topW+"px";
    stopBool = true;
    stopCounter--;
    topH-=5;
    if(stopCounter == -100){
        stopBool = false;
    }
}
}

function leftMoved(){
    leftTimerId = setInterval(leftMover, 50);
  
  }
  
  function leftMover(){
  if(stopCounter < 100 && !stopBool){
    document.images[1].style.top = leftH+"px";
    document.images[1].style.left = leftW+"px";
    stopCounter++;
    leftW+=5;
  } 
  else {
    document.images[1].style.top = leftH+"px";
    document.images[1].style.left = leftW+"px";
    stopBool = true;
    stopCounter--;
    leftW-=5;
    if(stopCounter == -100){
    stopBool = false;
    }
  }
  
  }
  function rightMoved(){
    rightTimerId = setInterval(rightMover, 50);
  
  }
  
  function rightMover(){
  if(stopCounter < 100 && !stopBool){
    document.images[0].style.top = rightH+"px";
    document.images[0].style.left = rightW+"px";
    stopCounter++;
    rightW-=5;
  } 
  else {
    document.images[0].style.top = rightH+"px";
    document.images[0].style.left = rightW+"px";
    stopBool = true;
    stopCounter--;
    rightW+=5;
    if(stopCounter == -100){
    stopBool = false;
    }
  }
  
  }
function moveAll(){
  if(!mvCount){
    topMoved();
    leftMoved();
    rightMoved();
    document.getElementById("btn").value = "stop";
    mvCount = 1;
  } else {
    clearAll();
    document.getElementById("btn").value = "move";
    mvCount = 0;
  }
}

function clearAll(){
    clearInterval(topTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
}

function resetAll(){
topH=170;
topW=170;
leftH=170;
leftW=170;
rightH=170;
rightW=170;
stopCounter = 0;
stopBool = false;
document.getElementsByClassName("imgs").style.position = "absolute", 
document.getElementsByClassName("imgs").style.objectPosition = "50% 50%";
}
   