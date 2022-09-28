"use strict";

var n, m;
n = 9;
m = 4;

function showNumber(firstN, secondN){
    alert("Значення змінної 'm': " + firstN);
    alert("Значення змінної 'n': " + secondN);
}

function showTask2(){
    showNumber(n, m);
    alert("Скопіюємо значення 'n' в змінну 'm'");
    m = n;
    showNumber(n, m);
}
