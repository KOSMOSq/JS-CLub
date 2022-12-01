"use strict";

//task 1
console.groupCollapsed("Task 1");

var arr = ["JavaScript", "Python"];
console.log(arr);

arr.push("Java");
console.log(arr);

arr.splice(arr.length-2, 1, "Kotlin")
console.log(arr);

console.log(arr.splice(0, 1));
console.log(arr);

arr.unshift("Basic", "Pascal",);
console.log(arr);

console.groupEnd();

//task 2
console.groupCollapsed("Task 2");

Array.prototype.sortDesc = function(){
    this.sort(function(a,b){
        return b - a;
    })
}
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]
console.dir(Array);

console.groupEnd();

//task 3
console.groupCollapsed("Task 3");


function deleteEvenNumbers(arr) {
    var newI = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            arr[newI] = arr[i];
            newI++;
        }
    }
    return arr.splice(0, newI);
}
 var arr = [1, 2, 3, 4, 5];
 var arr = deleteEvenNumbers(arr);
 console.log(arr); // [1, 3, 5]


console.groupEnd();


//task 4
console.groupCollapsed("Task 4");

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];

var i = -1;
console.log(arr.map(function (value){
    i++;
    return arrLength[i] = "<li>" + value + "</li>";
}));
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]

console.groupEnd();

//task 5
console.group("Task 5");


var matrix = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
function matrixToArray(matrix){
    var arr1 = matrix.reduce(function (prev, item){
        return prev.concat(item);
    });

    return arr1;
}

 var arr1 = matrixToArray(matrix);
 console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.groupEnd();