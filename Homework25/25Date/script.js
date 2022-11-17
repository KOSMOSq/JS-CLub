"use strict";

var date = new Date(1655999999999);

console.log(date);
function addTwoDays(date){
    date.setDate(date.getDate() + 2);
    return date;
}

addTwoDays(date);

console.log(date);