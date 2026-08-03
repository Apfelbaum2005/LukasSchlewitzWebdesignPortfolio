<?php
// Copy this file to "mail-config.php" (same folder) and fill in your real
// Hetzner mailbox credentials. Find the exact host/port for your mailbox in
// Plesk under "E-Mail" -> your address -> "Mail-Client-Konfiguration".
//
// mail-config.php itself is gitignored - it must never be committed or
// pushed to GitHub. Upload it to the server directly (Plesk file manager
// or FTP/SFTP) after you clone/pull this repo there.

return [
    'host' => 'mail.example.de',
    'port' => 587,             // 587 = STARTTLS, 465 = SSL/TLS
    'encryption' => 'tls',     // 'tls' for port 587, 'ssl' for port 465
    'username' => 'kontakt@lukasschlewitz.de',
    'password' => '',
    'to' => 'kontakt@lukasschlewitz.de',
];
