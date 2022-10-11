"use strict"

//task 1
console.log("task 1");
function safePerimeterSquare(){
    var a, b, arrFunct = [];
    arrFunct[0] = function(safeA, safeB){
        if(typeof(safeA) !== NaN && typeof(safeB) !== NaN && safeA > 0 && safeB > 0){
            a = safeA;
            b = safeB;
        } else return;
    }
    arrFunct[1] = function(){
        return (a + b) * 2;
    }
    arrFunct[2] = function(){
        return a + b;
    }
    return arrFunct;
}
var calc = safePerimeterSquare();
console.log(calc[0](2, 6));
console.log(calc[1]());
console.log(calc[2]());

//task 2
console.log("task 2");
function createArrayIterator(array) {
    var i = 0;
    return function (){
        return array[i++];
    }
 }
 
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined

//task 3
console.log("task 3");
var arr = [];
function createLocFunct(i){
    return function (){
        console.log(i)
    }
}
for (var i = 0; i <= 2; i++) {
   arr[i] = createLocFunct(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2