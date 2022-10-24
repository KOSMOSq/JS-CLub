"use strict";

//Task 1
console.log("Task 1");

function mul() {  
    var res = 1;  
    var check = 0;  
    for (var i = 0; i < arguments.length; i++){  
        if (!isNaN(arguments[i])){  
        res *= arguments[i];  
        check++;  
        }
    }  
    return (check === 0) ? 0 : res;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//Task 2
console.log("Task 2");

var country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
        name: "Kyiv",
        population: 2907817,
        area: 847.66,
    },
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
};

format.call(country, "<", ">"); // "<Ukraine>"
format.apply(country, ["[","]"]); // "[Ukraine]"
format.call(country.capital,"\"","\""); // ""Kyiv""
format.apply(country.capital, ["",""]); // "Kyiv"