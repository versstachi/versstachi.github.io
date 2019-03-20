<?php
$sent = false;
if(isset($_POST['phone'])&&$_POST['phone']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
	//$to = 'mixan9334@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$to = 'godlin.pz@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'AirpodsPaint - Заказ'; //Заголовок сообщения

	$utms_fiedls = ['utm_campaign','utm_source','utm_medium','utm_term','source'];
	$utms = [];

	foreach ($utms_fiedls as $utm) {
		if(!empty($POST[$utm]))
			$utms[] = "<p>".$POST[$utm]."</p>/n";
	}

	$utms = implode('', $utms);
    $print_url = 'нет';

    $server_url = 'http://'.$_SERVER['SERVER_NAME'].dirname($_SERVER['PHP_SELF']);

    if( !empty($_FILES['inputFile'])  )
    {
    	$f = $_FILES['inputFile'];
    	print_r($_FILES);

    	$fext = strtolower( pathinfo($f['name'])['extension'] );
    	$print_url = 'Ошибка загрузки файла!';
    	
    	if(   ($f['error'] === UPLOAD_ERR_OK) 
    	   && ($fext === 'png' || $fext === 'jpg' || $fext === 'gif' ))
    	{
    		$fname = time().'_'.rand(1000000, 9999999);
    		$print_url = "upload/$fname.$fext";
    		move_uploaded_file($f['tmp_name'], "$print_url");
    		$print_url = '<a href="'.$server_url."/$print_url".'">Скачать</a>';
    	}
    }

    $case_color = preg_replace('/\W/', '', $_POST['case_color']);
    
    $case_surface = ($_POST['case_surface'] === 'g' ? 'g' : 'm');
    $headphones_color = preg_replace('/\W/', '', $_POST['headphones_color']);
    $head_surface = ($_POST['head_surface'] === 'g' ? 'g' : 'm');
	
	$images_url = $server_url.'/images/products/';

	$case_color_url = '<a href="'.$images_url.$case_color.'_'.$case_surface.'_case.png">Смотреть</a>';
	$headphones_color_url = '<a href="'.$images_url.$headphones_color.'_'.$head_surface.'_head.png">Смотреть</a>';

	$case = '#'.$case_color.' '.($case_surface === 'g' ? 'глянцевый' : 'матовый')
	        ." ($case_color_url)";
	$head = '#'.$headphones_color.' '.($head_surface === 'g' ? 'глянцевые' : 'матовые')
	        ." ($headphones_color_url)";

	$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Есть свой AirPod: '.((empty($_POST['airpods']) || !intval($_POST['airpods'])) ? 'НЕТ' : 'ДА').'</p>  
					<p>Имя: '.$_POST['name'].'</p>  
					<p>Телефон: '.$_POST['phone'].'</p>  
					<p>E-mail: '.$_POST['email'].'</p>
					<p>Наушники: '.$head.'</p>
					<p>Корпус: '.$case.'</p>
					<p>Принт: '.$print_url.'</p>
					'.$utms.'
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: AirpodsPaint <admin@airpodspaint.ru>\r\n"; //Наименование и почта отправителя
	print_r([$to, $subject, $message, $headers]);
	$sent = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
if( !$sent)
{
    http_response_code( 500 );
}

?>