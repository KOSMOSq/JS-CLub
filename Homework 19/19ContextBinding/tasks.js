"use strict";


// Task 1
console.log("Task 1");
var user = {
    name: "Tom",
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
};

user.format = function(beginMsg, endMsg){
    console.log(beginMsg + this.name + endMsg);
}

user.format("<<<", ">>>");// "<<<Tom>>>"
var tomFormatScnd = format.bind(user);// Ваш код
tomFormatScnd("<<<", ">>>"); // "<<<Tom>>>"

// Task 2
console.log("Task 2");

function mul(a, b) {
    return a * b;
}

var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20


//Task 3
console.log("Task 3");

function bind(func, context) {
    return function (){
        func.apply(context)
    }
}
function func() {
    console.log(this.name + " - " + this.age);
}
var user = {
    name: "Tom",
    age: 20,
};
var f = bind(func, user);
f(); // "Tom – 20"