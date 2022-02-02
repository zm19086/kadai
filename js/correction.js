//　　正誤判定
// 正解なら関数Tを実行し、誤答ならアラートを出す。

function nazo1(){
  if(document.getElementById('answer1').value=='M'){
    T1();}
else if(document.getElementById('answer1').value=='m'){
  T1();}
else if(document.getElementById('answer1').value=='M'){
  T1();}
else if(document.getElementById('answer1').value=='m'){
  T1();}
else{alert('はずれ!');}
}

function nazo2(){
  if(document.getElementById('answer2').value=='S'){
    T2();}
else if(document.getElementById('answer2').value=='s'){
  T2();}
else if(document.getElementById('answer2').value=='S'){
  T2();}
else if(document.getElementById('answer2').value=='s'){
  T2();}
else{alert('はずれ!');}
}

function nazo3(){
  if(document.getElementById('answer3').value=='E'){
    T3();}
else if(document.getElementById('answer3').value=='e'){
  T3();}
else if(document.getElementById('answer3').value=='E'){
  T3();}
else{alert('はずれ!');}
}

function nazo4(){
  if(document.getElementById('answer4').value=='D'){
    T4();}
else if(document.getElementById('answer4').value=='d'){
  T4();}
else if(document.getElementById('answer4').value=='D'){
  T4();}
else if(document.getElementById('answer4').value=='d'){
  T4();}
else{alert('はずれ!');}
}

function nazo5(){
  if(document.getElementById('answer5').value=='S'){
    T5();}
else if(document.getElementById('answer5').value=='s'){
  T5();}
else if(document.getElementById('answer5').value=='S'){
  T5();}
else if(document.getElementById('answer5').value=='s'){
  T5();}
else{alert('はずれ!');}
}

function nazo6(){
  if(document.getElementById('answer6').value=='K'){
    T6();}
else if(document.getElementById('answer6').value=='k'){
  T6();}
else if(document.getElementById('answer6').value=='K'){
  T6();}
else if(document.getElementById('answer6').value=='k'){
  T6();}
else{alert('はずれ!');}
}

function nazo7(){
  if(document.getElementById('answer7').value=='J'){
    T7();}
else if(document.getElementById('answer7').value=='j'){
  T7();}
else if(document.getElementById('answer7').value=='J'){
  T7();}
else if(document.getElementById('answer7').value=='j'){
  T7();}
else{alert('はずれ!');}
}

function nazo8(){
  if(document.getElementById('answer8').value=='43'){
    T8();}
else if(document.getElementById('answer8').value=='４３'){
  T8();}
else{alert('はずれ!');}
}

function nazo9(){
  if(document.getElementById('answer9').value=='K'){
    T9();}
else if(document.getElementById('answer9').value=='k'){
  T9();}
else if(document.getElementById('answer9').value=='K'){
  T9();}
else if(document.getElementById('answer9').value=='k'){
  T9();}
else{alert('はずれ!');}
}

function nazo10(){
  if(document.getElementById('answer10').value=='Y'){
    T10();}
else if(document.getElementById('answer10').value=='y'){
  T10();}
else if(document.getElementById('answer10').value=='Y'){
  T10();}
else if(document.getElementById('answer10').value=='y'){
  T10();}
else{alert('はずれ!');}
}

// ヒントが押されたらgetElementByIdでヒントに書き換える。

function HINT1(){
  document.getElementById('hint1').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 一週間</span></div>';
}

function HINT2(){
  document.getElementById('hint2').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> １〜１０</span></div>'
}

function HINT3(){
  document.getElementById('hint3').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> よく見かけるコンビニの名前</span></div>'
}

function HINT4(){
  document.getElementById('hint4').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 時間の...</span></div>'
}

function HINT5(){
  document.getElementById('hint5').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 今はRです。</span></div>'
}

function HINT6(){
  document.getElementById('hint6').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> ２日前から３日後を...</span></div>'
}

function HINT7(){
  document.getElementById('hint7').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 12ある何かの頭文字</span></div>'
}

function HINT8(){
  document.getElementById('hint8').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 日本...</span></div>'
}

function HINT9(){
  document.getElementById('hint9').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> 距離の単位</span></div>'
}

function HINT10(){
  document.getElementById('hint10').innerHTML='<div><span class="iro1">ヒント:</span><span class="hint"> たくさん欲しいよね...。</span></div>'
}

// 正解したら関数addを実行し、getElementByIdで正解の解説と次に進むボタンを表示する。

function T1() {
  add();
  document.getElementById('question1').innerHTML = '<div id="result1">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> M [MOKU(木曜日)]</div>'+
  '<a onclick="next1();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T2(){
  add();
  document.getElementById('question2').innerHTML = '<div id="result2">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [six(6)]</div>'+
  '<a onclick="next2();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T3(){
  add();
  document.getElementById('question3').innerHTML = '<div id="result3">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> E [Seven-Eleven]</div>'+
  '<a onclick="next3();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T4(){
  add();
  document.getElementById('question4').innerHTML = '<div id="result4">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> D [Day(日)]</div>'+
  '<a onclick="next4();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T5(){
  add();
  document.getElementById('question5').innerHTML = '<div id="result5">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [SHOUWA(昭和)]</div>'+
  '<a onclick="next5();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T6(){
  add();
  document.getElementById('question6').innerHTML = '<div id="result6">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [KYOU(今日)]</div>'+
  '<a onclick="next6();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T7(){
  add();
  document.getElementById('question7').innerHTML = '<div id="result7">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> J [January(１月),June(６月),July(７月)]</div>'+
  '<a onclick="next7();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T8(){
  add();
  document.getElementById('question8').innerHTML = '<div id="result8">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> 43 [43県]</div>'+
  '<a onclick="next8();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T9(){
  add();
  document.getElementById('question9').innerHTML = '<div id="result9">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [Km(キロメートル)]</div>'+
  '<a onclick="next9();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T10(){
  add();
  document.getElementById('question10').innerHTML = '<div id="end">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> Y [YEN(円)]</div>'+
  '<a onclick="next10();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

// 次に進むボタンが押されたらgetElementByIdで次の問題に書き換える。

function next1() {
  document.getElementById('result1').innerHTML = '<div id="question2">'+
  '<p class="num">第2問</p>'+
  '<p class="code">O→T→T→F→F→[？]→S→E→N→T</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint2">'+
  '<div class="sbtn">'+
  '<a onclick="HINT2();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer2">'+
  '<a onclick="nazo2();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next2() {
  document.getElementById('result2').innerHTML = '<div id="question3">'+
  '<p class="num">第3問</p>'+
  '<p class="code">S [？] V [？] N [？] L [？] V [？] N</p>'+
  '<p class="toi">[？]に共通するアルファベットは？</p>'+
  '<div id="hint3">'+
  '<div class="sbtn">'+
  '<a onclick="HINT3();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer3">'+
  '<a onclick="nazo3();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next3(){
  document.getElementById('result3').innerHTML = '<div id="question4">'+
  '<p class="num">第４問</p>'+
  '<p class="code">S＜M＜H＜[？]＜W＜M＜Y＜C</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint4">'+
  '<div class="sbtn">'+
  '<a onclick="HINT4();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer4">'+
  '<a onclick="nazo4();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next4(){
  document.getElementById('result4').innerHTML = '<div id="question5">'+
  '<p class="num">第5問</p>'+
  '<p class="code">M→T→[？]→H→R</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint5">'+
  '<div class="sbtn">'+
  '<a onclick="HINT5();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer5">'+
  '<a onclick="nazo5();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next5(){
  document.getElementById('result5').innerHTML = '<div id="question6">'+
  '<p class="num">第6問</p>'+
  '<p class="code">O→K→[？]→A→A→S</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint6">'+
  '<div class="sbtn">'+
  '<a onclick="HINT6();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer6">'+
  '<a onclick="nazo6();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next6(){
  document.getElementById('result6').innerHTML = '<div id="question7">'+
  '<p class="num">第7問</p>'+
  '<p class="code">[？]→F→M→A→M→[？]→[？]→A→S→O→N→D</p>'+
  '<p class="toi">[？]に共通するアルファベットは？</p>'+
  '<div id="hint7">'+
  '<div class="sbtn">'+
  '<a onclick="HINT7();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer7">'+
  '<a onclick="nazo7();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next7(){
  document.getElementById('result7').innerHTML = '<div id="question8">'+
  '<p class="num">第8問</p>'+
  '<p class="code">1T+1D+2F+[？]K</p>'+
  '<p class="toi">[？]に入る数字は？</p>'+
  '<div id="hint8">'+
  '<div class="sbtn">'+
  '<a onclick="HINT8();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer8">'+
  '<a onclick="nazo8();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next8(){
  document.getElementById('result8').innerHTML = '<div id="question9">'+
  '<p class="num">第9問</p>'+
  '<p class="code">M M C M M [？] M</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint9">'+
  '<div class="sbtn">'+
  '<a onclick="HINT9();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer9">'+
  '<a onclick="nazo9();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next9(){
  document.getElementById('result9').innerHTML = '<div id="question10">'+
  '<p class="num">第10問</p>'+
  '<p class="code1">J=[？]</p>'+
  '<p class="code2">A=D</p>'+
  '<p class="code2">C=G</p>'+
  '<p class="code2">K=W</p>'+
  '<p class="code2">F=E</p>'+
  '<p class="toi">[？]に入るアルファベットは？</p>'+
  '<div id="hint10">'+
  '<div class="sbtn">'+
  '<a onclick="HINT10();" class="btn1 btn--orange">ヒント</a>'+
  '</div>'+
  '</div>'+
  '<p>'+
  '答:<input type="text" id="answer10">'+
  '<a onclick="nazo10();" class="btn1 btn--orange1">解答</a>'+
  '</p>'+
  '</div>';
}

function next10(){
  clearInterval(timerId);
  document.getElementById('timer').innerHTML = '';
  document.getElementById('end').innerHTML = '<div id="resultpage">'+
  '<p class="title1">結果発表</p>'+
  '<div class="sbtn">'+
  '<div id="result">'+
  '<p class="true">あなたの結果は...</p>'+
  '<a onclick="kekka();" class="btn btn--orange1">結果を見る</a>'+
  '</div>'+
  '</div>'+
  '</div>';
}

// 持ち点の設定

var score = 0

// 正解すると持ち点に＋１する

function add(){
    score ++ ;
    console.log(score);
}

// 結果を見るボタンが押されたらgetElementByIdで変数を含めて結果を表示する。

function kekka(){
  document.getElementById('result').innerHTML ='<p class="title2"><span class="iro1">' + score + '</span>問正解です!!</p>'+
  '<a href="index.html" class="btn btn--orange2">最初のページに戻る</a>';
}