function createRectangle(recHeight, recWidth){
    this.height = recHeight;
    this.width = recWidth;
    this.area = function(){
        return parseFloat(recWidth * recHeight);
    }
    this.perimeter = function(){
        return (parseFloat(recHeight) + parseFloat(recWidth)) * 2;
    }
    this.displayInfo = function(){
        return "Height: "+ recHeight + ", Width: " + recWidth + ", Perimeter: " + this.perimeter();
    }
}

function getObject(){
    var hght = document.getElementById("1").value;
    var wdth = document.getElementById("2").value;
    var rec1 = new createRectangle(hght, wdth);
    console.log(rec1.area());
    console.log(rec1.displayInfo()); 

}