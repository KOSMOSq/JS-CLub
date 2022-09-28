"use strict";

console.log("Task1");
var a = 20, b = 3, sum = 0, counter = 0;
while((sum + b) < a){
    sum += b;
    counter++;
    console.log(sum);
    console.log(counter);
}
console.log("res = " + (a - sum));

console.log("Task2");
var n = 3542;
while (n != 0){
    console.log(n % 10);
    n = parseInt(n / 10);
}

console.log("Task3");
var a = 2, b = 10, res = 0;
for(var i = a; i<=b; i++){
    res+=i;
    console.log(res);
}

console.log("Task4");
var n = 5, res = 1;
for(var i = 1; i <= n; i++){
    res *= i;
    console.log(res);
}

console.log("Task5")
var i = 0, sum = 0;
var arr = [];
while(n != null){
    var n = prompt("Заполнение массива");
    arr[i] = n;
    i++;
}
console.log(arr);
for(var i = 0; i<arr.length-1; i++){
    sum += parseInt(arr[i]);
}
console.log(sum);

console.log("Task6")
var a = 1, b = 10, res = 0;
for(var i = a; i<=b; i++){
    res = i;
    for(var j = 1; j<=i; j++){
        console.log(res)
    }
}