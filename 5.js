function nazo5(){
    if(document.getElementById('answer5').value=='夢'){
        alert('あたり!');T();}
else if(document.getElementById('answer5').value=='ゆめ'){
    alert('あたり!');T();}
else if(document.getElementById('answer5').value=='yume'){
    alert('あたり!');T();}
else if(document.getElementById('answer5').value=='YUME'){
    alert('あたり!');T();}
else{alert('はずれ!');}
}

function T(){
    add();
    window.location.href="./6.html";
}