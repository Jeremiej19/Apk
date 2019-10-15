var img_size = 60;


var trashes_list = [{ img:'../data/imgs/butelka.png', size: img_size , bin: 1} ,
{ img:'../data/imgs/Pudelko.png', size: img_size, bin:2} ,

];
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

var mySound = new sound("../data/sound/uh.mp3");