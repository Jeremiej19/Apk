var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

var spawn_delay = 2000;
var object_animation_duration = 6000;

var lives = 5;
var score = 0;

var draged_item = null;





function delete_obj( obj )
{
    obj.parentElement.removeChild(obj);
}

function spawn_enemy( )
{


    var obj = document.createElement("img");

    
    var nr =  parseInt( Math.random() * ( trashes_list.length ) );

    
    obj.src = trashes_list[nr].img;
    obj.className = trashes_list[nr].bin;
    obj.className += " trash";       
    
    var img_width = trashes_list[nr].width;
    var img_height= trashes_list[nr].height;
    obj.style = `z-index:10; position: absolute; left: ${ -img_width }px; top: ${parseInt(height/2)-img_height}px; width:${img_width}px; height:${img_height}px;`;

    obj.draggable = true;

    obj.ondragstart = function()
    {
        draged_item = this;
        setTimeout(() => (this.style.display = 'none'), 0);
      //  console.log(event.currentTarget);
    };
    obj.ondragend = function()
    {
        if( draged_item != null )
        {
            draged_item.style.display = 'block';
            draged_item = null;
        }

    };


    ///animacja
    obj.setAttribute("onload",`$(this).animate({
        left: ${ width } + 'px'
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
              
                $('#board').html('<p onclick="window.location.reload(true);"> Koniec gry </p>');
            }

         }

        
    
    }); `);
    

    $("#board").append( obj );
    
}

function game_start()
{
    spawn_enemy( );
    spawn = setInterval( "spawn_enemy();" , spawn_delay );

    let bins = document.querySelectorAll('.bin');
    
    for( var i = 0 ; i < bins.length ; i++ )
    {
        var bin = bins[i];
        bin.addEventListener('dragover', e => {
            e.preventDefault();
        });
        bin.addEventListener('dragenter', e => {
            e.preventDefault();
        });
        bin.addEventListener('drop', function(e) {
            e.preventDefault();
            if( this.id == draged_item.className[0] )
                {
                    $("#score").html(++score);
                    delete_obj(draged_item);
                    draged_item = null;
                }
            else
            {
                new sound("../data/sound/wrong.mp3").play();
                $("#lives").html(--lives);
                if( lives == 0 )
                {
                clearInterval( spawn );
              
                $('#board').html('<p id="end" onclick="window.location.reload(true);"> Koniec gry </p>');
                }
            }
        });
    }
}


$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");
    $("#scoreboard").css("width" , width + "px");
    $("#lives").html(lives);


    $("#board").append(`
    <div id="info">
    
        <h2>Informacje o grze</h2>
        <p>Posegreguj śmieci do odpowiednich koszy</p> 
        <!--<p>Uważaj jednak aby nie złapać zwierząt!</p>-->
        <button onclick="game_start();   $('#info').css('display','none');   "> START </button>
    
    </div>
    `);
  
  });
