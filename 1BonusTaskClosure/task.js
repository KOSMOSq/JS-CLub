"use strict";

function create(str){
    var str1 = str;
    return function(str){
        return str === str1;
    }
}

var tom = create("pass_for_Tom") 

console.log(tom("pass_for_Tom")); //true 
console.log(tom("pass_for_tom")); //false
