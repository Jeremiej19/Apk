var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

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



    var obj = document.createElement("img");
    
    var nr =  parseInt( Math.random() * ( trashes_list.length ) );
 
    
    obj.src = trashes_list[nr].img;
    obj.className = " trash";      
    var img_width =  trashes_list[nr].width;
    var img_height =  trashes_list[nr].height;
    
    var where =  parseInt( Math.random() * ( width - img_width ) );
    obj.style = `z-index:10; position: absolute; left: ${where}px; top: ${-img_height}px; width:${img_width}px; height:${img_height}px;`;
    
    obj.draggable = false;
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
              
                $('#board').html('<p id="end"> Koniec gry </p>');
            }

         }

        
    
    }); `);
    
        

    obj.onclick = function () {
 //       console.log("enemy");
       // this.parentElement.removeChild(this);

       delete_obj(this);
       $("#score").html(++score);
    };

    
    $("#board").append( obj );
    
}



$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");
    $("#scoreboard").css("width" , width + "px");
    $("#lives").html(lives);

    $("#board").append(`
    <div id="info">
    
        <h2>Informacje o grze</h2>
        <p>Nie pozwól żeby śmieci przedostały sie do oceanu! Klikaj śmieci myszką aby je zebrać.</p> 
        <p>Uważaj jednak aby nie złapać zwierząt!</p>
        <button onclick="spawn = setInterval( 'spawn_enemy();' , ${spawn_delay} );   $('#info').css('display','none');   "> START </button>
    
    </div>
    `);


  //  spawn = setInterval( "spawn_enemy();" , spawn_delay );
    

  
  });