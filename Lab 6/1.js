var xhr= new XMLHttpRequest();
xhr.open("GET", "rockbands.json");
xhr.send("");
var jsObj;
function displayBands(){
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.statusText == "OK"){
                jsObj = JSON.parse(xhr.responseText);
                displayContent(jsObj);
            }
        }
    }
}

function displayContent(obj){
    var keys= Object.keys(obj);
    for(var i =0; i<keys.length;i++){
        document.getElementsByTagName("select")[0].options[i+1].innerHTML = keys[i];
    }
}

function displayArtists(selVal){
    var op;
    resetArtists();
    for(var i in jsObj){
        if(i == selVal){
            for(j = 0; j<jsObj[i].length; j++){
                op = document.getElementsByTagName("select")[1].appendChild(document.createElement("option"));
                op.innerHTML = jsObj[i][j]["name"];
            }
        }
    }
}


function displayLink(artst){
    for(var i in jsObj){
        if(i == document.getElementsByTagName("select")[0].value){
            
            for(j = 0; j<jsObj[i].length; j++){
                
                if(jsObj[i][j]["name"] == artst){
                    
                    document.location.assign(jsObj[i][j]["value"]);
                    resetArtists();
                    document.getElementsByTagName("select")[0].value = document.getElementsByTagName("select")[0].options[0].value;
                }
            }
        }
    }

}

function resetArtists(){
    while(document.getElementsByTagName("select")[1].options[1] !== undefined){
        for(var i=1; i<document.getElementsByTagName("select")[1].options.length; i++){
            document.getElementsByTagName("select")[1].removeChild(document.getElementsByTagName("select")[1].options[i]);
        }
    }
}