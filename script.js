let elapsedTime = 10;
function wrightTime(){
    document.getElementById("time").textContent = '残り' + elapsedTime + '秒';
}
wrightTime();

var score = 0

function add(){
    score ++ ;
}

function result(){
    if (score === 0){
        clearInterval(timerId);
        location.href="result0.html"
    }
    else if (score === 1){
        clearInterval(timerId);
        location.href="result1.html"
    }
    else if (score === 2){
        clearInterval(timerId);
        location.href="result2.html"
    }
    else if (score === 3){
        clearInterval(timerId);
        location.href="result3.html"
    }
    else if (score === 4){
        clearInterval(timerId);
        location.href="result4.html"
    }
    else if (score === 5){
        clearInterval(timerId);
        location.href="result5.html"
    }
    else if (score === 6){
        clearInterval(timerId);
        location.href="result6.html"
    }
    else if (score === 7){
        clearInterval(timerId);
        location.href="result7.html"
    }
    else if (score === 8){
        clearInterval(timerId);
        location.href="result8.html"
    }
    else if (score === 9){
        clearInterval(timerId);
        location.href="result9.html"
    }
    else if (score === 10){
        clearInterval(timerId);
        location.href="result10.html"
    }
}

const timerId = setInterval(function(){
    elapsedTime--;
    wrightTime();
    if (elapsedTime === 0){
        clearInterval(timerId);
        alert('時間切れ!');
        result();
    }
},1000);
