function txtStyle(){
    document.getElementById("txt").style.listStyleType = "circle";
    document.getElementById("0").style.listStyleType = "circle";
    document.getElementById("1").style.listStyleType = "circle";
    document.getElementById("2").style.listStyleType = "circle";
    document.getElementById("3").style.listStyleType = "circle";
    document.getElementById("4").style.listStyleType = "circle";
}

function allStyling(){
    document.getElementById("img1").style.height = "200px";
    document.getElementById("img1").style.width = "200px";
    document.getElementById("header").style.textAlign = "right";
    imgCreate();
    txtStyle();
}

function imgCreate(){
    var newDiv = document.getElementsByClassName("center")[0].appendChild(document.createElement("div"));
    newDiv.style.textAlign = "left"
    var newImg = newDiv.appendChild(document.createElement("img"))
    newImg.src = "dom.jpg";
    newImg.style.height = "200px";
    newImg.style.width = "200px";
}