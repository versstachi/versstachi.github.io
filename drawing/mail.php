<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
 
    $to = "hochurisovat@inbox.ru"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "hochurisovat@inbox.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $party = $_POST['party'];
    $name_gift = $_POST['name_gift'];
    $cost = $_POST['cost'];
    $email_gift = $_POST['email_gift'];
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br/>
 <b>Имя:</b> $name<br/>
<b>Телефон:</b> $phone<br/>
<b>Email:</b> $email<br/>
<b>Какой праздник:</b> $party<br/>
<b>Имя адресата:</b> $name_gift<br/>
<b>Наминал сертификата:</b> $cost<br/>
<b>Email адресата:</b> $email_gift<br/>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>
 
Спасибо за отправку вашего сообщения!
 
</center>';
    }
    else
    {
    echo '<center>
 
<b>Ошибка. Сообщение не отправлено!</b>
 
</center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}?>