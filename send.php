<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Composerを使っている場合

// 設定ファイルをインクルードして、設定情報を取得
$config = require 'config.php';

// PHPMailerオブジェクトの作成
$mail = new PHPMailer(true);

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try {
        // サーバー設定
        $mail->isSMTP();
        $mail->Host = $config['smtp']['host'];              // SMTPサーバー
        $mail->SMTPAuth = true;                             // SMTP認証を有効にする
        $mail->Username = $config['smtp']['username'];      // Gmailのアカウント
        $mail->Password = $config['smtp']['password'];      // Gmailのアプリパスワード
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // 暗号化を使用
        $mail->Port = $config['smtp']['port'];              // 587番ポート（Gmailのデフォルト）

        // 送信者・受信者設定
        $mail->setFrom($config['from']['email'], $config['from']['name']); // 送信元
        $mail->addAddress($config['to']['email'], $config['to']['name']);  // 受信者

        // メール内容
        $mail->CharSet = 'UTF-8';  // 文字エンコーディングをUTF-8に設定
        $mail->isHTML(true);  // HTML形式
        $mail->Subject = $name . ' 様からのお問い合わせです';
        $mail->Body    = '名前: ' . $name . '<br>メール: ' . $email . '<br>メッセージ: <br>' . nl2br($message);
        $mail->AltBody = '名前: ' . $name . "\nメール: " . $email . "\nメッセージ: " . $message;

        // メール送信
        if ($mail->send()) {
            echo json_encode(['status' => 'success', 'message' => 'メールが送信されました。']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'メール送信に失敗しました。']);
        }
    } catch (Exception $e) {
        // エラー詳細を出力
        $errorDetails = 'Mailer Error: ' . $mail->ErrorInfo;
        $errorCode = $e->getCode();
        $errorMessage = $e->getMessage();

        // エラーメッセージを表示
        echo json_encode([
            'status' => 'error',
            'message' => 'Mailer Exception: ' . $errorDetails,
            'errorCode' => $errorCode,
            'errorMessage' => $errorMessage
        ]);
    }
}
