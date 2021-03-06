<img width="1440" alt="TasQlock_TopPage" src="https://user-images.githubusercontent.com/47615811/76326367-debea100-632b-11ea-9058-3bedc008888a.png">


# TasQlock
本アプリケーションは作業の効率化を趣旨としたタスク管理アプリおり、ユーザ登録を行うことでご利用頂けるアプリケーションとなっております。
大きく分けて、下記2点を主な機能として実装しております。

### ■スケジュール管理機能
タスクを日時指定で登録、表示を行い作業内容を可視化します。  
各タスクに完了ボタンを設置しており、クリックすることで該当タスクが暗転化する為、残タスクが確認しやすくなります。  
また、過去に登録したタスクも確認できる為前回の作業内容を振り返りやすく、新規タスクの登録をアシストします。

### ■タイマー機能
集中力が持続しやすいと言われている、25分作業、5分休憩を繰り返す「ポモドーロ・テクニック」を参考にし、  
25分タイマーと5分タイマーの2機能を搭載したタイマーを実装しております。

# 開発環境
- HTML
- scss
- javascript
- jQuery
- ruby 2.5.1
- Ruby on Rails 5.2.4
- VSCode（Visual Studio Code）

# 詳しい説明
### スケジュール登録
<img width="1440" alt="NewSchedulePage" src="https://user-images.githubusercontent.com/47615811/76330879-b76ad280-6331-11ea-81c8-9969a30fe1a0.png">

日時、時間、カテゴリ、タイトル、作業内容を登録します。  
当日のスケジュールを既に登録している場合、当ページで確認できるよう、右列に簡易的なスケジュール一覧を表示させております。

### スケジュール確認
<img width="1440" alt="スクリーンショット 2020-03-11 0 47 39" src="https://user-images.githubusercontent.com/47615811/76331260-3bbd5580-6332-11ea-9a94-2056b373a2d7.png">

登録したスケジュールを一覧表示します。終了したタスクは完了ボタンを押す事でクローズします。
また、左側に用意しておりますカレンダーの日付をクリックする事で、該当日に登録されたスケジュールが表示されます。

### Webタイマー
<img width="340" alt="スクリーンショット 2020-03-11 0 43 27" src="https://user-images.githubusercontent.com/47615811/76376335-6a1b4f00-638b-11ea-8a70-6c328059f0de.png">

25分と5分のタイマーを兼ね備えたWebタイマーです。0秒になりましたらアラーム音が5秒間鳴る仕様です。  
本アプリケーションでは3つのボタンを用意しております。  
① 25分タイマーのスタート、一時停止、ストップの3種類のボタンで、動作中の内容によってボタンが自動で切り替わる仕様です。  
② タイマーを25分に再セットするリセットボタンです。  
③ 休憩用の5分タイマーを起動するボタンです。

# License
This software is released under the MIT License, see LICENSE.

# Authors
作者を明示する。特に、他者が作成したコードを利用する場合は、そのコードのライセンスに従った上で、リポジトリのそれぞれのコードのオリジナルの作者が誰か分かるように明示する（私はそれが良いと思い自主的にしています）。

# References
参考にした情報源（サイト・論文）などの情報、リンク
