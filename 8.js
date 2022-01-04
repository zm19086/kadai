function nazo8(){
    if(document.getElementById('answer8').value=='夢'){
        alert('あたり!');T();}
else if(document.getElementById('answer8').value=='ゆめ'){
    alert('あたり!');T();}
else if(document.getElementById('answer8').value=='yume'){
    alert('あたり!');T();}
else if(document.getElementById('answer8').value=='YUME'){
    alert('あたり!');T();}
else{alert('はずれ!');}
}

function T(){
    add();
    window.location.href="./9.html";
}