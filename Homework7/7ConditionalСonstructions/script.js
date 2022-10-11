"use strict";

function checkN(){
    var n = prompt("Введіть значення n: ");
    if(n > 0){
        ++n;
    } else if (n < 0) {
        n -= 2;
    } else n = 10;
    alert("n: " + n);
}

function getStatus(){
    var m = prompt("Введіть число для отримання його опису: ");
    if (m == 0) {
        alert("Нульове число");
    }
    else if (m > 0){
        if (m % 2 == 0) alert("Додатне парне число");
        else alert("Додатне непарне число");
    }
    else{
        if (m % 2 == 0) alert("Від’ємне парне число");
        else alert("Від’ємне непарне число");
    }
}

function getIndex(){
    var a = 3,b = 3, c = 2,d = 3, res;
    if (a = d){
        if (a = b){
            res = 3;
        }  
        else res = 2;
    }
    else if (a = b) {
        res = 4;
    } 
    else res = 1;
    alert("Число під індексом: " + res + " відрізняється");
}

function getRating(){
    var k = parseInt(prompt("Введіть оцінку цифрою"));
    switch (k) {
        case 1:
            alert("погано");
            break;
        case 2:
            alert("незадовільно");
            break;
        case 3:
            alert("задовільно");
            break;
        case 4:
            alert("добре");
            break;
        case 5:
            alert("відмінно");
            break;
        default:
            alert("Такої оцінки немає!")
    }
}
