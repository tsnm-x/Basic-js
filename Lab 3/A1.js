var date = new Date;
date = date.setMonth(date.getMonth()+2);

function setCookie(cookieName, cookieVal, date){
    cookiepath = "/";
    document.cookie = cookieName +"=" + cookieVal+";expires=" + date + "; path=" + cookiepath;
    
}

function getCookie(cookieName){
  var cookies = allCookieList(); 
  for(i in cookies){
      if(i == cookieName){
          return cookies[i];
      }
  }
}

function delCookies(cookieName){
    var cookies = allCookieList();
    for(i in cookies){
        if(i == cookieName){
            document.cookie = cookieName+"=;expires=9-9-2009";
        }
    }
    
}

function saveInfo(){
    setCookie("username", document.getElementById("usrnm").value, date);
    setCookie("age", document.getElementById("age").value, date);

    for(var i = 0; i<document.images.length; i++){
        if(document.getElementsByClassName("rads")[i].checked){
            setCookie("image", document.getElementsByClassName("rads")[i].nextElementSibling.src, date)
        }
    }
 
    for(var i = 0;i<document.getElementById("menu").length; i++){
        if(document.getElementById("menu").options[i].selected){
            setCookie("color", document.getElementById("menu").options[i].value, date);
            console.log(document.getElementById("menu").options[i].value);
        }
    }
    document.location.replace("ChildWindow.html");
    
}

function hasCookie(cookieName){
    cookies = allCookieList();
    for(i in cookies){
        if(i == cookieName){
            return true;
        }
        return false;
    }

}

function allCookieList(){
    var associativeCookie= new Array;
    var savedCookies = document.cookie.split(";");
    for(var i = 0; i<savedCookies.length; i++){
        associativeCookie[savedCookies[i].split("=")[0].trim()] = savedCookies[i].split("=")[1];
    }
    return associativeCookie;
}

function retrieveInfo(){
    var vst = document.getElementById("sp2");
    vst.innerHTML = visitCounter();
    vst.style.color = getCookie("color");
    var userName = document.getElementById("sp1");
    userName.innerHTML = getCookie("username");
    userName.style.color = getCookie("color")
    var savedImage = document.getElementById("selImg");
    savedImage.src = getCookie("image");
}

function visitCounter(){
    var counter = getCookie("visits");

    if (!counter) {
        counter = 1;
    }else {
    counter = parseInt(counter) + 1;
    }

    setCookie("visits", counter,date);
    return getCookie("visits");
}