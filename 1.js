function nazo1(){
    if(document.getElementById('answer1').value=='夢'){
        alert('あたり!');T();}
else if(document.getElementById('answer1').value=='ゆめ'){
    alert('あたり!');T();}
else if(document.getElementById('answer1').value=='ユメ'){
    alert('あたり!');T();}
else if(document.getElementById('answer1').value=='yume'){
    alert('あたり!');T();}
else if(document.getElementById('answer1').value=='YUME'){
    alert('あたり!');T();}
else{alert('はずれ!');}
}

function T(){
    add();
    window.location.href="./2.html";
}