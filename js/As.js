//正解したら関数add()を実行する。
//getElementByIdで正解発表画面に書き換える。
//次に進むボタンを表示する。

function T1() {
  add();
  add1();
  document.getElementById('question1').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> M [MOKU(木曜日)]</div>'+
  '<a onclick="next1();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
  document.getElementById('sbtn1').innerHTML = '<a onclick="q1();" class="btn2 selectbtn1 iro2">1</a>'
}

function T2(){
  add();
  add2();
  document.getElementById('question2').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [six(6)]</div>'+
  '<a onclick="next2();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T3(){
  add();
  add3();
  document.getElementById('question3').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> E [Seven-Eleven]</div>'+
  '<a onclick="next3();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T4(){
  add();
  add4();
  document.getElementById('question4').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> D [Day(日)]</div>'+
  '<a onclick="next4();" class="btn1 btn--orange1">次に進む</a>'+
  '<div>';
}

function T5(){
  add();
  add5();
  document.getElementById('question5').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [SHOUWA(昭和)]</div>'+
  '<a onclick="next5();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T6(){
  add();
  add6();
  document.getElementById('question6').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [KYOU(今日)]</div>'+
  '<a onclick="next6();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T7(){
  add();
  add7();
  document.getElementById('question7').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> J [January(１月),June(６月),July(７月)]</div>'+
  '<a onclick="next7();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T8(){
  add();
  add8();
  document.getElementById('question8').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> 43 [43県]</div>'+
  '<a onclick="next8();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T9(){
  add();
  add9();
  document.getElementById('question9').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [Km(キロメートル)]</div>'+
  '<a onclick="next9();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}

function T10(){
  add();
  add10();
  document.getElementById('question10').innerHTML = '<div id="end">'+
  '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> Y [YEN(円)]</div>'+
  '<a onclick="next10();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
}
