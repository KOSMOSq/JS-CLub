"use strict";

// Task 1 
function getArea(){
    var s = prompt("Вкажіть сторону квадрата, щоб дізнатися його площу")
    alert("Площа квадрату: " + s * s)
}

// Task 2
function getNum(){
    var n = prompt("Вкажіть двозначне число: ")
    alert("Десятки: " + parseInt(n/10) + "\nОдиниці: " + parseInt(n%10));
}

// Task 3
function getCompareTwo(){
    var a = prompt("Введіть перше ціле число ")
    var b = prompt("Введіть друге ціле число ")
    alert(a > 2 && b <=3);
}

// Task 4
function getCompareThree(){
    var c = 0.1;
    var d = 0.2;
    var e = 0.3;
    alert((c<d)&&(d<e))
}

// Task 5
function getStat(){
    var m = prompt("Введіть значення яке бажаєте перевірити");
    alert(m >= 100 && m < 1000 && m % 2 != 0);
}
