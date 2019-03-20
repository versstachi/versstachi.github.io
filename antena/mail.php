<?php
$sent = false;
if(isset($_POST['tel'])&&$_POST['tel']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
	//$to = 'lte-lab@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$to = 'igorgalaeff@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = $_POST['form']; //Заголовок сообщения

	$utms_fiedls = ['added','utm_campaign','utm_source','utm_medium','utm_term','source'];
	$utms = [];
	foreach ($utms_fiedls as $utm) {
		if(!empty($POST[$utm]))
			$utms[] = "<p>".$POST[$utm]."</p>/n";
	}
	$utms = implode('', $utms);
	
	$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Форма: '.$_POST['form'].'</p>  
					<p>Телефон: '.$_POST['tel'].'</p>  
					<p>Комплект: '.$_POST['items'].'</p>
					<p>Цена: '.$_POST['price'].'</p>
					<p>Рассрочка: '.$_POST['rassrochka'].' в месяц</p>
					'.$utms.'
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: На дачу <antenna@av-tool.ru>\r\n"; //Наименование и почта отправителя
	$sent = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
if( $sent)
{
	header('Location: http://lte-lab.com/thanks');
	echo "<a href='http://lte-lab.com/thanks'>Спасибо за заказ! http://lte-lab.com/thanks</a>";
}
else
{
	?>
		<h1>Ошибка отправки данных!</h1>
		<h3>По неизвестной причине Ваша заявка не была отправлена!<br>
			Пожалуйста, свяжитесь с нами по телефону:<br>
			<a href="tel:+7 (495) 018-25-11" class="mod-tel">+7 (495) 018-25-11</a>
		</h3>
	<?
}

?>