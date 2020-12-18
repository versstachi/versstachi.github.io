<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New Device Качественный ремонт техники</title>  
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
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body class="thanks">
	 
<header>
	<div class="container-fluid">
	<div class="container">
		<div class="head-inf">
		<div class="col-sm-12">
 <div class="navbar navbar-default navbar-static-top" role="navigation">
  <div class="container">
			<div class="col-sm-6 logos-raw">
			<div class="logo wow fadeInUp" data-wow-delay="0s">
                <img
  src="img/logo-new.svg"
  alt="New Device Качественный
ремонт техники" class="logos-svg">
<img
  src="img/logo-device.svg"
  alt="New Device Качественный
ремонт техники" class="logos-svg-1">
  <img
  src="img/logo-switch.svg"
  alt="New Device Качественный
ремонт техники" class="logos-svg-2">
<img
  src="img/logo-stick.svg"
  alt="New Device Качественный
ремонт техники" class="logos-svg-3"></div>
			<button data-toggle="modal" data-target="#myModal"><i class="fa fa-mobile" aria-hidden="true"></i>заказать звонок</button>
		</div>

      <button class="btn navbar-btn text-r" data-toggle="collapse" data-target="#menu"><span class="fa fa-bars"></span> </button>

  </div>
</div>
<div class="col-sm-6 descrip">
	<meta http-equiv='refresh' content='30; url=/index.html'>    <!-- Задержка на перезагрузку и возвратом на главную-->
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}} /* проверка полей*/
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}/* проверка полей*/ 
 
if (isset($name) & isset($tel)){

$address = "info@new-device.com.ua";
$metki =  $_SERVER["HTTP_REFERER"];
$otkyda = "New Device"; 
$mes = "Имя: $name \nТелефон: $tel ";
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
 
			<button data-toggle="modal" data-target="#myModal" class="blue-bg">отправить заявку</button>
 </div>
</div></div>
</div>
<div class="autoplay col-sm-6 col-sm-push-6">
	<div class="h-4"></div> 
</div>
<!-- Menu -->
<div id="menu" class="panel panel-default panel-collapse collapse">
  <div class="container menus">
      <button class="btn navbar-btn pull-right butts" data-toggle="collapse" data-target="#menu"><span class="fa fa-bars"></span> </button>
			<div class="logo-w"></div>
    <ul class="nav nav-pills nav-stacked text-center ">
        <li><a href="#about">О компании</a></li>
        <li><a href="#serv">Услуги</a></li>
        <li><a href="#">Наши работы</a></li>
        <li><a href="#">Отзывы</a></li>
        <li><a href="#">Контакты</a></li> 
    </ul>
			<button data-toggle="modal" data-target="#myModal" class="black-bg"><i class="fa fa-mobile" aria-hidden="true"></i>заказать звонок</button>
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

<footer>
        <div class="container" background: #f9f9f9>
            <div class="row">
                <div class="col-sm-6">
                    <p>Copyright © 2018 <a href="https://new-device.com.ua/">NEW DEVICE</a>. All rights reserved. By <a href="https://woxs.com.ua/">WOXS.</a></p>
                </div>
                <div class="col-sm-6 pull-right  ">
                    <ul class="list-inline pull-right ">
                        <li><a href="https://www.instagram.com/new_device/" class="fa gp"><i class="fa fa-fw fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/newdevicecomua" class="fa fb"><i class="fa fa-fw fa-facebook"></i></a></li>
                        <li><a href="https://goo.gl/maps/QHXTt8GgMD22" class="fa gp"><i class="fa fa-fw fa-google-plus"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>

	<script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"  ></script>  
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/common.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script> 
 
</body>
</html>