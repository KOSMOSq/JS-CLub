"use strict";

var k = 1452;
function digitSum(k){
    return k > 10 ? k % 10 + parseInt(digitSum(k / 10)) : k;
}
console.log(digitSum(k));