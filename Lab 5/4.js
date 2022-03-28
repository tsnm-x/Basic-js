function Box(hght, wdth, len, mtrl){
    var bookArr = [];
    this.height = hght;
    this.width = wdth;
    this.length = len;

    this.createBooks = function(bookDetails){
        //var book1 = new this.bookCreator("harry potter", "10", "JK Rowling", 599, "Times", 2);
        //var book2 = new this.bookCreator("fantastic beasts", "10", "JK Rowling", 599, "Times", 2);
        if(arguments[0] !== undefined){
            var bk = new Book(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            bookArr.push(bk);
        }
    }
    this.content = function(){
        return bookArr;
    }
    this.delBooks = function(nm){
        for(var i =0; i<this.content().length; i++){
            if(this.content()[i].title == nm){
                bookArr.splice([i],1);
                return bookArr;
            }
        }
    }
    this.toString = function(){
        return "Height: " + this.height +", Width: " + this.width + ", Length: " + this.length+ "... books are stored horizontally";
    }
    this.valueof = function(objs){
        var totalBooksNum = this.numOfBooks();
        for(var i = 0; i<arguments.length;i++){
            totalBooksNum += arguments[i].numOfBooks();
        }
        return totalBooksNum;
    }
    this.numOfBooks= function(){
        return bookArr.length;
    }
    this.volume = function(){
        return this.height * this.length * this.width;
    }
    this.material = mtrl;
}

function Book(ttl, chnum, authr, pgnum, pb, cpnum){
        
    this.title = ttl;
    this.chapterNumber = chnum;
    this.author = authr;
    this.pageNumber = pgnum;
    this.publisher = pb;
    this.numOfCopies = cpnum;
}

var box1 = new Box(10, 20, 10, "Cartoon");
var box2 = new Box(20, 20, 10, "Cartoon");
box1.createBooks("harry potter", "10", "JK Rowling", 599, "Times", 2);
box2.createBooks("fantastic beasts", "10", "JK Rowling", 599, "Times", 2);