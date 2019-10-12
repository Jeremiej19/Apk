var width = 800;
var height = 600;

var objects = [];

function spawn_enemy( i )
{

    var where =  parseInt(Math.random() * width );
    console.log(where);
    var object = document.createElement("img");
    object.style = `position: absolute; left: ${where}px;`;
    object.src = "bullseye1.png";
    object.className = "trash";
    
    $("#board").append( object );
    objects.push( object );
    
}

$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");
    $("#board").click(function(){
        console.log("a");
      });
    setInterval( "spawn_enemy();" , 1000 )
  
  });