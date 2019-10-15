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
//    console.log(where);

    var obj = document.createElement("img");

    
    var nr =  parseInt( Math.random() * ( trashes_list.length ) );
    console.log( nr );
    
    obj.src = trashes_list[nr].img;
    obj.className = trashes_list[nr].bin;
    obj.className += " trash";       
    var img_size = trashes_list[nr].size;
    obj.style = `z-index:10; position: absolute; left: ${ -img_size }px; top: ${parseInt(height/2)-img_size}px; width:${img_size}px; height:${img_size}px;`;

    obj.draggable - true;

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



$(document).ready(function(){

    $("#board").css("width" , width + "px");
    $("#board").css("height" , height + "px");
    $("#scoreboard").css("width" , width + "px");
    $("#lives").html(lives);

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
        bin.addEventListener('drop', function() {
            if( this.id == draged_item.className[0] )
                {
                    $("#score").html(++score);
                    delete_obj(draged_item);
                    draged_item = null;
                }
            else
            {
                $("#lives").html(--lives);
                if( lives == 0 )
                {
                clearInterval( spawn );
              
                $('#board').html('<p onclick="window.location.reload(true);"> Koniec gry </p>');
                }
            }
        });
    }
  
  });
