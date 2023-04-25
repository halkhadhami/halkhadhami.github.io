<?php
if(isset($_POST['submit'])) {
    // Check if the honeypot field is empty
    if(!empty($_POST['honeypot'])) {
        die();
    }

    // Get the form data
    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $subject = $_POST['contactSubject'];
    $message = $_POST['contactMessage'];

    // Validate the form data
    if(empty($name) || empty($email) || empty($message)) {
        $error_message = "Please fill in all the required fields.";
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Please enter a valid email address.";
    } else {
        // Send the email
        $to = "hayl.khadhami@gmail.com";
        $headers = "From: " . strip_tags($email) . "\r\n";
        $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
        $headers .= "CC: \r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $body = "Name: " . $name . "<br>";
        $body .= "Email: " . $email . "<br>";
        $body .= "Subject: " . $subject . "<br>";
        $body .= "Message: " . nl2br($message);

        if(mail($to, $subject, $body, $headers)) {
            $success_message = "Your message was sent, thank you!";
        } else {
            $error_message = "There was a problem sending your message. Please try again later.";
        }
    }
}
?>
