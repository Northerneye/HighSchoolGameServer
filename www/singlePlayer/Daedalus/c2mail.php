<?php

header("Access-Control-Allow-Origin: http://localhost:9000");
$to = $_POST['email_to'];
$subject = $_POST['subject'];
$message = $_POST['message];
$headers - 'From: webmaster@example.com' . "\r\n" .
	'Reply-To: webmaster@example.com' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);

?>