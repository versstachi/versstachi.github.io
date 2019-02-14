<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">  
	<link rel="shortcut icon" href="img/favico.png" type="image/png">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="http://cdn.jsdelivr.net/jquery.slick/1.5.5/slick.css">
	<link rel="stylesheet" href="http://cdn.jsdelivr.net/jquery.slick/1.5.5/slick-theme.css"> 
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<header>
		<div class="container centered">
			<div class="row info-block"> 	 
<?php
	
			if (isset($_POST['tel'])) {
				$tel = $_POST['tel']; 
				if ($tel == '') {unset($tel);}
			}
			// echo "<pre>";
			// var_dump($_POST);
			// echo "</pre>";
			 
			if ( isset($tel) ){

				$mail = $_POST['mail'];
				$name = $_POST['name'];
				$teleg = $_POST['teleg']; 
				$hash = $_POST['hash']; 
				$packet = $_POST['packet'];  
				
				$address = "support@bcg.to, versstachi@gmail.com";
			  	$metki =  $_SERVER["HTTP_REFERER"];
				$otkyda = "takaev.biz";
				
				$mes = "Имя: $name \nПочта: $mail\nТелефон: $tel \nТелеграмм: $teleg \nНазвание пакета: $packet\nХэш транзакции: $hash";
				$metki = $_SERVER['REQUEST_URI'];
				$send = mail ($address,$otkyda,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");	
			
				if ($send == 'true'){
					echo "
		<p class=\"text-center\">
			<h2>СПАСИБО ЗА ЗАЯВКУ</h2> 
		</p> ";}
				else {echo "<h2>Ошибка, сообщение не отправлено!</h2>";}
			 
			} else {
				echo "<p class=\"under-mt text-center\">Вы <span>заполнили не все поля,</span> вернитесь назад и заполните необходимые поля!</p>";
			}
			header( 'Refresh: 15; url=http://www.takaev.biz' );
		?> 
				<p class="unders">Привычка быть богатым</p>
				<a href="http://www.takaev.biz" class=""><button class="green-btn">На главную</button></a> 
			</div>
		</div>
	</header> 

	<section class="s-9"> 
		<div class="container">
			<div class="row">
				<h2>Связаться со мной:</h2>
			</div>
			<div class="row soc-ico">
				<a href="">
					<img src="img/insta-ico.svg" alt="">
				</a>
				<a href="">
					<img src="img/whatsapp.svg" alt="">
				</a>
			</div>
		</div>
	</section> 
	<footer>
		<div class="container">
			<div class="row">
				<a href="">Обо мне</a>
				<a href="">Преимущества</a>
				<a href="">Для кого курс</a>
				<a href="">Записаться на курс</a>
			</div>
		</div>
	</footer>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://cdn.jsdelivr.net/jquery.slick/1.5.5/slick.min.js"></script> 
<script src="js/common.js"></script> 

</body>
</html>