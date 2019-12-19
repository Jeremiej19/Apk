var scoreboard_height = 20;

var width = 800;
var height = 600;
var spawn;

var spawn_delay = 1000;
var object_animation_duration = 4000;

var lives = 5;
var score = 0;



function delete_obj( obj )
{
    obj.parentElement.removeChild(obj);
}

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
        console.log( intervals.length );
        intervals.forEach(clearInterval);
        intervals = [];
        console.log( intervals.length );
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
    if( score == 5 )
    {
        clearInterval( spawn );
              
        $('#board').html(`
        <div id="info">
        
            <h2>Gratulacje</h2>
            <button onclick="spawn = setInterval( 'spawn_enemy();' , ${spawn_delay} );   $('#info').css('display','none'); "> Graj dalej </button>
            <button onclick="location.reload(); "> Dalej </button>
        
        </div>
        `);
    }
}

// function swing_left( obj , pos )
// {
//     console.log("l");
//     $(obj).animate({
//         left:  pos+40   + 'px'
//     }, { queue: false, duration: 2500  });
    
// }
// function swing_right( obj , pos )
// {
//     console.log("l");
//     $(obj).animate({
//         left:  pos-40   + 'px'
//     }, { queue: false, duration: 2500  });
    
// }

function moveToSide( obj , pos , distance )
{
    $(obj).animate({
        left:  pos+distance   + 'px'
    }, { queue: false, duration: 2500  });
}

var intervals = [];

function swing( obj , pos )
{
    var distance = 40;
    if( parseInt( Math.random() * 2 ) < 1 )
    {
        distance *= -1;
    }
    console.log(parseInt( Math.random() * 2 ));
    
    moveToSide( obj , pos , distance );
    setTimeout( () => {
        moveToSide( obj , pos , -distance );;
    }, 2500 ); 
    intervals.push( setInterval( function(){ moveToSide( obj , pos , -distance ); } , 5000 ));
    setTimeout( () => {
        intervals.push( setInterval( function(){ moveToSide( obj , pos , distance ); }, 5000 ) )
    }, 2500 );
    // swing_right( obj , pos );
    // setTimeout( () => {
    //     swing_left( obj , pos );
    // }, 2500 ); 
    // setInterval( function(){ swing_left( obj , pos ); } , 5000 );
    // setTimeout( () => {
    //     setInterval( function(){ swing_right( obj , pos ); }, 5000 )
    // }, 2500 );  

}
function difficulty( )
{
    if( score % 5 == 0 )
    {
        object_animation_duration *= 0.9;
        spawn_delay *= 0.9;
    }
}
function spawn_enemy( )
{



    var obj = document.createElement("img");

    
    
    var nr =  parseInt( Math.random() * ( game1_imgs.length ) );
 
    
    obj.src = game1_imgs[nr].img;
    obj.className = " trash";      
    var img_width =  game1_imgs[nr].width;
    var img_height =  game1_imgs[nr].height;
    
    // 40 - swing distance

    var where =  parseInt( Math.random() * ( width - img_width - 40*2) + 40 );
    obj.style = `z-index:10; position: absolute; left: ${where}px; top: ${-img_height}px; width:${img_width}px; height:${img_height}px;`;
    
    obj.draggable = false;
    obj.setAttribute("ondragstart","return false;");

    ///animacja
    obj.setAttribute("onload",`$(this).animate({
        top: ${ height } + 'px'
    }, { queue: false,  easing:'linear', duration: ${ object_animation_duration } , complete:

    ///nie klikniety
    function(){

        // console.log(this.parentElement);
         if( this.parentElement != null )
         {
            delete_obj(this);
            
            if( game1_imgs[${nr}].neutral == 1 )
            {
                $("#score").html(++score);
                // check_score(  );
                difficulty( );
            }
            else
            {
                minus_hp();
               
            }

            ///koniec gry
          
            koniec();
            

         }

        
    
    } },
      

     
);
    
    swing( this , ${where} );
     `);
    
        

    obj.onclick = function () {
 //       console.log("enemy");
       // this.parentElement.removeChild(this);

       delete_obj(this);
       if( game1_imgs[nr].neutral == 1 )
       {
           minus_hp();
       }
       else
       {
           $("#score").html(++score);
        //    check_score(  );
           difficulty( );
       }
       
        ///koniec gry

        koniec();
        
    };

    
    $("#board").append( obj );
    
}

function start( )
{
    spawn = setInterval( 'spawn_enemy();' , spawn_delay ); 
    //spawn_enemy();
    $('#info').css('display','none');  

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
        <button onclick="start(); "> START </button>
    
    </div>
    `);


  //  spawn = setInterval( "spawn_enemy();" , spawn_delay );
    

  
  });