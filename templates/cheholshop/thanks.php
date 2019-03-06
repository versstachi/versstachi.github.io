<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> </title>  
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
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
<body class="thanks">
  
<header>
   
  <div class="container-fluid">
    <div class="row">
    <div class="col-sm-12">
 <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="col-sm-12 logos-raw">
      <div class="col-sm-4">
      <div class="logo wow fadeInUp" data-wow-delay="0s"></div></div>
      <div class="col-sm-4 text-center  wow fadeInUp"><p>Фирменный магазин аксессуаров для iPhone с <br/> доставкой по всей Украине</p></div>
      <div class="col-sm-4 conts wow fadeInUp">
      <button class="navbar-btn text-r" data-toggle="collapse" data-target="#menu">
      <span class="line-hamb"></span>
      <span class="line-hamb"></span>
      <span class="line-hamb"></span> </button> 
      <div class="col-sm-10">
      <span class="numbs">   
      <span class="vib-numb"><div class="logos-svg"></div> 
      <a href="tel:+380931423489">+38 093 142 34 89</a></span>
      <button data-toggle="modal" data-target="#myModal-recall" data-wow-delay="0.2s" class=" wow fadeInUp">Заказать звонок</button>
</span>  </div>
    </div>
    </div>


</div>

  </div></div>
  <div class="container">
    <div class="head-inf">
<div class="col-sm-6 descrip">  
<p class="decsr-tit wow fadeInUp" data-wow-delay="0.3s">  
  <meta http-equiv='refresh' content='30; url=/index.html'>    <!-- Задержка на перезагрузку и возвратом на главную-->
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}} /* проверка полей*/
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}/* проверка полей*/ 
 
if (isset($name) & isset($tel)){

$address = "cheholshop.com.ua@gmail.com";
$metki =  $_SERVER["HTTP_REFERER"];
$otkyda = "Chehol"; 
$mes = "Имя: $name \nТелефон: $tel \nСообщение: $texts ";
$metki = $_SERVER['REQUEST_URI'];
$send = mail ($address,$otkyda,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "<h1 >Благодарим вас за заявку</h1>
<span  >менеджер перезвонит Вам в течении 15 минут!</span>";}
else {echo "Ошибка, сообщение не отправлено!";}
 
}
else
{
echo "<p>Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!</p>";
}
?>  
</p> 
 
</div>
<div class="col-sm-6 pict-phone wow fadeInUp"><img src="img/head-pic.png" alt="" class="img-responsive"></div>
</div>
</div>  
</div> 
</header>









<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->

    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">&times;</button> 
        <h3>Оставьте заявку!</h3>
	 		<p>Заполните поля формы, менеджер перезвонит Вам в течение 15 минут и запишет Вас на бесплатную диагностику</p>
      </div> 
      <div class="modal-body"> 
      	<form  action="/thanks.php" method="post" > 
      		<input type="text" name="name" required placeholder="Ваше Имя">
      		<input type="tel" name="tel" required placeholder="Телефон">
      		<button class="blue-bg" type="submit">ОТПРАВИТЬ</button>
      	</form>  
      </div>
      <div class="modal-footer"> 
      </div>
    </div>

  </div>
</div>

	<script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"  ></script>  
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/common.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script> 
 
</body>
</html>