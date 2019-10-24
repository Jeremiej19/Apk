var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

var spawn_delay = 2000;
var object_animation_duration = 6000;

var lives = 5;
var score = 0;

var draged_item = null;



function minus_hp()
{
    new sound("../data/sound/wrong.mp3").play();
    --lives;
    document.getElementsByClassName("heart")[lives].style.visibility = "hidden";
}

function koniec()
{
    if( lives <= 0 )
    {
        clearInterval( spawn );
              
        $('#board').html(`
        <div id="info">
        
            <h2 style="margin-bottom: 60px;position:relative;top: 40px;">Koniec żyć</h2>
            <button onclick="location.reload(); "> Spróbuj ponownie </button>
        
        </div>
        `);
    }

    
}

function check_score(  )
{
    if( score == 20 )
    {
        clearInterval( spawn );
              
        $('#board').html(`
        <div id="info">
        
            <h2 style=" padding-top: 70px;">Gratulacje</h2>
            <button onclick="game_start();   $('#info').css('display','none');"> Kontynuuj grę </button>
            <form action="../../pages/kurs_5.html" target="_top" style="display: inline;">
            <button> Przejdź dalej </button>
            </form>
        </div>
        <div class="bin" id="1" style="float: left; position: absolute;bottom: 0; background: url('../data/imgs/Gra2_smietnik1.png');">
        </div>
        <div class="bin" id="2" style="position: absolute;bottom: 0; left: 33.3%; background: url('../data/imgs/Gra2_smietnik2.png');">
        </div>
        <div class="bin" id="3" style="position: absolute;bottom: 0; left: 66.6%; width: 33.4%; background: url('../data/imgs/Gra2_smietnik3.png');">
        </div>
        `);
    }
}

function delete_obj( obj )
{
    obj.parentElement.removeChild(obj);
}

function spawn_enemy( )
{


    var obj = document.createElement("img");

    
    var nr =  parseInt( Math.random() * ( game2_imgs.length ) );

    
    obj.src = game2_imgs[nr].img;
    obj.className = game2_imgs[nr].bin;
    obj.className += " trash";       
    
    var img_width = game2_imgs[nr].width;
    var img_height= game2_imgs[nr].height;
    obj.style = `z-index:10; position: absolute; left: ${ -img_width }px; top: ${parseInt(height/2.2)-img_height}px; width:${img_width}px; height:${img_height}px;`;

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
            
            minus_hp();

            ///koniec gry
            koniec();

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
                    check_score(  );
                }
            else
            {
                minus_hp();
                koniec();
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
        <p>Zdobądź 20 aby przejść dalej.</p>
        <button onclick="game_start();   $('#info').css('display','none');   "> START </button>
    
    </div>
    `);
  
  });
