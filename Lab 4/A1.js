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
    var nm = document.getElementById("usrnm").value;
    var userAge = document.getElementById("age").value;
    var img1 = document.getElementsByClassName("rads")[0];
    var img2 = document.getElementsByClassName("rads")[1];
    console.log(img1);
    console.log(img2);
    try{
        if ( nm && userAge && (img1.checked||img2.checked)){
            setCookie("username", nm, date);
            setCookie("age", userAge, date);

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
        else{

            throw "you have missed some info!"
        }

    } catch(err) {

        alert(err);

    }
    
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
