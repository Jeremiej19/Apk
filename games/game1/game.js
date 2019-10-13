var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

var img_size = 60;
var spawn_delay = 1000;
var object_animation_duration = 3000;

var lives = 5;
var score = 0;



function delete_obj( obj )
{
    obj.parentElement.removeChild(obj);
}

function spawn_enemy( )
{
    var where =  parseInt( Math.random() * ( width - img_size ) );
//    console.log(where);

    var obj = document.createElement("img");
    obj.style = `z-index:10; position: absolute; left: ${where}px; top: ${-img_size}px; width:${img_size}px; height:${img_size}px;`;
    obj.src = "./butelka.png";
    obj.draggable - false;
    obj.setAttribute("ondragstart","return false;");

    ///animacja
    obj.setAttribute("onload",`$(this).animate({
        top: ${ height } + 'px'
    }, ${ object_animation_duration },
     'linear' ,

     ///nie klikniety
     function(){

        // console.log(this.parentElement);
         if( this.parentElement != null )
         {
            delete_obj(this);
            
            $("#lives").html(--lives);

            ///koniec gry
            if( lives == 0 )
            {
                clearInterval( spawn );
              
                $('#board').html('<p> Koniec gry </p>');
            }

         }

        
    
    }); `);
    
        

    obj.onclick = function () {
 //       console.log("enemy");
       // this.parentElement.removeChild(this);

       delete_obj(this);
       $("#score").html(++score);
    };

    obj.className = "trash";
    
    $("#board").append( obj );
    
}



$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");
    $("#scoreboard").css("width" , width + "px");
    $("#lives").html(lives);

    spawn = setInterval( "spawn_enemy();" , spawn_delay );
    

  
  });