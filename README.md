# SOTA-FindSummits
Search SOTA summits candidate from the elevation map provided from Geospatial Information Authority of Japan

○このプログラムについて
　本プログラムは国土地理院から提供される基盤地図情報数値標高モデルから
　　UCDavisで開発されたlibtourtreを用いて領域木（Contour Tree)を生成します。
　領域木とは曲面の構造をグラフとして表現したもので、数値標高モデルの高度を
　変化させた時に出現・消滅するピーク（頂点）、サドル（鞍点）をグラフ構造で表現します。
　
　領域木の詳細については参考文献[1]に詳しくありますが、数値標高モデルにおいて
　領域木は概ね次のように生成されます。
　まず標高をパラメータとして変化させていくと、ある標高で最も高い山の頂上が現れます。
　更に標高を下げていくと、その頂上を頂点とする構成部分が形作られていきます。
　標高を下げることにより、別の山の頂上でも同じような構成部分が作られていきます。
　更に標高を下げていくと、これらの構成部分の領域が広がっていきます。
　あるところまで標高を下げると、これらの構成部分がどこかで接続することがあります。
　この点をサドル（鞍点）と呼びます。サドルに達すると、これまで別々の構成部分だった
　部分は消滅し、新しく構成部分を生成し、処理を続けていきます。
　この結果、数値標高モデルはピーク（極値）とサドル、それ以降の結合した構成部分の極値と
　サドルというグラフ構造として表すことができます。
　本プログラムではピークとサドルの標高差が所定の値以上のものをすべて見つけ出し、
　これらの位置をGoogle　Map上で表示しています。

○事前準備
(1)ファイルのダウンロード
本ファイルと、libtourtreをgithub(以下のリンク)からダウンロードします。(Download ZIPをクリック)
  https://github.com/sedillard/libtourtre　　
  https://github.com/w-ockham/SOTA-FindSummits

(2)ファイルの展開とコンパイル
  unzip SOTAFindSummits-master.zip
  cd SOTAFindSummits-master
  unzip ../libtourtre-master.zip
  mv libtoutre-master libtourtre
  cd libtourtre
  make (もしg++でエラーになる場合はコンパイルオプションの-Werrorを外して下さい）
　　cd ..
　　mkdir obj
　　make

・使い方
　単にサンプルの実行結果だけを確認したい方はexampleの下の
　　　map.html(1280x1024)もしくはlarge-map.html(2480x1920)
  をブラウザ(FirefoxとChromeで動作確認しています）で開いてください。
　神奈川・山梨・東京近郊の115km x 75km (10 x 10 =100個のXMLファイルを使います）の領域で
　実行した解析結果を表示します。
　また群馬・栃木近郊の領域を解析したデータがgunma以下に入っています。

(1) 事前準備
　解析に必要なファイルにシンボリックリンクを張ります。
  cd example
  ln -s ../findsummits .
  ln -s ../libtourtre .
  ln -s ../xml2txt.py

(2) 基盤地図情報数値標高モデルの入手
　国土地理院のサイトより解析したい領域のエリアのXMLファイルを選んでダウンロードしてください。
　　XMLファイルをダウンロードする際には地図から該当する領域を選択するのがわかりやすいと思います。
　なお、本プログラムは矩形の領域しかサポートしておりません。
　海岸線付近などデータが欠けている領域でXMLが存在しない場合は標高０の領域を自動生成します。
　ファイルはすべてunzipしてテキストファイル（拡張子は.xmlになります)としてください。
　ファイルの展開先はexampleの下として下さい。

(3) XMLファイルの結合
　　xml2txt.pyでファイルを結合します。
　　（pythonのインタプリタをお持ちでない方は事前にインストールしてください。）
　　xml2txt.pyの引数は以下の通りです。
　　第1引数：領域の最も北西（最も左上）の領域名を1次メッシュ番号-2次メッシュ番号の形式で指定します。
　　第2引数：領域の幅（東西方向にいくつのXMLファイルがあるか）を数字で指定します。
　　第3引数：領域の高さ（南北方向にいくつのXMLファイルがあるか）を数字で指定します。
　　第4引数：出力ファイル名を指定します。
　　
　　例： ./xml2txt.py 5338-02 10 10 sample
　　　最も北西の領域が5338-02からはじまる10 x 10の矩形領域を結合する。
　　　該当する名称のXMLファイルがない場合は標高０の領域を自動生成します。
　　　
　　　出力として次の2つのファイルが生成されます。
　　　　　　sample: 領域サイズと各領域の緯度・経度が入ったファイル
　　　　　　sample.bin：標高データをバイナリ化したファイル

(4) 解析の実行
　　findsummitsで解析を実行します。オプションは以下の通りです。
　　　　-i <filename> : 入力ファイルを指定します。（xml2txtで生成したファイル)
　　　　-o <filename> : 生成するJavaScriptのファイル名 (通常はcode.jsとしてください）
　　　　-s <filename> : sota.org.ukからダウンロードしたSummitListを指定します。
　　　　-p <number>   : 頂点から鞍点のしきい値を指定します。SOTA-JAの場合は150 (m)です。
      
　　例： ./findsummits -i sample -o code.js -s summitsJA.csv -p 150
　　　出力としてGoogleMapを表示するcode.jsが生成されます。このファイルはmap.htmlから参照されます。
      
(5) 解析結果の表示
　　Firefox、Chrome等のブラウザでmap.html (大きいディスプレイをお持ちの方はlarge-map.html)を開いてください。
　　HTMLファイルから先ほど生成したcode.jsを読み込み、Google Map上に解析結果を表示します。

　　GoogleMapでは頂点と鞍点の高度差が-pオプションで指定した値以上あるものが表示されます。
　青枠で囲まれた領域が解析対象とした領域です。
　（領域の端では正しい結果が得られないため解析の際には広めの領域を対象にして下さい。）

　頂点は赤もしくは青のマーカ、鞍点は半透明のマーカとして表示されます。
　また頂点と対応する鞍点は青のラインで接続されています。

　各マーカには標高と位置及び頂点と鞍点の高度差が付けられておりマーカをクリックすることで表示されます。
　青のマーカはSOTAのSummitListに該当する山岳が登録されているもので、SummitListから検索した山岳名が標高・位置に加えて表示されます。
　赤いマーカはマーカのある緯度・経度付近にSummit　Listに登録されている山岳がない場合に付けられます。

○参考文献
　[1] Computing Contour Tree in All Dimentions　Hamish　Carr et al.
     Computational Geometry Volume 24, Issue 2, February 2003, Pages 75–94
     Special Issue on the Fourth CGC Workshop on Computational Geometry.
