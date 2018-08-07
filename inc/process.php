<?php
    $to = "info@vayatravel.com"; 
    $from = $_REQUEST['contact-email']; 
    $headers = "From: $from"; 
    $subject = "You have a message sent from your site"; 
    $fields = array(); 
    $fields{"email"} = "contact-email"; 
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>