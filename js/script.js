//　　制限時間を２１０秒（３分半）に設定

let elapsedTime = 210;

// 残り時間の表示

function wrightTime(){
    document.getElementById("time").textContent = '残り' + elapsedTime + '秒';
}
wrightTime();

// setIntervalを使ったカウントダウンタイマー

const timerId = setInterval(function(){
    elapsedTime--;
    wrightTime();
    if (elapsedTime === 0){
        clearInterval(timerId);
        alert('時間切れ!');
        next10();
    }
},1000);