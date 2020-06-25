var name="Khanh";
let lop="18th1";
var myObj = {
    name:name,lop:lop,sayHi:function(){
        console.log("hi,my name is"+this.name+"Class:"+this.lop);
        
    }
};
myObj.sayHi();