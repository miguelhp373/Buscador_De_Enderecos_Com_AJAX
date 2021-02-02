<?php
date_default_timezone_set("America/Sao_Paulo");
$date = date('Y-m-d h-i');
$hour = date('h-i-s');
$arquivo = ".txt";

$FileName = $date.$arquivo;

$info = filter_input(INPUT_GET, "info", FILTER_SANITIZE_NUMBER_INT);

switch($info){
    case 1:
        $str = "CEP:".$_COOKIE['cep']." | Rua: ".$_COOKIE['rua']." | Bairro: ".$_COOKIE['bairro']." | Cidade: ".$_COOKIE['cidade']." | Estado: ".$_COOKIE['estado']." | DDD: ".$_COOKIE['ddd'];

        $fp = fopen($FileName, "w");
        if(fwrite($fp, "{$str}")){
            echo "1";
        }else{
            echo "0";
        }
        fclose($fp);
    break;

    default:
        echo "nada";
    break;
}
?>
