function Shape(recHeight, recWidth){
    if(this.constructor==Shape){
        throw "creating instances of Shape is not allowed";
    } else if(this.constructor==createRectangle && createRectangle.recObjCount ==1){
        throw "you have exceeded the number of allowed rectangle objects";
    }else if(this.constructor==createSquare && createSquare.sqObjCount ==1){
        throw "you have exceeded the number of allowed square objects";
    }
    this.height = recHeight;
    this.width = recWidth;
    
}

function createRectangle(recHeight, recWidth){
    Shape.call(this, recHeight, recWidth);
    createRectangle.recObjCount++;


}

function createSquare(sqWidth){
    createRectangle.call(this, sqWidth, sqWidth);
    createSquare.sqObjCount++;
}


createRectangle.prototype = Object.create(Shape.prototype);
createSquare.prototype = Object.create(createRectangle.prototype);
createRectangle.prototype.constructor = createRectangle;
createSquare.prototype.constructor = createSquare;


createRectangle.recObjCount = 0;
createRectangle.prototype.getCount = function(){
    return recObjCount;
}
createRectangle.prototype.area = function(){
    return parseFloat(this.height * this.width);
}
createRectangle.prototype.perimeter = function(){
    return (parseFloat(this.height) + parseFloat(this.width)) * 2;
}
createRectangle.prototype.toString = function(){
    return "Height: "+ this.height + ", Width: " + this.width + ", Perimeter: " + this.perimeter() + ", Area: " + this.area();
}


createSquare.sqObjCount = 0;
createSquare.prototype.getCount = function(){
    return sqObjCount;
}

function getObject(){
    var hght = document.getElementById("1").value;
    var wdth = document.getElementById("2").value;
    var rec1 = new createRectangle(hght, wdth);
    console.log(rec1.area());
    console.log(rec1.toString()); 
    var sq1 = new createSquare(wdth);
    console.log(sq1.area());
    console.log(sq1.toString());
    var sq2 = new createSquare(wdth);
}