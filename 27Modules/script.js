"use strict";

var rectInfo = (function () {
    var sideA;
    var sideB;
    function rectArea() {
        return sideA * sideB;
    }
    function rectPerimeter() {
        return (sideA + sideB) * 2;
    }
    function checkNumber (number){
        if(!Number(number) || number <= 0){
            console.log ("The variable must be a number and must be greater than zero");
            return;
        }
        else {
            return number;
        }
    }
    return {
       
        setSideA: function (number) {
            sideA = checkNumber(number);
        },
        setSideB: function (number) {
            sideB = checkNumber(number);
        },
        rectArea: function () {
            return rectArea();
        },
        rectPerimeter: function () {
            return rectPerimeter();
        }
    }
}());

rectInfo.setSideA(4);
rectInfo.setSideB(9);
console.log(rectInfo.rectArea());
console.log(rectInfo.rectPerimeter());

