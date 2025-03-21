<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = "fabriziarenish@gmail.com"; // Replace with your email address
    $subject = "New message from contact form";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        // Email sent successfully, redirect with success parameter
        header("Location: contact.html?success=true");
        exit();
    } else {
        // Error sending email, redirect with error parameter
        header("Location: contact.html?success=false");
        exit();
    }
} else {
    // If the form is not submitted via POST method, redirect to the form page
    header("Location: contact.html");
    exit();
}
?>
