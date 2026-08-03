<?php
declare(strict_types=1);

// Handles the Kontakt page's contact form. Runs as plain PHP (no Node.js
// needed) so it works on standard shared/Plesk hosting. Requires
// mail-config.php (copy mail-config.example.php and fill in real credentials).

header('Content-Type: application/json; charset=utf-8');

function respond(array $body, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['error' => 'Methode nicht erlaubt.'], 405);
}

$configFile = __DIR__ . '/mail-config.php';
if (!file_exists($configFile)) {
    respond(['error' => 'Der Nachrichtenversand ist derzeit nicht konfiguriert.'], 500);
}
$config = require $configFile;

require __DIR__ . '/vendor/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: real visitors never see or fill this field, spam bots usually do.
if (!empty($data['website'])) {
    respond(['ok' => true]);
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['error' => 'Bitte geben Sie eine gültige E-Mail-Adresse an.'], 400);
}
if ($message === '') {
    respond(['error' => 'Bitte geben Sie eine Nachricht ein.'], 400);
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['host'];
    $mail->Port = $config['port'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['username'];
    $mail->Password = $config['password'];
    $mail->SMTPSecure = $config['encryption'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['username'], 'Kontaktformular');
    $mail->addAddress($config['to']);
    $mail->addReplyTo($email, $name !== '' ? $name : $email);

    $mail->Subject = 'Neue Kontaktanfrage von ' . ($name !== '' ? $name : $email);
    $mail->Body = implode("\n", [
        'Name: ' . ($name !== '' ? $name : '-'),
        'E-Mail: ' . $email,
        'Telefon: ' . ($phone !== '' ? $phone : '-'),
        '',
        'Nachricht:',
        $message,
    ]);

    $mail->send();
} catch (PHPMailerException $e) {
    error_log('Contact form: failed to send email: ' . $mail->ErrorInfo);
    respond(['error' => 'Der Nachrichtenversand ist fehlgeschlagen. Bitte versuchen Sie es erneut.'], 500);
}

respond(['ok' => true]);
