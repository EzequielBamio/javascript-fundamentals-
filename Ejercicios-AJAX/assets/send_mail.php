<?php

if(isset($_POST)) {
    // 0 -> no mandar reportes de errores
    error_reporting(0);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];

    $domain = $_SERVER['HTTP_HOST'];
    $to = 'ezequielbamiok@gmail.com';
    $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
    $message = "
    <p>Datos enviados desde el formulario del sitio <b>$domain</b></p>
    <ul>
        <li>Nombre: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Asunto: $subject</li>
        <li>Comentarios: $comments</li>
    </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From Envío Automático No Responder <no-reply@$domain>";

    $send_mail = main($to, $subject_mail, $message, $headers);

    if($send_mail) {
        $res = [
            'err' => false,
            'message' => 'Tus datos han sido enviados'
        ];
    } else {
        $res = [
            'err' => true,
            'message' => 'Error al enviar tus datos. Intenta nuevamente'
        ];
    }

    // Acepta todos los dominios
    // header('Access-Control-Allow-Origin: *');
    // Solo va a recibir envios desde este dominio
    header('Access-Control-Allow-Origin: https://bamioezequiel.com');
    header('Content-Type: application/json');
    echo json_encode($res);
    exit;
}