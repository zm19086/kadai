// 持ち点の設定

var score = 0

// 正解すると持ち点に＋１する

function add(){
  score ++ ;
}

// 正解済みか未正解かの仕分け

var Q1 = 0
var Q2 = 0
var Q3 = 0
var Q4 = 0
var Q5 = 0
var Q6 = 0
var Q7 = 0
var Q8 = 0
var Q9 = 0
var Q10 = 0

function add1(){
  Q1 ++ ;
}

function add2(){
  Q2 ++ ;
}

function add3(){
  Q3 ++ ;
}

function add4(){
  Q4 ++ ;
}

function add5(){
  Q5 ++ ;
}

function add6(){
  Q6 ++ ;
}

function add7(){
  Q7 ++ ;
}

function add8(){
  Q8 ++ ;
}

function add9(){
  Q9 ++ ;
}

function add10(){
  Q10 ++ ;
}

//結果を見るボタンが押されたら変数scoreを使って点数を表示する。

function kekka(){
  document.getElementById('content').innerHTML ='<p class="title2"><span class="iro1">' + score + '</span>問正解です!!</p>'+
  '<div class="rtnbtn">'+
  '<a href="index.html" class="btn btn--orange2">最初のページに戻る</a>'+
  '</div>';
}