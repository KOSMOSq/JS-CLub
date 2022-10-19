"use strict";

//Task 1
console.log("Task 1");
var user = {
    name: "Cris",
    surname: "Simons",
};
console.log(user);
user.name = "Brain";
console.log(user);
delete user.name;
console.log(user);

//Task 2
console.log("Task 2");
function carRun(){
    console.log(this.model + " їде зі швидкістю " + this.speed);
};
function carStop(){
    console.log(this.model + " зупинилася");
};
var car = {};
car.model = "Mercedes-Benz C63 AMG";
car.speed = 250;
car.run = carRun;
car.stop = carStop;

var scndCar = {};
scndCar["model"] = "Ram TRX";
scndCar["speed"] = 190;
scndCar["run"] = carRun;
scndCar["stop"] = carStop;

var thrdCar = {
    model: "Tesla Model S",
    speed: 321,
    run: carRun,
    stop: carStop,
};

console.log(car);
car.run();
car.stop();
console.log(scndCar);
scndCar["run"]();
scndCar["stop"]();
console.log(thrdCar);
thrdCar.run();
thrdCar.stop();

//Task 3
console.log("Task 3");
var tv = {
    currentChannel: 1,
    nextChannel: function (){
        if(this.currentChannel >= 9999){
            this.currentChannel = 1;
        }
        else this.currentChannel++;
    },
    previousChannel: function (){
        if(this.currentChannel <= 1){
            this.currentChannel = 1;
        }
        else this.currentChannel--;
        
    },
    setChannel: function (number){
        if(number <= 1 || number >= 9999){
            this.currentChannel = 1;
        } else this.currentChannel = number;
    },
};

console.log(tv.currentChannel);
tv.nextChannel();
console.log(tv.currentChannel);
tv.setChannel(4125235);
console.log(tv.currentChannel);
tv.setChannel(30);
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);

//Task 4
console.log("Task 4");

var mp3 = {
    currentSong : 1,
    amountSong : 4,
    volume : 10,
    muted : false,
    songList: {
        1 : "Sting - Shape of My Heart",
        2 : "Lil Yachty - Poland",
        3 : "Lil Morty - 4l",
        4 : "Shadowax - Неизвестная композиция"
    },
    displaySong : function (){
        console.log(this.songList[this.currentSong]);
    },
    nextSong : function (){
        if(this.currentSong >= this.amountSong){
            this.currentSong = 1;
        } 
        else this.currentSong++;
        this.displaySong();
    },
    previousSong : function (){
        if(this.currentSong <= 1){
            this.currentSong = this.amountSong;
        } 
        else this.currentSong--;
        this.displaySong();
    },
    getVolume : function (){
        console.log(this.volume);
    },
    addVolume : function (){
        if(this.volume >= 100){
            this.volume = 100;
        }
        else this.volume +=10;
        console.log(this.volume);
    },
    reduceVolume : function (){
        if(this.volume <=0){
            this.volume = 0;
        }
        else this.volume -=10;
        console.log(this.volume);
    },
    setVolume : function (number){
        if(number <= 100 && number >= 0){
            this.volume = number;
        }
        console.log(this.volume);
    },
    muteVolume : function (){
        if(this.muted==false){
            console.log("Muted")
            this.muted = true;
            this.volume = 0;
        }
        else {
            console.log("Unmuted")
            this.muted = false;
            this.volume = 50;
        }
        this.getVolume();
    }
};
mp3.displaySong();
mp3.nextSong();
mp3.previousSong();
mp3.previousSong();
mp3.nextSong();
mp3.getVolume();
mp3.muteVolume();
mp3.muteVolume();
mp3.previousSong();
mp3.reduceVolume();
mp3.addVolume();
mp3.setVolume(90);

//Task 5
console.log("Task 5");

var frstPersonInfo = {
    name: "John",
    age: 28,
    knowledge: {
        experience: 1,
        languages: ["Java","JavaScript", "SQL"]
    }
}

var scndPersonInfo = {
    name: "Bill",
    age: 30,
    knowledge: {
        experience: 5,
        languages: ["HTML","CSS","JavaScript"]
    }
}

var thrdPersonInfo = {
    name: "Mike",
    age: 32,
    knowledge: {
        experience: 4,
        languages: ["Python","SQL"]
    }
}
console.log(frstPersonInfo);
console.log(scndPersonInfo);
console.log(thrdPersonInfo);

//Task 6
console.log("Task 6");
var salaries = {
    John: 100,
    Bill: 300
};
function isEmpty(obj){
    var flag = 0;
    for (var prop in obj) {
        if(obj[prop] != undefined || prop != undefined){
            flag++;
        }
    }
    if(flag === 0){
        return true;
    }
    else return false;
}
console.log(isEmpty(salaries));

//Task 7
console.log("Task 7");
function getAvg(obj){
    var avg = 0;
    for (var prop in obj) {
        avg += obj[prop];
    }
    console.log(avg);
}
var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};
getAvg(salaries);
var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};
getAvg(salaries);
