var valArr = new Array;

function saveVals(){
    if(valArr.length == 0){
        for(var i = 0; i<document.links.length;i++){
            valArr[i] = document.links[i].innerHTML;
            console.log(valArr[i]);
        }
    }

}
function removeElem(id){
    saveVals();
    for(var i = 0; i<document.links.length;i++){
        if(document.links[i] == document.getElementById(`${id}`).childNodes[0]){
            document.links[i].remove();
        }
    }
}
function formatElem(id){
    var sel = id;
    removeElem(sel);
    document.getElementById(`${sel}`).appendChild(document.createElement("STRONG"));

}

function elemAssign(id){
    var sel = id;
    console.log(id);
    formatElem(sel);
    document.getElementById(`${sel}`).childNodes[0].innerHTML = valArr[sel];
    document.getElementById(`${sel}`).style.listStyleType = "circle";
    doOnce();
}

function doOnce(){
    if(document.getElementById("txt").style.listStyleType != "circle"){
        document.getElementById("txt").style.listStyleType = "circle";
    }
}

function imgStyling(){
    document.getElementById("img1").style.height = "200px";
    document.getElementById("img1").style.width = "200px";
    document.getElementById("header").style.textAlign = "right";
    imgCreate();
}

function imgCreate(){
    var newDiv = document.getElementsByClassName("center")[0].appendChild(document.createElement("div"));
    newDiv.style.textAlign = "left"
    var newImg = newDiv.appendChild(document.createElement("img"))
    newImg.src = "dom.jpg";
    newImg.style.height = "200px";
    newImg.style.width = "200px";
}