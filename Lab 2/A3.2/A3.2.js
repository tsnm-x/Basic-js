var imgCollection = new Array;
imgCollection[0] = document.createElement("img");
imgCollection[0].src = "1.jpg";
imgCollection[1] = document.createElement("img");
imgCollection[1].src = "2.jpg";
imgCollection[2] = document.createElement("img");
imgCollection[2].src = "3.jpg";
imgCollection[3] = document.createElement("img");
imgCollection[3].src = "4.jpg";
imgCollection[4] = document.createElement("img");
imgCollection[4].src = "5.jpg";
imgCollection[5] = document.createElement("img");
imgCollection[5].src = "6.jpg";
var nxtCounter = -1;
var img;
var timerId = 0;
function nextImg(){
    if (document.images[0]){
        document.body.removeChild(img);
        
    }
    if(nxtCounter<5){
        img = imgCollection[nxtCounter+1];
        nxtCounter++;
    }
    return document.body.appendChild(img);
    
}
function previousImg(){
    if (document.images[0]){
        document.body.removeChild(img);
        
    }
    
    if(nxtCounter>0){
        img = imgCollection[nxtCounter-1];
        nxtCounter--;
    }
    return document.body.appendChild(img);
}

function slideShow(){
    nxtCounter = -1;
    timerId = setInterval(looper,2000);
}

function stopImg(){
    clearInterval(timerId);
    nxtCounter = -1;
}

function looper(){
    if(nxtCounter < 5 && nxtCounter >= -1){
        if(document.images[0]){
            document.body.removeChild(img);
        }
        img = imgCollection[nxtCounter+1];
        nxtCounter++;
        document.body.appendChild(img);
    } else {
        nxtCounter = -1;
    }
}