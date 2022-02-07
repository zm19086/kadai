function q1() {
  if(Q1 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question1">'+
    '<p class="num">第1問</p>'+
    '<p class="code">G→K→S→[？]→K→D→N→G→K→S→...</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint1">'+
    '<div class="sbtn">'+
    '<a onclick="HINT1();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer1">'+
    '<a onclick="nazo1();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> M [MOKU(木曜日)]</div>'+
    '<a onclick="next1();" class="btn1 btn--orange1">次に進む</a>'+
    '<div>';
  }
  document.getElementById('choice1').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q2() {
  if(Q2 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question2">'+
    '<p class="num">第2問</p>'+
    '<p class="code">O→T→T→F→F→[？]→S→E→N→T</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint2">'+
    '<div class="sbtn">'+
    '<a onclick="HINT2();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer2">'+
    '<a onclick="nazo2();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> S [six(6)]</div>'+
    '<a onclick="next2();" class="btn1 btn--orange1">次に進む</a>'+
    '<div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q3() {
  if(Q3 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question3">'+
    '<p class="num">第3問</p>'+
    '<p class="code">S [？] V [？] N [？] L [？] V [？] N</p>'+
    '<p class="toi">[？]に共通するアルファベットは？</p>'+
    '<div id="hint3">'+
    '<div class="sbtn">'+
    '<a onclick="HINT3();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer3">'+
    '<a onclick="nazo3();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> E [Seven-Eleven]</div>'+
    '<a onclick="next3();" class="btn1 btn--orange1">次に進む</a>'+
    '<div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q4() {
  if(Q4 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question4">'+
    '<p class="num">第４問</p>'+
    '<p class="code">S＜M＜H＜[？]＜W＜M＜Y＜C</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint4">'+
    '<div class="sbtn">'+
    '<a onclick="HINT4();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer4">'+
    '<a onclick="nazo4();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> D [Day(日)]</div>'+
    '<a onclick="next4();" class="btn1 btn--orange1">次に進む</a>'+
    '<div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q5() {
  if(Q5 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question5">'+
    '<p class="num">第5問</p>'+
    '<p class="code">M→T→[？]→H→R</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint5">'+
    '<div class="sbtn">'+
    '<a onclick="HINT5();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer5">'+
    '<a onclick="nazo5();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> S [SHOUWA(昭和)]</div>'+
    '<a onclick="next5();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q6() {
  if(Q6 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question6">'+
    '<p class="num">第6問</p>'+
    '<p class="code">O→K→[？]→A→A→S</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint6">'+
    '<div class="sbtn">'+
    '<a onclick="HINT6();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer6">'+
    '<a onclick="nazo6();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> K [KYOU(今日)]</div>'+
    '<a onclick="next6();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q7() {
  if(Q7 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question7">'+
    '<p class="num">第7問</p>'+
    '<p class="code">[？]→F→M→A→M→[？]→[？]→A→S→O→N→D</p>'+
    '<p class="toi">[？]に共通するアルファベットは？</p>'+
    '<div id="hint7">'+
    '<div class="sbtn">'+
    '<a onclick="HINT7();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer7">'+
    '<a onclick="nazo7();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> J [January(１月),June(６月),July(７月)]</div>'+
    '<a onclick="next7();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q8() {
  if(Q8 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question8">'+
    '<p class="num">第8問</p>'+
    '<p class="code">1T+1D+2F+[？]K</p>'+
    '<p class="toi">[？]に入る数字は？</p>'+
    '<div id="hint8">'+
    '<div class="sbtn">'+
    '<a onclick="HINT8();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer8">'+
    '<a onclick="nazo8();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> 43 [43県]</div>'+
    '<a onclick="next8();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '';
}

function q9() {
  if(Q9 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question9">'+
    '<p class="num">第9問</p>'+
    '<p class="code">M M C M M [？] M</p>'+
    '<p class="toi">[？]に入るアルファベットは？</p>'+
    '<div id="hint9">'+
    '<div class="sbtn">'+
    '<a onclick="HINT9();" class="btn1 btn--orange">ヒント</a>'+
    '</div>'+
    '</div>'+
    '<p class="ans">'+
    '答:<input type="text" id="answer9">'+
    '<a onclick="nazo9();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> K [Km(キロメートル)]</div>'+
    '<a onclick="next9();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '<div class="circle"></div>';
  document.getElementById('choice10').innerHTML = '';
}

function q10() {
  if(Q10 == 0) {
    document.getElementById('Qs').innerHTML = '<div id="question10">'+
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
    '<p class="ans">'+
    '答:<input type="text" id="answer10">'+
    '<a onclick="nazo10();" class="btn1 btn--orange1">解答</a>'+
    '</p>'+
    '</div>';
  }
  else {
    document.getElementById('Qs').innerHTML = '<div id="end">'+
    '<p class="true">正解!!</p>'+
    '<div class="answer"><span class="iro1">答え:</span> Y [YEN(円)]</div>'+
    '<a onclick="next10();" class="btn1 btn--orange1">次に進む</a>'+
    '</div>';
  }
  document.getElementById('choice1').innerHTML = '';
  document.getElementById('choice2').innerHTML = '';
  document.getElementById('choice3').innerHTML = '';
  document.getElementById('choice4').innerHTML = '';
  document.getElementById('choice5').innerHTML = '';
  document.getElementById('choice6').innerHTML = '';
  document.getElementById('choice7').innerHTML = '';
  document.getElementById('choice8').innerHTML = '';
  document.getElementById('choice9').innerHTML = '';
  document.getElementById('choice10').innerHTML = '<div class="circle1"></div>';
}