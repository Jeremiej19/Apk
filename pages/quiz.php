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
    <style>
      input{
        margin-left:15px;
        margin-right:15px;
      }
      </style>
</head>
  <body>
 
    <div id="main">

        <div id="header">
          <h1 class="title">jakis naglowek ergo tytul</h1>

          <div id="nav">
            <ul id="menu">
              <a href="../raload/index.php"><li>Strona główna</li></a>
              <a href="../raload/kurs.php"><li>Instruktaż</li></a>
              <a href="../raload/games.php"><li>Gry i Quizy</li></a>
              <a href="../raload/autors.php"><li>O autorach</li></a>
            </ul>

          </div>
        </div>
       

        <div id="content">

              <?php
              
              //tu jest funkcja do wywoływania formularza
              function quiz($tabela, $rand){
                $test = $tabela[$rand];
                $ile = count($test);
                echo "<form action='' method='post'><br><h3>$test[0]</h3><br>";
                echo "<label><input type='radio' name='pytanie' value='1'>$test[1]</label><br><br>".
                "<label><input type='radio' name='pytanie' value='2'>$test[2]</label><br><br>";
                if ($ile>4){
                  echo"<label><input type='radio' name='pytanie' value='3'>$test[3]</label><br><br>";}
                if($ile>5){echo"<label><input type='radio' name='pytanie' value='4'>$test[4]</label><br><br>";}
                echo "<button type='submit' value='spr' name='poszlo'>Sprawdź</button>";
                

              }


              //pytania do qiuzu w notacji pytanie,opd1,odp2,dop3,poprwawnaodp
              $tabela=array(array("Który z tych przedmiotów wrzucisz do pojemnika koloru zielonego?", "Gazeta", "Butelka", "Puszka", "Lustro", "3"),
              array("Który z tych przedmiotów wrzucisz do pojemnika koloru zielonego?", "Gazeta", "Butelka", "Puszka", "Lustro", "2"),
              array("Odpady biodegradowalne to:", "uboczne produkty działalności gospodarczej i procesów produkcyjnych. ", "odpady, które powstają w gospodarstwach domowych", "odpady, które ulegają rozkładowi pod wpływem działania mikroorganizmów i nie stanowią zagrożenia dla środowiska naturalnego", "odpady, które ze względu na swoje pochodzenie, skład i właściwości (żrące, drażniące, toksyczne, wybuchowe) stanowią zagrożenie dla życia lub zdrowia oraz negatywnie wpływają na środowisko", "3"),
              array("Recykling to:", "niszczenie odpadów w sposób bezpieczny dla środowiska"," segregowanie śmieci ze względu na materiał, z którego są wykonane","ponowne wykorzystanie materiałów lub substancji z odpadów do wytworzenia nowych produktów","naprawiania zepsutych urządzeń i przedmiotów codziennego użytku i ponowne ich użytkowanie", "3"),
              array("Co należy zrobić ze zużytymi bateriami?","wyrzuca się je do kosza na śmieci","trzeba je wyrzucić do specjalnych pojemników","najlepiej zakopać je w ziemi","wyrzuca się je do pojemnika na plastik lub puszki", "2"),
              array("Co oznacza symbol złożony z trzech strzałek ułożonych w kształcie trójkąta","opakowanie nadaje się do recyklingu","opakowanie jest biodegradowalne","opakowanie nadaje się do spożycia","opakowanie nadaje się do ponownego użytku","1"),
              array("Który z podanych przedmiotów jest przedmiotem wielokrotnego użytku?","reklamówka foliowa","lniana torba","plastikowe sztućce","plastikowy kubek","2"),
              array("Organizacją ekologiczną posiadającą pandę w swoim logo jest:","GREENPEACE","World Wide Found for Nature (WWF)","Międzynarodowy Zielony Krzyż","Liga Ochrony Przyrody","2"),
              array("Kiedy odbywa się coroczna Akcja Sprzątanie Świata Polska","pierwszy tydzień czerwca ","drugi tydzień września","trzeci tydzień września","drugi tydzień kwietnia","3"),
              array("Czy z plastikowych butelek można uszyć ubrania?","tak","nie","1"),
              array("Czy paragony nadają się do ponownego przetworzenia?","tak","nie","2"),
              array("Na którym oceanie znajduje się największa wyspa śmieci?","Atlantyckim","Arktycznym","Indyjskim","Spokojnym","4"),
              array("Po jakim czasie rozłoży się plastikowa butelka?","5 lat","300 lat","6 miesięcy","500 lat","4"),
              array("Odpadem niebezpiecznym nie jest/nie są:","reklamówka foliowa","środki pirotechniczne","tusz","farba","1"),
              array("Który z podanych odpadów jest największym zagrożeniem dla zwierząt żyjących w oceanie?","tekturowe opakowanie","foliowa reklamówka","puszka po konserwie","stare sieci rybackie","2"),
              array( "Jaki kolor pojemnika przeznaczony jest na odpady szklane?","niebieski","zielony","żółty","czarny","2"),
              array("Czy skoszona trawa, liście i resztki jedzenia będą dobrym składnikiem kompostu?","tak","nie","1"),
              array("Do jakiego pojemnika wrzucisz potłuczone talerze i kubki?","na szkło","na papier","na metal","na odpady zmieszane","4"),
              array("Co oznacza liczba w środku znaku recyklingu, którym oznacza się produkty nadające się do przetworzenia?","numer seryjny produktu","datę przydatności do spożycia","kod użytego materiału","cenę","3"),
              array("Czego nie wolno ci zrobić ze starym urządzeniem elektronicznym?","sprzedać","oddać do punktu skupu","pozostawić w lesie","oddać na cele dobroczynne","3"),
              array("Ile kilogramów śmieci rocznie wytwarza statystyczny Polak?","85kg","135kg","460kg","320kg","4"));
              if (!isset($_SESSION['i']) and !isset($_POST['start']))
              {
                 //tu jest poczatek
                echo "<h2>Quiz</h2><br>";
                echo "<h4>10 losowych pytań, za każdą poprawną odpowiedź dostajesz 1 punkt. </h4><br>";
                echo "<form action='' method='post'><br><button type='submit' name='start' value='tak'>Start</button><br></form><br>";
              }
              else{
                //tu nic nie zmieniaj
                if(!isset($_POST['next']) and !isset($_POST['pytanie'])and !isset($_POST['poszlo'])){
                  $_SESSION['j']=0;$_SESSION['i'] = 0; $_SESSION['points'] = 0;
                  $arr=array();
                  $_SESSION['last'] = $arr;
                  $_SESSION['ran'] = rand(1,(count($tabela)-1));
                } 
                if($_SESSION['j'] < 10)
                {
                  if (isset($_POST['hello'] )or isset($_POST['next']) or !isset($_POST['pytanie'])){
                    //--------------------------------TU QUIZ ODPALANY----------------------
                  $test = $_SESSION['ran'];

                  quiz($tabela, $test);
                  }

                  elseif(isset($_POST['pytanie']))
                  {//sprawdzanie odp / new random
                    $test = $_SESSION['ran'];
                    array_push($_SESSION['last'], $test);
                    if($_SESSION['j'] < 9){
                      do{
                        $test = rand(1,(count($tabela)-1));
                      }while(in_array($test, $_SESSION['last']));
                      $_SESSION['ran'] = $test;
                    }


                    $_SESSION["i"]+=1;
                    $actual = $_SESSION['last'];
                    $jay = $_SESSION['j'];
                    $eil = count($tabela[$actual[$jay]]);
                    $elia = $eil-1;
                    if ($tabela[$actual[$jay]][$elia]==$_POST['pytanie'])
                    {
                      echo "<h3>Dobrze</h3>";
                      $_SESSION['points'] += 1;
                    }
                    else{
                      echo "Źle, prawidłowa to:<br>".$tabela[$actual[$jay]][$tabela[$actual[$jay]][$elia]];
                    }
                    //pojawienie buttona next
                    echo "<form action='' method='post'>";
                    echo "<button type='submit' style='width:200px;' value='Następne pytanie' name='next' value='tak'>Następne pytanie</button>";
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
                  unset($_SESSION['last']);
                  echo "<button type='submit' style='width:200px' onclick='window.location.reload(true)'>Spróbuj ponownie</button>";
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
