let elapsedTime = 180;
function wrightTime(){
    document.getElementById("time").textContent = '残り' + elapsedTime + '秒';
}
wrightTime();

const timerId = setInterval(function(){
    elapsedTime--;
    wrightTime();
    if (elapsedTime === 0){
        clearInterval(timerId);
        alert('時間切れ!');alert(score + '問正解!');
    }
},1000);