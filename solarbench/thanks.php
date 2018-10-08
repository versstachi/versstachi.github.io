<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Скамейки Нового Поколения с зарядками для гаджетов Напрямую от Производителя</title>  
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<meta name="description" content=" " />
	<meta name="keywords"  content=" " />
	<meta name="Resource-type" content="Document" />
	<link rel="icon" type="image/png" sizes="64x64" href="img/favico.png">
	<meta property="og:title" content=" " /> 
	<meta property="og:url" content="" />
	<meta property="og:image" content="img/ogg.jpg" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	 <header>
	 	<nav>
	 		<div class="container">
	 			<div class="row">
	 				<div class="logo"><div class="logo-pic"></div></div>
	 				<div class="col-7">
	 				<div class="row">	 						
	 				<div class="col voda-tel">
					<div class="bench-icovodafone-ico"></div>
					<a href="tel:+380503365235">+380503365235</a></div>
					<div class="col kyiv-tel">
					<div class="bench-icokyevstar-ico"></div>
					<a href="tel:+380672940354">+380672940354</a></div>
					<div class="col-5 mail-link">
					<div class="bench-icomail-ico"></div>
					<a href="mailto:solarcitybench@gmail.com">solarcitybench@gmail.com</a></div>
	 				</div>
					</div>
	 				<div class="col"><button class="btn-trans" data-toggle="modal" data-target="#back">Заказать звонок</button></div> 
	 			</div>
	 		</div>
	 	</nav>
	 	<div class="container">
	 		<div class="row title-block">
	 			<div class="col title-row">

 <meta http-equiv='refresh' content='index.html'>    <!-- Задержка на перезагрузку и возвратом на главную-->
<meta charset="UTF-8" />
<?php
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}/* проверка полей*/  
if (isset($tel)){ 
$name = $_POST['name'];
$text = $_POST['text'];
// $mails = $_POST['mail']; 
// $title = $_POST['title']; 
// $radio1 = $_POST['radio-1'];  
$address = "versstachi@gmail.com";
$metki =  $_SERVER["HTTP_REFERER"];
$otkyda = "Производитель  скамеек"; 
$mes = "Имя: $name \nТелефон: $tel \n";
$metki = $_SERVER['REQUEST_URI'];
$send = mail ($address,$otkyda,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "<div class='bord'><h1>Спасибо, что оставили заявку</h1></div>
      <p class='under-red'>В течении 10 минут с вами свяжеться менеджер ответит на ваши вопросы и оформит заказ</p> ";}
else {echo "Ошибка, сообщение не отправлено!";} 
}
else
{
echo "<p>Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!</p>";
}
?> 
	 			<!-- <h1>Спасибо за заявку!<br/><span>Менеджер свяжется с вами в течении 15минут</span></h1> -->
	 			<button class="btn-green" data-toggle="modal" data-target="#back-call">На главную</button></div>
	 			<div class=" bnch"><img src="img/led-bench.png" alt=""></div>
	 		</div>
				</div> 
	 	</div>
	 </header> 
<footer>
	<div class="container">
		<div class="row">
			<div class="logo"><div class="logo-pic"></div></div>
			<div class="col-7">
				<h3>Ссылки</h3>
				<div class="row"> 
				<div class="col">
					<a href="">Почему актуальнок</a>
					<a href="">Принцип работы</a>
					<a href="">Преимущества скамеек</a>
				</div>
				<div class="col"><a href="">Каталог  </a>
				<a href="">Где можно построить</a>
				<a href="">Как это работает</a></div>
				<div class="col">
					<a href="">О бренде  </a>
					<a href="">Выполненные работы</a>
					<a href="">Контакты</a>
				</div>
				</div>
			</div>
			<div class="col">
				<h3>Контакты</h3>
				<a href="tel:+380503365235">+380503365235</a><br/>
				<a href="tel:+380672940354">+380672940354</a><br/>
				<a href="mailto:solarcitybench@gmail.com">solarcitybench@gmail.com</a>
				<p class="bts"><button class="btn-green" data-toggle="modal" data-target="#back-call">Заказать звонок</button>
					<a href="" class="bench-icofacebook"></a>
					<a href="" class="bench-icoinstagram"></a>
				</p>
			</div>
		</div>
	</div>
</footer>
<div class="modal fade" id="back" tabindex="-1" role="dialog" aria-labelledby="back" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">Заказать звонок</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form">
        	<form action="thanks.php" method="post">
        		<input type="text" name="tel" placeholder="Введите ваш телефон">
        		<button class="btn-green">Отправить</button>
        	</form>
        </div>
      </div>
      <div class="modal-footer"> 
      </div>
    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js"></script>
	<script type="text/javascript" src="js/common.js"></script>
<!-- 	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script> -->
 

</body>
</html>