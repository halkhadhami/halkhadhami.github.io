<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Retrieve form data
   $name = $_POST['contactName'];
   $email = $_POST['contactEmail'];
   $subject = $_POST['contactSubject'];
   $message = $_POST['contactMessage'];

   // Perform validation
   if (empty($name) || empty($email) || empty($message)) {
      $error = "Please fill in all required fields.";
   } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $error = "Please enter a valid email address.";
   }

   // Process form data
   if (empty($error)) {
      $to = "hayl.khadhami@gmail.com";
      $subject = "New message from website";
      $message = "Name: $name\nEmail: $email\nMessage: $message";
      $headers = "From: $email";
      mail($to, $subject, $message, $headers);

      // Redirect to thank-you page
      header("Location: thank-you.html");
      exit();
   }
}
?>
