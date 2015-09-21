<?php
/**
 * Created by PhpStorm.
 * User: serg
 * Date: 15.09.15
 * Time: 1:28
 */


$data = print_r($_POST, true);

/* Адрес отсылки почты*/

//$to="serg_l@ukr.net";
$to = "vishnyakov.vasily@gmail.com";

/* Шаблон заголовка*/
$subject_tmpl = "Запись на прием от %s\n";
/* сообщение шаблон*/
$message_tmpl = '
<html>
<head>
 <title>Data form</title>
</head>
<body>
<b>Date:</b> %s<br>
%s

</body>
</html>
';


/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

/* дополнительные шапки */
//$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
//$headers .= "Cc: vishnyakov.vasily@gmail.com\r\n";
//$headers .= "Bcc: crazy_serg@ukr,net\r\n";

$subject = sprintf($subject_tmpl, $_POST['name']);
$data_message = str_replace(
    'Array',
    '<b>Данные формы:</b><br>',
    str_replace(
        '(',
        '',
        str_replace(
            ')',
            '',
            str_replace(
                ']',
                '',
                str_replace(
                    '[',
                    '<br>',
                    $data
                )
            )
        )
    )
);
$message = sprintf($message_tmpl, date("Y-m-d H:i:s"), $data_message);

/* Отсылка почты, при необходимости дубликата, дублируешь строчку и меняешь  $to*/

mail($to, $subject, $message, $headers);

//$to = "serg_l@ukr.net";
//mail($to, $subject, $message, $headers);
?>

