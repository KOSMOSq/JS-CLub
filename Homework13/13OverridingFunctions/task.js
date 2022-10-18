"use strict";

function format(data, type){
    switch(type){
        case "number":
            format = function (){
                return Number(data);
            }
            break;
        case "string":
            format = function (){
                return String(data);
            }
            break;
        case "boolean":
            format = function (){
                return Boolean(data);
            }
            break;
        default:
            format = function (){
                return null;
            }
    }
}

var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"