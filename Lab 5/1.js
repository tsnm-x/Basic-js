function List(strt, ed, stp){
    this.start = strt;
    this.step= stp;
    this.end = ed;
    var lst = [];
    var that = this;
    var fill = function(){
        for(var i=that.start; i<that.end; i+=that.step){

            lst.push(i);
        }
    }
    fill();
    this.getList = function(){
        return lst;
    }
    this.setList = function(list){
        lst=list;
    }
    
}

List.prototype.append = function(val){
    var list = this.getList();
    if(val == list[list.length-1]+this.step){
        list.push(val);
    } else {
        throw "the value is not sequential";
    }
}
List.prototype.prepend= function(val){
    var list = this.getList();
    if(val == list[0]-this.step){
        list.unshift(val);
    } else {
        throw "the value is not sequential";
    }

}

List.prototype.dequeueNum = function(num) {
    var list = this.getList();
    for(var i =0; i<list.length; i++){
        if(list[i] == num){
            list.splice(i, 1);
        }   
    }
}

List.prototype.displayList = function(){
    console.log(this.getList());
}


var obj = new List(2,8,2)

Object.defineProperties(obj,{
    getList: {
        configurable: false,
        enumerable: false
    }, setList: {
        configurable: false,
        enumerable: false
    }, append:{
        configurable: false,
        enumerable: false
    }, prepend:{
        configurable: false,
        enumerable: false
    }, dequeueNum: {
        configurable: false,
        enumerable: false
    },
    displayList: {
        configurable: false,
        enumerable: false
    }})
