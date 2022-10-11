"use strict"

//task 1
console.log("task 1");
var x = 3, n = 5;
function pow(x, n){
    return n!=0 ? x * pow(x, n - 1) : 1;
};
console.log(pow(x,n));

//task 2
console.log("task 2");
var arr = [10,3,2,8,3];
console.log(arr);
function minOfArrgs(){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
};
console.log( "Min value : " + minOfArrgs());

//task 3
console.log("task 3");
function sign(x){
    if (x < 0){
        return -1;
    }
    else if(x > 0){
        return 1;
    }
    else return 0;
}
console.log(sign(-20))

//task 4
console.log("task 4");
function calc(a,b,op){
    switch(op){
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}
console.log(calc(3, 5, 2))

//task 5
console.log("task 5");
function digitN(k, n){
    var i = 0, res = 0;
    if (k > n){
        while (k != 0 && i != n){
        i++;
        res = k % 10;
        k = parseInt(k / 10);
        } return res;
    }
    else return -1;
}
console.log(digitN(34572, 4));