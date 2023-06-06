<?php
if (isset($_POST['emailAddress'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "dsanpedro@gmail.com";
    $email_subject = "New Email from Real Estate site";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['firstName']) ||
        !isset($_POST['lastName']) ||
        !isset($_POST['emailAddress']) ||
        // !isset($_POST['comment'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $firstname = $_POST['firstName']; // required
    $lastname = $_POST['lastName']; // required
    $email = $_POST['emailAddress']; // required
    // $message = $_POST['comment']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $firstname)) {
        $error_message .= 'The first name you entered does not appear to be valid.<br>';
    }
    if (!preg_match($string_exp, $lastname)) {
        $error_message .= 'The lastt name you entered does not appear to be valid.<br>';
    }
    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First Name: " . clean_string($firstname) . "\n";
    $email_message .= "Last Name: " . clean_string($lastname) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Comment: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    <h1>Thank you for contacting us. We will be in touch with you very soon.</h1>
    <a href="index.html">Home</a>

<?php
}
?>