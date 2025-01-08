# TAKASHI ABE - PORTFOLIO

## デプロイ先
このポートフォリオは以下のリンクからご覧いただけます  
https://takashi-portfolio.com/portfolio/portfolio.html

## 概要
初めてデザインからデプロイまで手掛けたポートフォリオです。  
状態管理が入っていないので完全なSPAではありませんが、基本的にHTML・CSS・PHPで構成され、表示はjQueryで切り替わるようになっています。  
※作業ブランチはmainでのみ行っています（本来なら切ったほうがいいのですが、個人の小さいサイトなので今回は切っていません）

## 各ページ
**トップ**  
キャッチフレーズのみの簡易トップです。

**自己紹介**  
これまでの経歴やスキルセットを掲載しています。

**スキル**  
扱える言語やフレームワークをグラフ化して可視化しました。

**作品**  
実際に作成したプロジェクトの概要とリンクを掲載しています。

**お問い合わせ**  
PHPを使用して作成したフォームがあり、実際に動作します。

## 作成・実装時
**デザイン**  
これに関しては素人ですので、なかなか納得のいくものが出来上がらず、いつでも作り変えられるので、とりあえずシンプルなものを目指しました。今思うとfigmaは画面ごとに気って作成したらよかったなと思っています。  
あまり時間もかけられないためhtmlファイル一つで構成を考え、また伝えたい情報を簡潔に伝えるためにできる限り1画面で収まるようにしました。

**コーディング**  
社内ルールを適用しており、まだまだ整理しなければならないところが多いです。  
今回は特にcssの書き方にこだわりました。完全には分離できていませんが、PCとスマホで共通の部分とそうではない個別の部分に分けてレスポンシブ作成しています。

**実装**  
お問い合わせについては初めて素のPHPで実装しています。エンジニアであれば誰もが経験していると思うのですが、想定外のエラーが出まして送信がなかなかうまくいかず想定の倍は時間がかかりました。  
お名前.comでドメインを作成し、Xserverと連携して表示まで行うのも初めてのことで、エラーというかSSL設定やファイルの読み込みの修正に時間がかかりました。

## 課題
- やはりデザインは素人が作るものではないな、と納得できていない部分が多いです。
- 最初にアニメーションも欲しいところです。
- コーディングスキル、特に「見やすくわかりやすい」を実行していきたいです。
- 実機で確認すると、やはり表示がおかしくなっていたので、実機確認できるような状態でローカル作成を行う大切さを学びました。
- 今回は不必要なコメントや却下したコードも残しています。恥ずかしいですが、これも一つの勉強ということです。
- デプロイまでの工程でも調べることが多かったので、今回はいい勉強となりました（chatGPTも優秀です）
- 静的HTMLで構成されているため、直接URL指定してアクセスする必要があります。今後はフレームワークを使用して動的ルーティングを導入することで、URLの管理やリソースの読み込みを行いたいです。

## 使用技術
**フロントエンド**  
HTML、CSS、Javascript（Jquery）

**バックエンド**  
PHP

**その他**  
figma、github、Xserver、お名前.com

## 作成時間
**デザイン**  
22時間

**コーディング**  
20時間

**実装**  
4.5時間

**デプロイ**  
3時間

**その他**  
5時間

## ライセンス (日本語)
このプロジェクトは、個人の学習や参考目的での利用を想定しています。  
コードのクローンや閲覧は自由ですが、改変や再配布は禁止とします。  

本プロジェクトの利用により生じた問題や損害について、作成者は一切の責任を負いません。  
ご自身の責任でご利用ください。

This project is intended for personal use and learning purposes only.  
You are allowed to clone and view the code, but modifications and redistribution are not permitted.  

The author assumes no responsibility for any issues or damages that may arise from the use of this project.  
Use at your own risk.

## 連絡先
**Email**  
takashi.abe1994@gmail.com
