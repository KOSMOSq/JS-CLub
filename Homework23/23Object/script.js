"use strict";

function Rectangle(x1, y1, x2, y2){
    this._x1 = this._number(x1);
    this._y1 = this._number(y1);
    this._x2 = this._number(x2);
    this._y2 = this._number(y2);
}

Rectangle.prototype.setTopLeft = function(x1,y1){
    this._x1 = this._number(x1);
    this._y1 = this._number(y1);
}
Rectangle.prototype.getTopLeft = function(){
    return [this._x1, this._y1];
}
Rectangle.prototype.setBottomRight = function(x2,y2){
    this._x2 = this._number(x2);
    this._y2 = this._number(y2);
}
Rectangle.prototype.getBottomRight = function(){
    return [this._x2, this._y2];
}
Rectangle.prototype.toSring = function(){
    return "Top left X and Y: " + this.getTopLeft() + " Bottom right X and Y: " +  this.getBottomRight();
}
Rectangle.prototype.valueOf = function(){
    if(this._y1 > this._y2 && this._x1 > this._x2){
        return 2 * ((this._x1 - this._x2) + (this._y1 - this._y2));
    }
    else if(this._y1 < this._y2 && this._x1 > this._x2){
        return 2 * ((this._x1 - this._x2) + (this._y2 - this._y1));
    }
    else if(this._y1 > this._y2 && this._x1 < this._x2){
        return 2 * ((this._x2 - this._x1) + (this._y1 - this._y2));
    }else{
        return 2 * ((this._x2 - this._x1) + (this._y2 - this._y1));
    }
}
Rectangle.prototype._number = function(number){
    if(typeof number !== "number" || number < 1){
        return "Wrong number!";
    }
    else return number;
}

var rect = new Rectangle(10,2,6,4);

console.log(rect.toSring());
console.log(rect.valueOf());