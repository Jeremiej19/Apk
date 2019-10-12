var width = 800;
var height = 600;

var img_width = 25 ;
var game_speed = 500;

var objects = [];


function spawn_enemy( i )
{

    var where =  parseInt(Math.random() * (width - img_width ) );
    console.log(where);
    var obj = document.createElement("img");
    obj.style = `z-index:10; position: absolute; left: ${where}px;`;
    obj.src = "bullseye1.png";


    // obj.setAttribute("onmouseover",`$(this).animate({
    //     left: 100 + 'px',
    //     top: 32 + 'px'
    // }, 400); `);

    obj.onclick = function () {
        console.log("b");
        this.parentElement.removeChild(this);
    };

    obj.className = "trash";
    
    $("#board").append( obj );
    objects.push([ obj, 0 ]);
    
}



$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");

    var spawn = setInterval( "spawn_enemy();" , game_speed );
    
    $("#board").click(function(){
        console.log("a");
 //       clearInterval( spawn );
      });
    
  
  });