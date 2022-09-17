## 開発手順
https://zenn.dev/ogakuzuko/articles/2250f7c7331106

`main` と `feature/ブランチ名_#issue番号`のみ

- 1 branch作成

`git checkout -b feature/add_header_#1`


- 2 commitメッセージ

`git commit -m "[add] Headerの追加 #1"`


- 3 push

`git push origin feature/add_header_#1`

- 4プルリクエスト

コメント欄に`close #issue番号`と書く

- 5Merge

- 6ローカルのmainをリモートブランチと同じ状態にする

`git pull origin main`

- 7ローカルにある作業ブランチを削除する

`git branch -d 作業ブランチ名`

- 8 ①〜⑦の繰り返し





## commit メッセージ
https://qiita.com/itosho/items/9565c6ad2ffc24c09364

fix：バグ修正

add：新規（ファイル）機能追加

update：機能修正（バグではない）

remove：削除（ファイル）
