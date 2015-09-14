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
mail("serg_l@ukr.net", "Smile", $data);
?>