"use strict";


function format(data, type){
    switch(type){
        case "number":
            return Number(data);
        case "string":
            return String(data);
        case "boolean":
            return Boolean(data);
        default:
            return null;
    }
}

var res = format("-10", "boolean");
console.log(res);
console.log(typeof res);