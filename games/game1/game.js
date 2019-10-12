var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

var img_size = 132;
var spawn_delay = 1000;
var object_animation_duration = 3000;

var lives = 10;
var score = 0;


var objects = [];

function delete_obj( obj )
{
    obj.parentElement.removeChild(obj);
}

function spawn_enemy( i )
{

    var where =  parseInt( Math.random() * ( width - img_size ) );
//    console.log(where);
    var obj = document.createElement("img");
    obj.style = `z-index:10; position: absolute; left: ${where}px; top:${scoreboard_height}px;`;
    obj.src = "./butelka.png";
    obj.draggable - false;

//animacja
    obj.setAttribute("onload",`$(this).animate({
        top: ${ scoreboard_height + height - parseInt(img_size/2)} + 'px'
    }, ${object_animation_duration},
     'linear' ,

     function(){
        // console.log(this.parentElement);
         if( this.parentElement != null)
         {
            delete_obj(this);
            
            $("#lives").html(--lives);
            console.log(lives);

            if( lives == 0 )
            {
                clearInterval( spawn );
              
                $('#board').html('<p> Koniec gry </p>');
            }

         }

        
    
    }); `);
    ///nie klikniety
        

    obj.onclick = function () {
 //       console.log("enemy");
       // this.parentElement.removeChild(this);

       delete_obj(this);
       $("#score").html(++score);
    };

    obj.className = "trash";
    
    $("#board").append( obj );
    objects.push([ obj, 0 ]);
    
}



$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");

    spawn = setInterval( "spawn_enemy();" , spawn_delay );
    
    $("#board").click(function(){
 //       console.log("board");
 //       clearInterval( spawn );
      });
    
  
  });