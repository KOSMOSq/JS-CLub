"use strict";

//Task 1 
console.log("Task 1");

function Mp3 (volume){
    this.__volume = volume;
    this.__minVolume = 0;
    this.__maxVolume = 100;
};

Mp3.prototype.getVolume = function (){
    console.log(this.__volume);
    return this.__volume;
};

Mp3.prototype.setVolume = function (volume){
    if(volume >= this.__minVolume && volume <= this.__maxVolume){
        this.__volume = volume;
    }else return this.__volume;
};
Mp3.prototype.volume = function (volume){
    if(volume === undefined){
        console.log(this.__volume);
        return this.__volume
    }else if(volume >= this.__minVolume && volume <= this.__maxVolume){
        return this.__volume = volume;
    }else {
        return this.__volume;
    }
};
var mp3 = new Mp3(10);

mp3.getVolume();
mp3.setVolume(20);
mp3.getVolume();
mp3.setVolume(400);
mp3.getVolume();
mp3.setVolume(-10);
mp3.volume(40);
mp3.volume();
mp3.volume(-100);
mp3.volume();
mp3.volume(10);
mp3.volume();

//Task 2
console.log("Task 2");

function Adder(firstNumber, secondNumber){
    this.__firstNumber = firstNumber;
    this.__secondNumber = secondNumber;
    this.result;
}

Adder.prototype.__calc = function (){
    this.result = (this.__firstNumber + this.__secondNumber);
    console.log("Result of adder: " + this.result);
    return this.result;
};

Adder.prototype.number = function (firstNumber, secondNumber){
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        this.__firstNumber = firstNumber;
        this.__secondNumber = secondNumber;
    }else if(!isNaN(firstNumber)){
        this.__firstNumber = firstNumber;
    }else if(!isNaN(secondNumber)){
        this.__secondNumber = secondNumber;
    }else {
        console.log(this.__firstNumber);
        console.log(this.__secondNumber);
        return;
    }
    this.__calc();
    
};

var adder = new Adder(10, 2);

adder.number(13, "f");
adder.number();
adder.number("c", -10);
adder.number();



