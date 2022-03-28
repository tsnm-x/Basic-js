function NumList(strt, stp, ed){
    var argms = arguments;
    this.getParams = function(listElems){
        listElems = argms;
        return listElems;
    }
}

var obj = new NumList(1,2,3,4,5);

Object.defineProperties(obj,{
    getParams: {
        writable: false
    },
    getNums: {
        get: function(){ 
            return function(){
                var list = [];
                for(var i=0; i<this.getParams().length;i++){
                    list[i] = this.getParams()[i];
                }
                return list;
            }
        },
        configurable: false,
        enumerable: false
    }, setNums: {
        get:function(){
            return function (num, idx){
                mainList = this.getNums();
                mainList[idx] = num;
                return mainList;
            }
        },
        configurable: false,
        enumerable: false
    }, appendNums:{
        get: function(){
            return function(num){
                var mainList = this.getNums();
                for( var i = 0; i<arguments.length;i++){
                    if(arguments[i] == (mainList[mainList.length-1]+1)){
                        mainList.push(arguments[i]);
                    } else{
                        throw "you haven't entered sequential numbers";
                    }
                }
                return mainList;
            }
        },
        configurable: false,
        enumerable: false
    }, prependNum:{
        get: function(){
            return function(){
                var mainList = this.getNums();
                for( var i = 0; i<arguments.length;i++){
                    if(arguments[i] == (mainList[0]-1)){
                        mainList.unshift(arguments[i]);
                    } else{
                        throw "you haven't entered sequential numbers";
                    }
        
                }
                return mainList;
            }
        },
        configurable: false,
        enumerable: false
    }, dequeue: {
        get: function(){
            return function(num){
                var mainList = this.getNums();
                for(var i =0; mainList.length; i++){
                    if(mainList[i] == num){
                        mainList.splice(i, 1);
                        return mainList;
                    }
                }
            }
        },
        configurable: false,
        enumerable: false
    }}
    )

