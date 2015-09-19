<?php
/**
 * Created by PhpStorm.
 * User: serg
 * Date: 15.09.15
 * Time: 1:28
 */


//$fp = fopen("counter.txt", "a+"); // Открываем файл в режиме записи
//$mytext = "Это строку необходимо нам записать\r\n"; // Исходная строка$data
$data= print_r($_REQUEST,true);
//$test = fwrite($fp, $data); // Запись в файл
//die();
//if ($test) echo 'Данные в файл успешно занесены.';
//else echo 'Ошибка при записи в файл.';
//fclose($fp); //Закрытие файла

$subject_tmpl = "Запись на прием от %s\n";

/* сообщение */
$message_tmpl = '
<html>
<head>
 <title>Data form</title>
</head>
<body>
Date:
%s

</body>
</html>
';


/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$to="serg_l@ukr.net";
/* дополнительные шапки */
//$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
$headers .= "Cc: vishnyakov.vasily@gmail.com\r\n";
$headers .= "Bcc: crazy_serg@ukr,net\r\n";

$subject= sprintf($subject_tmpl,$_POST['name']);
$message= sprintf($message_tmpl,date("Y-m-d H:i:s"),$data);
/* и теперь отправим из */
$result  =mail($to, $subject, $message, $headers);
//    $result  = mail("serg_l@ukr.net", 'smile','test');
//    mail("serg_l@ukr.net", "Smile", 'test');
//mail("serg_l@ukr.net", "$subject", $data);
?>