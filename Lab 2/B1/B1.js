function ChangeFont(font){
    switch (font) {
        case "arial":
        document.getElementById("PAR").style.fontFamily = "arial";
        break;
        case "courier":

        document.getElementById("PAR").style.fontFamily = "courier";
        break;
        case "georgia":
        document.getElementById("PAR").style.fontFamily = "georgia";
        break;
        case "impact":
        document.getElementById("PAR").style.fontFamily = "impact";

        break;
        case "times new roman":
        document.getElementById("PAR").style.fontFamily = "times new roman";
        break;
        case "verdana":
        document.getElementById("PAR").style.fontFamily = "verdana";
        break;
    }

}

function ChangeAlign(txtAlign){
    switch (txtAlign) {
        case "center":
        document.getElementById("PAR").style.textAlign = "center";
        break;
        case "justify":

        document.getElementById("PAR").style.textAlign = "justify";
        break;
        case "left":
        document.getElementById("PAR").style.textAlign = "left";
        break;
        case "right":
        document.getElementById("PAR").style.textAlign = "right";

        break;
    }

    
}

function ChangeHeight(lnHeight){
    switch (lnHeight) {
        case "normal":
        document.getElementById("PAR").style.lineHeight = "normal";
        break;
        case "10px":

        document.getElementById("PAR").style.lineHeight = "10";
        break;
        case "15px":
        document.getElementById("PAR").style.lineHeight = "15";
        break;
        case "1.5":
        document.getElementById("PAR").style.lineHeight = "1.5";

        break;
    }
    
}

function ChangeLSpace(lSpace){
        switch (lSpace) {
        case "normal":
        document.getElementById("PAR").style.letterSpacing = "normal";
        break;
        case "-1px":

        document.getElementById("PAR").style.letterSpacing = "-1px";
        break;
        case "2px":
        document.getElementById("PAR").style.letterSpacing = "2px";
        break;
        case "3px":
        document.getElementById("PAR").style.letterSpacing = "3px";

        break;
    }

    
}

function ChangeIndent(lnIndent){
        switch (lnIndent) {
        case "0px":
        document.getElementById("PAR").style.textIndent = "0px";
        break;
        case "5px":

        document.getElementById("PAR").style.textIndent = "5px";
        break;
        case "15px":
        document.getElementById("PAR").style.textIndent = "15px";
        break;
        case "25px":
        document.getElementById("PAR").style.textIndent = "25px";

        break;
    }
    
}

function ChangeTransform(txtTransform){
        switch (txtTransform) {
        case "none":
        document.getElementById("PAR").style.textTransform = "none";
        break;
        case "capitalize":

        document.getElementById("PAR").style.textTransform = "capitalize";
        break;
        case "uppercase":
        document.getElementById("PAR").style.textTransform = "uppercase";
        break;
        case "lowercase":
        document.getElementById("PAR").style.textTransform = "lowercase";

        break;
    }

    
}

function ChangeDecorate(txtDecorate){
        switch (txtDecorate) {
        case "none":
        document.getElementById("PAR").style.textDecoration = "none";
        break;
        case "line-through":

        document.getElementById("PAR").style.textDecoration = "line-through";
        break;
        case "overline":
        document.getElementById("PAR").style.textDecoration = "overline";
        break;
        case "underline":
        document.getElementById("PAR").style.textDecoration = "underline";

        break;
        }
}

function ChangeBorder(chngBorder){
    switch (chngBorder) {
    case "none":
    document.getElementById("PAR").style.border = "none";
    break;
    case "dotted":

    document.getElementById("PAR").style.border = "dotted";
    break;
    case "double":
    document.getElementById("PAR").style.border = "double";
    break;
    case "groove":
    document.getElementById("PAR").style.border = "groove";

    break;
    case "dashed":
    document.getElementById("PAR").style.border = "dashed";
    break;
    case "inset":
    document.getElementById("PAR").style.border = "inset";
    break;
    case "solid":
    document.getElementById("PAR").style.border = "solid";
    break;
    case "outset":
    document.getElementById("PAR").style.border = "outset";

    break;
    case "ridge":
    document.getElementById("PAR").style.border = "ridge";

    break;
    }

}

function ChangeBorderColor(chngBorderColor){
    switch (chngBorderColor) {
        case "none":
        document.getElementById("PAR").style.borderColor = "none";
        break;
        case "pink":

        document.getElementById("PAR").style.borderColor = "pink";
        break;
        case "red":
        document.getElementById("PAR").style.borderColor = "red";
        break;
        case "green":
        document.getElementById("PAR").style.borderColor = "green";

        break;
        case "blue":

        document.getElementById("PAR").style.borderColor = "blue";
        break;
        case "yellow":
        document.getElementById("PAR").style.borderColor = "yellow";
        break;
        case "purple":
        document.getElementById("PAR").style.borderColor = "purple";

        break;
    }

}
    
