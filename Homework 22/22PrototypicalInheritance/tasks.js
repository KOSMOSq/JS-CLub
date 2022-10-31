"use strict";

//task 1
console.group("Task 1")

function sqrt(value) {
    for (var i = 0; i <= value; i++) {
        if (i * i === value) 
            return i;
    }
    return "No correct value";
};

function Figure(x, y){
    this.__x = x;
    this.__y = y;
}

Figure.prototype.getX = function(){
    return this.__x;
}
Figure.prototype.setX = function(x){
    return this.__x = x;
}

Figure.prototype.getY = function(){
    return this.__y;
}
Figure.prototype.setY = function(y){
    return this.__y = y;
}
Figure.prototype.findCenterX = function (){
    return this.__x / 2;
}
Figure.prototype.findCenterY = function(){
    return this.__y / 2;
}

function Rectangle(x, y){
    Figure.call(this, x, y);
    this.__diagonal;
}

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.diagonal = function(){
    return this.__diagonal = sqrt((this.__x**2) + (this.__y**2));
}
Rectangle.prototype.info = function(){
    console.log("X : " + this.getX() + " Y : " + this.getY() + " Center of Rectangle X : " + this.findCenterX() + ", Y : "+  this.findCenterY() + " Diagonal : " + this.diagonal())
}

function Circle(x, y){
    Figure.call(this, x, y)
    this.__radius;
}

Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.radius = function(){
    return this.__radius = sqrt((this.__x**2) + (this.__y**2)) / 2;
}
Circle.prototype.info = function(){
    console.log("X : " + this.getX() + " Y : " + this.getY() + " Center of Circle X : " + this.findCenterX() + ", Y : " +  this.findCenterY() + " Radius : " + this.radius())
}

var rect = new Rectangle(4,3);
rect.info();

var circ = new Circle(3,4);
circ.info();

console.groupEnd();

//task2
console.group("Task 2");

function Square(a){
    this._a = a;  
}
Square.prototype.setA = function(a){
    this._a = a;
}
Square.prototype.getA = function(){
    return this._a;
}
Square.prototype.perimetr = function(){
    return this._a * 4;
}

function Cube(a){
    Square.call(this, a);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
Cube.prototype.perimetr = function(){
    return this._a * 12;
}
Cube.prototype.expPerimetr = function(){
    return Square.prototype.perimetr.call(this) * 3;
}

var sqr = new Square(2);
console.log("Perimet kvadarata : " + sqr.perimetr());

var cb = new Cube(2);
console.log("Perimetr kuba : "+ cb.perimetr());
console.log("Perimetr kuba 2 metod: " + cb.expPerimetr());

console.groupEnd();