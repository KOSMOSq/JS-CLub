"use strict";

function getArray(){
    var arr = [];
    arr[0] = 21;
    arr[1] = "Ben";
    arr[2] = true;
    arr[3] = null;
    alert("Розмір масиву: " + arr.length);
    arr[4] = prompt("Введіть значення для 5-го елементу");
    alert("5-й елемент массиву: " + arr[4]);
}
