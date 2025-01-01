<?php
return [
    'smtp' => [
        'host' => 'smtp.gmail.com',       // SMTPサーバー
        'username' => 'Gmailアカウント',
        'password' => 'App Password',
        'port' => 587,                    // SMTPポート
        'encryption' => 'tls',            // 暗号化方法
    ],
    'from' => [
        'email' => 'Gmailアカウント', // 送信者のメールアドレス
        'name' => '名前',                  // 送信者の名前
    ],
    'to' => [
        'email' => 'Gmailアカウント',  // 受信者のメールアドレス
        'name' => '名前',           // 受信者の名前
    ],
];
