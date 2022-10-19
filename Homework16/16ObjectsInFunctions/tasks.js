"use strict";

//Task 1
console.log("Task 1")
function createSongList(frstSong, scndSong, thrdSong, frthSong){
    return {
        1 : frstSong,
        2 : scndSong,
        3 : thrdSong,
        4 : frthSong
    }
};
function createMp3(currentSong, amountSong, volume, muted, createSongList){
    return {
        currentSong : currentSong,
        amountSong : amountSong,
        volume : volume,
        muted : muted,
        songList: createSongList,
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
    }
};

var mp3 = createMp3(1,4,10,false, createSongList("Sting - Shape of My Heart", "Lil Yachty - Poland", "Lil Morty - 4l", "Shadowax - Неизвестная композиция"));
console.log(mp3);
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

//Task 2
console.log("Task 2")
function getMax(obj){
    var max = 0;
    for(var prop in obj) {
        if (max < obj[prop]) {
            max = obj[prop]
        }
    }
    console.log(max);
    return max;
}
var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250,
};
getMax(salaries);
var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};
getMax(salaries);
