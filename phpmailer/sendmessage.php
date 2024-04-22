<!-- Learning tutorial by https://www.youtube.com/watch?v=IgyCkBgMVBc -->
<!-- https://github.com/PHPMailer/PHPMailer?tab=readme-ov-file download phpmailer or run terminal options -->
<style>

.container {
    width: 60%;
    color: #fff;
    background: #333;
    margin: auto;
    margin-top: 250px;
    padding: 2.3rem;
    text-align:center;
    font-family: 'Roboto Condensed', sans-serif;
}

.space-buttom{
    padding-bottom: 40px;
}

.btn {
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 15px;
    border: 0;
    color: #FFF;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
}

.btn-primary {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #fff;
    text-transform: uppercase;
    border-radius: 0;
    text-shadow: none;
    transition: 0.5s;
}

a.btn-primary {
    padding: 15px 45px 15px 45px;
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus {
    background: #fff;
    color: #333;
    -webkit-box-shadow: 0 0 0 2px #fff;
    box-shadow: 0 0 0 2px #fff;
    border-color: #fff;
    text-decoration: none;
}

</style>

<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// $username = $_ENV['USER_NAME'];
// $username = $_SERVER['USER_NAME'];

// $password = $_ENV['PASSWORD_SECRET'];
// $password = $_SERVER['PASSWORD_SECRET'];

// echo '<p>' .$username. '</p>';
// echo '<p>' .$password. '</p>';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                  //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'quinlanrobert40@gmail.com';                    //SMTP username
    $mail->Password   = 'fuhmgjcntubigdct';                        //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
  
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $receivemessage = 'This is message by <b>' .$name. 'and here is message: <br>' .$message;

    //Recipients
    $mail->setFrom('quinlanrobert40@gmail.com', 'Robert Quinlan');
    $mail->addAddress('quinlanrobert40@gmail.com', 'Robert Quinlan');     //Add a recipient
   
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $receivemessage;

    $mail->send();
    echo '
    
    <div class="container">
    <h1>Message has been sent</h1>
    <p>Thank you for your message. I will get back to you shortly.</p>
    <p>Kind Regards</p>
    <p class="space-buttom">Robert Quinlan</p>
    <a class="btn btn-primary" href="https://robert-quinlan-resume-c64b50165280.herokuapp.com/">Ok</a>
    </div>
    ';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}