function keyConverter(evt) {
    var asciiKey = evt.keyCode;
    switch(asciiKey){
        case 16:
            alert("You pressed 'shift' key while I told you not to! play clean...");
        break;
        
        case 17:
            alert("You pressed 'ctrl' key while I told you not to! play clean...");
        break;

        case 18:
            alert("You pressed 'alt' key while I told you not to! play clean...");
        break;
        default:
            var actualKey = String.fromCharCode(asciiKey);
            document.getElementById("norm").innerHTML = "That's an easy one! the key is: " + actualKey;
        break;

    }
}

