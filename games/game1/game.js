var width = 800;
var height = 600;

var img_width = 25 ;

var objects = [];

function spawn_enemy( i )
{

    var where =  parseInt(Math.random() * (width - img_width ) );
    console.log(where);
    var obj = document.createElement("img");
    obj.style = `position: absolute; left: ${where}px; z-index:10;`;
    obj.src = "bullseye1.png";
    obj.onclick = function () {
        console.log("b");
        this.parentElement.removeChild(this);
    };
    obj.className = "trash";
    
    $("#board").append( obj );
    objects.push( obj );
    
}

function move_all()
{
    for( i in objects )
    {
        
    }
}

$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");

    var spawn = setInterval( "spawn_enemy();" , 500 );
    
    $("#board").click(function(){
        console.log("a");
 //       clearInterval( spawn );
      });
    
  
  });