"use strict";

function SongList(frstSong, scndSong, thrdSong, frthSong){
    this.frstSong = frstSong;
    this.scndSong = scndSong;
    this.thrdSong = thrdSong;
    this.frthSong = frthSong;
};

function Mp3(amountSong, song){
    
    this.amountSong = amountSong;
    this.songList = song;
    this.volume = 10;
    this.currentSong = 1;
    this.muted = false;
    this.maxVolume = 100;
    this.minVolume = 0;
    this.stepVolume = 10;
};

Mp3.prototype.displaySong = function (){
    var check = 0;
    for(var currentSong in this.songList){
        check++;
        if(check == this.currentSong){
            console.log(this.songList[currentSong]);
        }

    }
};
Mp3.prototype.nextSong = function (){
    if(this.currentSong >= this.amountSong){
        this.currentSong = 1;
    } 
    else this.currentSong++;
    this.displaySong();
};
Mp3.prototype.previousSong = function (){
    if(this.currentSong <= 1){
        this.currentSong = this.amountSong;
    } 
    else this.currentSong--;
    this.displaySong();
};
Mp3.prototype.getVolume = function (){
    console.log(this.volume);
};
Mp3.prototype.addVolume = function (){
    if(this.volume >= this.maxVolume){
        this.volume = this.maxVolume;
    }
    else this.volume += this.stepVolume;
    console.log(this.volume);
};
Mp3.prototype.reduceVolume = function (){
    if(this.volume <=this.minVolume){
        this.volume = this.minVolume;
    }
    else this.volume -= this.stepVolume;
    console.log(this.volume);
};
Mp3.prototype.setVolume = function (number){
    if(number <= this.maxVolume && number >= this.minVolume){
        this.volume = number;
    }
    console.log(this.volume);
};
Mp3.prototype.muteVolume = function (){
    if(this.muted==false){
        console.log("Muted")
        this.muted = true;
        this.volume = this.minVolume;
    }
    else {
        console.log("Unmuted")
        this.muted = false;
        this.volume = this.maxVolume / 2;
    }
    this.getVolume();

};
var song = new SongList("Sting - Shape of My Heart", "Lil Yachty - Poland", "Lil Morty - 4l", "Shadowax - Неизвестная композиция");
var mp3 = new Mp3(4, song);
console.log(mp3);
console.log(song);
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