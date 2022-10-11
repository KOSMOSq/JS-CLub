"use strict";

var x = 1;
var y = 2;
var res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

var res2 = "" + (x < y) + y ; 
console.log(res2);
console.log(typeof res2);

var res3 = x < y; 
console.log(res3);
console.log(typeof res3); 

var res4 = "y" - x;
console.log(res4); 
console.log(typeof res4);