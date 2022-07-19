# The Movie Database Lite
#### Video Demo:  <https://www.youtube.com/watch?v=Qm9tWsraXjk>
#### Description:
このプロジェクトは、私たちが現在上映中の映画や自分の気になる映画を検索し、映画のポスターやあらすじ、ユーザーレビューを閲覧することができるウェブページです。
プログラミングは初学者なので、かなりシンプルなものにしました。一緒にcs50を受講している方々がwebAPIを使用していたのでぜひ使ってみたいと思い、
あまり難しくなさそうなThe MovieDatabase APIを見つけたのでこのプロジェクトを作ろうと思いました。作成に当たっていくつかのサイトを参考にしてプロジェクトを完成させました。

This project is a web page where we can search for movies that are currently playing or that we are interested in, and view movie posters, synopsis, and user reviews. 
Since I am a first time programmer, I kept it fairly simple. 
Since the people I was taking cs50 with were using webAPIs, I wanted to try it out, and I found The MovieDatabase API, which didn't seem too difficult, so I decided to make this project. 
I found The MovieDatabase API which seemed to be not so difficult to use, so I decided to make this project. 
I referred to some websites to complete the project.

#### Technologies used（使用した技術）:
Javascript
HTML/CSS
The Movie Database API

#### How the webpage works(どのように動くか)

このウェブページは閲覧機能と検索機能を備えています。

This web page has a browse function and a search function.

##### Browsing Function（閲覧機能）
ウェブページには最大20の映画が表示されます。
それぞれはポスターとユーザーレビューしか表示されていませんが、マウスをポスターの上に乗せることで、あらすじが表示される仕組みになっています。
ユーザーレビューは点数によって色が変わります。
8以上であれば緑色になり、5以上であればオレンジ色に、それ未満は赤色になるよう設定されています。
さらに、現在画面に表示されている映画が何かわかるように、画面左上に何を表示しているかを示すテキストを設置しています。
まずユーザーが画面を読みこんだときは必ず現在公開中の映画が表示されるようになっているので、それに伴い画面左上に”今は現在公開中の映画を表示しています”という表示が出るようになっています。

The web page displays up to 20 movies. 
Each movie has only a poster and a user review, but by hovering the mouse over the poster, you can see the synopsis. 
The user reviews change color depending on the score: green for 8 and above, orange for 5 and above, and red for below that. 
In addition, we have placed text in the upper left corner of the screen to indicate what movie is currently being shown on the screen. 
When a user loads the screen, the current movie is always displayed, so the top left corner of the screen will say, "You are currently viewing the current movie.

##### Search function（検索機能）
映画を調べるウェブサービスにあたり、検索機能を実装しました。画面右上に検索バーを設置しました。
そこにキーワードを入れて"search"をクリックするとそのキーワードに関連した表示が出る仕組みなっています。
こちらも最大20件までの映画が表示されます。先ほども説明したように画面左上にはどのような映画が表示されているか示す必要があるので、”今は？？に関連した映画を表示しています”という表示が出るようになっています。

As a web service to look up movies, I have implemented a search function. 
A search bar has been placed on the upper right corner of the screen. 
If you enter a keyword and click on "search", you will see the results related to that keyword. 
Up to 20 movies will be displayed here as well. 
As I mentioned earlier, the top left corner of the screen needs to show you what movies are displayed, so you can see "Showing movies that related "~~" ".

#### Possible improvements（改善点）
javascriptにほとんど触れたことがなく、webAPIにも初めて挑戦したので、機能の実装に予想以上に時間がかかってしまいました。
そのため改善の余地が多くあります。

実装したい機能
・ページ移動機能を設け、20件以上の映画の閲覧を可能にする機能。
・The Movie Databaseのサイトに飛び、詳しい情報の閲覧を可能にする機能。
・表示されている映画をユーザーレビュー順や公開日順などで並び替えする機能。
・現在公開中の映画だけでなく、近日公開予定の映画やレビューが高い映画などを表示する機能。

Since I have almost no experience with javascript and this was my first attempt at webAPI, it took much longer than expected to implement the functions.
Therefore, there is a lot of room for improvement.

Functions to be implemented
A function to move pages and enable viewing of more than 20 movies.
A function that allows users to jump to the website of The Movie Database and view detailed information.
The ability to sort the displayed movies by user reviews or by release date.
A function to display not only movies that are currently being released, but also movies that are scheduled to be released in the near future and movies that have been highly reviewed.

