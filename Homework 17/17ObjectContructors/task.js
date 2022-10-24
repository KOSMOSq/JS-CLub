"use strict";

function SongList(frstSong, scndSong, thrdSong, frthSong){
    this.frstSong = frstSong;
    this.scndSong = scndSong;
    this.thrdSong = thrdSong;
    this.frthSong = frthSong;
};

function Mp3(currentSong, amountSong, volume, muted, song){
    this.currentSong = currentSong;
    this.amountSong = amountSong;
    this.volume = volume;
    this.muted = muted;
    this.songList = song;
    this.displaySong = function (){
        var check = 0;
        for(var currentSong in this.songList){
            check++;
            if(check == this.currentSong){
                console.log(this.songList[currentSong]);
            }

        }
    };
    this.nextSong = function (){
        if(this.currentSong >= this.amountSong){
            this.currentSong = 1;
        } 
        else this.currentSong++;
        this.displaySong();
    };
    this.previousSong = function (){
        if(this.currentSong <= 1){
            this.currentSong = this.amountSong;
        } 
        else this.currentSong--;
        this.displaySong();
    };
    this.getVolume = function (){
        console.log(this.volume);
    };
    this.addVolume = function (){
        if(this.volume >= 100){
            this.volume = 100;
        }
        else this.volume +=10;
        console.log(this.volume);
    };
    this.reduceVolume = function (){
        if(this.volume <=0){
            this.volume = 0;
        }
        else this.volume -=10;
        console.log(this.volume);
    };
    this.setVolume = function (number){
        if(number <= 100 && number >= 0){
            this.volume = number;
        }
        console.log(this.volume);
    };
    this.muteVolume = function (){
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
    
    };
};
var song = new SongList("Sting - Shape of My Heart", "Lil Yachty - Poland", "Lil Morty - 4l", "Shadowax - Неизвестная композиция");
var mp3 = new Mp3(1,4,10,false, song);
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