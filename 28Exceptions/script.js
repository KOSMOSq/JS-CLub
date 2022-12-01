"use strict";

function sumSliceArray(arr, first, second){
    if(first > arr.length || second > arr.length){
        throw new Error("The selected position are larger than the size of the array");
    } else if(first <= 0 || second <= 0){
        throw new Error("Selected positions are negative or smaller than the size of the array")
    } else if(!Number(first) || !Number(second)){
        throw new Error("The selected position are not numbers")
    }
    return arr[first - 1] + arr[second - 1];
}

try {
    console.log("try");
    var arr = [2,4,6,2,1];
    var first = 5;
    var second = 4;
    if(Number(first) <= arr.length && Number(first) > 0 && Number(second) <= arr.length && Number(second) > 0){
        console.log(sumSliceArray(arr, first, second));
    } else {
        throw new Error("Something went wrong");
    }
} catch (error) {
    console.log("catch");
    console.log(error.stack);
} finally {
    console.log("finally");
}