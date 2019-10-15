var img_size = 60;


var trashes_list = [{ img:'../data/imgs/Pudelko.png', width: 60 , height: 60, bin: 1} ,
{ img:'../data/imgs/butelka2.png', width: 70*0.8 , height: 120*0.7, bin:2} ,
{ img:'../data/imgs/Butelka_plst.png', width: 70*0.7, height: 120*0.7, bin:3} ,

];
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = "0.5";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

var mySound = new sound("../data/sound/uh.mp3");