//Sử dụng module
var sayHello = function(name){
    console.log("Hello! tên tôi là"+name);
    
}


var sayHello = require("./sayHello.js");
sayHello("Peter");