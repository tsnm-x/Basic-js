function createRectangle(recHeight, recWidth){

    this.height = recHeight;
    this.width = recWidth;
    createRectangle.objCount++;
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
createRectangle.prototype.class = function(){
    return createRectangle.objCount;
}
createRectangle.objCount = 0;

function getObject(){
    var hght = document.getElementById("1").value;
    var wdth = document.getElementById("2").value;
    var rec1 = new createRectangle(hght, wdth);
    console.log(rec1.area());
    console.log(rec1.toString()); 

}