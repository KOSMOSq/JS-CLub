"use strict";

var calculator = {
    read : function (){
        this.a = Number(prompt("Введите А : ", ));
        this.b = Number(prompt("Введите Б : ", ));
    },
    sum : function (){
      return this.a + this.b;
    },
    mul : function (){
      return this.a * this.b;
    }
  };
  
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mul());
  