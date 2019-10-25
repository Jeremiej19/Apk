var img_size = 60;


var game2_imgs = [ 
{ img:'../data/imgs/Gra2_niebieski1.png', width: 107 , height: 114 ,bin: 2 },
{ img:'../data/imgs/Gra2_niebieski2.png', width: 102 , height: 101 ,bin: 2 },
{ img:'../data/imgs/Gra2_zielony1.png', width: 68  , height: 76 ,bin: 3 },
{ img:'../data/imgs/Gra2_zielony2.png', width: 67 , height: 79 ,bin: 3 },
{ img:'../data/imgs/Gra2_zielony3.png', width: 71  , height: 100 ,bin: 3 },
{ img:'../data/imgs/Gra2_zolty1.png', width: 97 , height: 98 ,bin: 1 },
{ img:'../data/imgs/Gra2_zolty2.png', width: 88  , height: 62 ,bin: 1 },
{ img:'../data/imgs/Gra2_zolty3.png', width: 68  , height: 78 ,bin: 1 },
{ img:'../data/imgs/Gra2_zolty4.png', width: 76  , height: 85 ,bin: 1 },


];

var game1_imgs = [
    
    { img:'../data/imgs/Gra1_3.png', width: 62*1.2 , height: 39*1.2  },
    { img:'../data/imgs/Gra1_1.png', width: 66*1.2  , height: 46*1.2  },
    { img:'../data/imgs/Gra1_2.png', width: 66*1.2  , height: 46*1.2  },    
    { img:'../data/imgs/Gra1_4.png', width: 72*1.2  , height: 52*1.2  },
    { img:'../data/imgs/Gra1_5.png', width: 85 , height: 50 },
    { img:'../data/imgs/Gra1_6.png', width: 111 , height: 68 },
    { img:'../data/imgs/Gra1_7.png', width: 124 , height: 72 },
    { img:'../data/imgs/Gra1_8.png', width: 180*0.8 , height: 108*0.8 },
    { img:'../data/imgs/Gra1_9.png', width: 98*0.8 , height: 84 *0.8, neutral:1 },
    { img:'../data/imgs/Gra1_10.png', width: 98 *0.8, height: 84*0.8, neutral:1 },

];
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = "0.4";
    this.sound.setAttribute('onended','delete_obj(this);');
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

