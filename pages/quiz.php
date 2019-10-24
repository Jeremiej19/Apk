<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../styles/main.css">
    <title>Document</title>
</head>
  <body>
 
    <div id="main">

        <div id="header">
          <h1 class="title">jakis naglowek ergo tytul</h1>

          <div id="nav">
            <ul id="menu">
              <a href="../index.html"><li>Strona główna</li></a>
              <a href="kurs_begin.html"><li>Instruktaż</li></a>
              <a href="games_list.html"><li>Gry i Quizy</li></a>
              <a href="ciekawostki.html"><li>Ciekawostki</li></a>
              <a href="authors.html"><li>O autorach</li></a>
            </ul>

          </div>
        </div>
       

        <div id="content">

              <?php
              
              //tu jest funkcja do wywoływania formularza
              function quiz($tabela, $rand){
                $test = $tabela[$rand];
                echo "<form action='' method='post'><br><p>$test[0]</p><br>";
                echo "<label><input type='radio' name='pytanie' value='1'>$test[1]</label><br>".
                "<label><input type='radio' name='pytanie' value='2'>$test[2]</label><br>".
                "<label><input type='radio' name='pytanie' value='3'>$test[3]</label><br>".
                "<input type='submit' value='dajesz' name='poszlo'>";
                

              }


              //pytania do qiuzu w notacji pytanie,opd1,odp2,dop3,poprwawnaodp
              $tabela=array(array("jeramiasz ma 12 lat?", "nie", "tak", "może", "1"),
              array("bartek to dzieciaczek bo nie ma 18?", "nie", "chyba w snach", "twoja stara sus", "2"),
              array("paweł ma prawojadzy?", "nie", "tak", "może", "2"),
              array("zdążymy na 25?", "nie", "tak", "może", "3"),
              array("czy ci sie odobało?", "nie", "tak", "może", "2"));
              if (!isset($_SESSION['i']) and !isset($_POST['start']))
              {
                 //tu jest poczatek
                echo "tu bedzie napisane zasady i wgl ze jest fajnie i jak nacisniesz start to magia bedzie<br>";
                echo "<form action='' method='post'><br><button type='submit' name='start' value='tak'>start</button><br></form><br>";
              }
              else{
                //tu nic nie zmieniaj
                if(!isset($_POST['next']) and !isset($_POST['pytanie'])and !isset($_POST['poszlo'])){
                  $_SESSION['j']=0;$_SESSION['i'] = 0; $_SESSION['points'] = 0;
                  $arr=array();
                  $_SESSION['last'] = $arr;
                  
                } 
                if($_SESSION['i'] < 4 and $_SESSION['j'] < 5)
                {
                  if (isset($_POST['hello'] )or isset($_POST['next']) or !isset($_POST['pytanie'])){
                    //--------------------------------TU QUIZ ODPALANY----------------------
                  do{
                    $test = rand(1,4);
                  }while(in_array($test, $_SESSION['last']));
                  quiz($tabela, $test);
                  array_push($_SESSION['last'], $test);
                  }
                  elseif(isset($_POST['pytanie']))
                  {//sprawdzanie odp
                    $_SESSION["i"]+=1;
                    $actual = $_SESSION['last'];
                    $jay = $_SESSION['j'];
                    if ($tabela[$actual[$jay]][4]==$_POST['pytanie'])
                    {
                      echo "super";
                      $_SESSION['points'] += 1;
                    }
                    else{
                      echo "zle, prawidłowa odp to";
                    }
                    //pojawienie buttona next
                    echo "<form action='' method='post'>";
                    echo "<button type='submit' name='next' value='tak'>next</button>";
                    echo "</form>";
                    $_SESSION['j']+= 1;
                    }
                    
                }else{
                  //koniec 
                  $punkty = $_SESSION['points'];
                  echo "Punkty: $punkty<br>";
                  unset($_SESSION['points']);
                  unset($_SESSION['i']);
                  unset($_SESSION['j']);
                  echo "<button type='submit' onclick='window.location.reload(true)'>Jeszcze raz</button>";
                }

              }
              ?>
          </form>

        </div>

        <div id="footer">
          <p class="center">Tu bedo copyrighty</p>
        </div>

    </div>
    
  </body>
</html>
