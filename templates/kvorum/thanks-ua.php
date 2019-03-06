<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>ТОПЛИВНАЯ КОМПАНИЯ "КВОРУМ- НАФТА"</title>  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta name="description" content=" " />
  <meta name="keywords"  content=" " />
  <meta name="Resource-type" content="Document" />
  <link rel="icon" type="image/png" sizes="64x64" href="img/favico.png">
  <meta property="og:title" content=" " /> 
  <meta property="og:url" content="" />
  <meta property="og:image" content="img/ogg.jpg" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.min.css"> 
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
</head>
<body>
<header class="header-thanks">
  <div class="container">
    <div class="row high-raw">
      <div class="col-md-2 col-sm-3 col-xs-12 lg-b">
      <div class="logo"></div>
      <p class="log-descr">Лучшее время для вашего авто</p></div>
      <div class="user-cont col-md-7 col-md-offset-3 col-sm-9">
      <div class="user-lang"> 
        <a href="opt-sotrudnichestvo-ukr.html" class="lang"><div class="flag-ukr"></div><span>УКР</span></a>
        <a href="index.html" class="lang"><div class="flag-rus"></div><span>РУС</span></a>
      </div>
      <div class="enter user-block"> 
<div class="icos-user-pic"></div>
        <div class="user-link"><a href="https://kvorum.ng-card.com/" target="_blank">Вход</a></div>
      </div>
      <div class="user-block">
        <div class="user-link">
<i class="fas fa-mobile-alt"></i><a href="tel:+380512709409"><strong>+38 0512</strong> 709 409</a></div>
        <div class="user-link"><i class="far fa-envelope"></i><a href="mailto:info@kvorum.mk.ua">info@kvorum.mk.ua</a></div>
      </div>
      <button class="trans-btn" data-toggle="modal" data-target="#modal-recall" onclick="setbtn(this);"  title="Заказать звонок">Заказать звонок</button>
      </div>
  </div>
  </div>
  <div class="container-fluid bg-bir">
  <div class="container">
    <div class="row">
    <div id="menu" class="default nav menu">
      <span class="close-bar"><i class="fas fa-bars"></i></span>
      <ul>                                                                                   
        <li><a href="#s-2">Продукция </a></li>
        <li><a href="#s-8">О компании</a></li>
        <li><a href="#s-9">Услуги</a></li>
        <li><a href="#s-12">Автопарк</a></li>
        <li><a href="#s-5">Сотрудничество</a></li>
        <li><a href="#s-13">Акции</a></li>
        <li><a href="roznica-seti-azs.html">Розница Сеть АЗС</a></li>
        <li><a href="#s-14">Контакты</a></li>
      </ul>
    </div>
    </div>
  </div></div>
  <div class="container-fluid  bg-thanks-cont">
  <div class="container"> 
    <div class="row">
      <div class="col-sm-5 head-inf lft">
          <meta http-equiv='refresh' content='200; url=/index.html'>    <!-- Задержка на перезагрузку и возвратом на главную-->
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}} /* проверка полей*/
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}/* проверка полей*/  
if (isset($name) & isset($tel)){ 
$texts = $_POST['text'];
$mails = $_POST['mail']; 
$title = $_POST['title']; 
$address = "info@kvorum.mk.ua";
$metki =  $_SERVER["HTTP_REFERER"];
$otkyda = "ТОПЛИВНАЯ КОМПАНИЯ КВОРУМ- НАФТА"; 
$mes = "Имя: $name \nТелефон: $tel \nMail: $mails \nСообщение: $texts \nОткуда:$title";
$metki = $_SERVER['REQUEST_URI'];
$send = mail ($address,$otkyda,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "<div class='headline'>
      <h2>Дякуємо<!span> за залишене замовлення</!span> </h2>
      <div class='head-line-und'></div>
      <p class='head-descrip'>Наш менеджер вам передзвонить</p></div>";}
else {echo "Помілка, повідомлення не відправлено!";} 
}
else
{
echo "<p>Ви не заповнили всі поля!</p>";
}
?>  
<p class=""><a href="index.html"><button class="bir-btn">Вернуться на главную</button></a></p>
      </div>
    </div>
  </div>
  </div> 
</header> 

<!-- Modal  заказать звонок-->
<div id="modal-recall" class="modal fade call" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">&times;</button> 
        <h3>Заполните поля формы и менеджер перезвонит Вам в течении 15 минут</h3> 
        <div class="head-line-und "></div>
      </div> 
      <div class="modal-body"> 
        <form  action="/thanks.php" method="post" > 
            <input type="text" name="name" required placeholder="Введите имя">
            <input type="tel" name="tel" required placeholder="Введите номер">
          <button class="green-btn" type="submit">ЗАКАЗАТЬ ЗВОНОК</button>
        </form> 
      </div>
      <div class="modal-footer"> 
      </div>
    </div>
  </div>
</div>  
   <script  src="https://code.jquery.com/jquery-1.12.4.min.js"  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="  crossorigin="anonymous"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="js/common.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-equalheights@1.0.4/jquery.equalheights.min.js"></script>
</body>
</html>