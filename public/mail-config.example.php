<?php
// Copy this file to "mail-config.php" (same folder) and fill in your real
// Hetzner mailbox credentials.
//
// Hetzner Webhosting/KonsoleH mailboxes all share the same server hostname
// below, regardless of your own domain - only username/password are yours.
//
// mail-config.php itself is gitignored - it must never be committed or
// pushed to GitHub. Upload it to the server directly (KonsoleH WebFTP or an
// FTP client) after you clone/pull this repo there.

return [
    'host' => 'mail.your-server.de',
    'port' => 587,             // 587 = STARTTLS, 465 = SSL/TLS
    'encryption' => 'tls',     // 'tls' for port 587, 'ssl' for port 465
    'username' => 'kontakt@lukasschlewitz.de',
    'password' => '',
    'to' => 'kontakt@lukasschlewitz.de',
];
