//正解したら関数add()を実行する。
//getElementByIdで正解発表画面に書き換える。
//次に進むボタンを表示する。

function T1() {
  add();
  add1();
  document.getElementById('question1').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> M [MOKU(木曜日)]</div>'+
  '<a onclick="next1();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select1').innerHTML = '<div id="choice1">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q1();" class="btn4 selectbtn1">1</a>'+
  '</div>';
}

function T2(){
  add();
  add2();
  document.getElementById('question2').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [six(6)]</div>'+
  '<a onclick="next2();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select2').innerHTML = '<div id="choice2">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q2();" class="btn4 selectbtn2">2</a>'+
  '</div>';
}

function T3(){
  add();
  add3();
  document.getElementById('question3').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> E [Seven-Eleven]</div>'+
  '<a onclick="next3();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select3').innerHTML = '<div id="choice3">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q3();" class="btn4 selectbtn3">3</a>'+
  '</div>';
}

function T4(){
  add();
  add4();
  document.getElementById('question4').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> D [Day(日)]</div>'+
  '<a onclick="next4();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select4').innerHTML = '<div id="choice4">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q4();" class="btn4 selectbtn4">4</a>'+
  '</div>';
}

function T5(){
  add();
  add5();
  document.getElementById('question5').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> S [SHOUWA(昭和)]</div>'+
  '<a onclick="next5();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select5').innerHTML = '<div id="choice5">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q5();" class="btn4 selectbtn5">5</a>'+
  '</div>';
}

function T6(){
  add();
  add6();
  document.getElementById('question6').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [KYOU(今日)]</div>'+
  '<a onclick="next6();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select6').innerHTML = '<div id="choice6">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q6();" class="btn4 selectbtn6">6</a>'+
  '</div>';
}

function T7(){
  add();
  add7();
  document.getElementById('question7').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> J [January(１月),June(６月),July(７月)]</div>'+
  '<a onclick="next7();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select7').innerHTML = '<div id="choice7">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q7();" class="btn4 selectbtn7">7</a>'+
  '</div>';
}

function T8(){
  add();
  add8();
  document.getElementById('question8').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> 43 [43県]</div>'+
  '<a onclick="next8();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select8').innerHTML = '<div id="choice8">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q8();" class="btn4 selectbtn8">8</a>'+
  '</div>';
}

function T9(){
  add();
  add9();
  document.getElementById('question9').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> K [Km(キロメートル)]</div>'+
  '<a onclick="next9();" class="btn1 btn--orange1">次に進む</a>';
  document.getElementById('select9').innerHTML = '<div id="choice9">'+
  '<div class="circle"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q9();" class="btn4 selectbtn9">9</a>'+
  '</div>';
}

function T10(){
  add();
  add10();
  document.getElementById('question10').innerHTML = '<p class="true">正解!!</p>'+
  '<div class="answer"><span class="iro1">答え:</span> Y [YEN(円)]</div>'+
  '<a onclick="next10();" class="btn1 btn--orange1">次に進む</a>'+
  '</div>';
  document.getElementById('select10').innerHTML = '<div id="choice10">'+
  '<div class="circle1"></div>'+
  '</div>'+
  '<div class="btn3">'+
  '<a onclick="q10();" class="btn4 selectbtn10">10</a>'+
  '</div>';
}
