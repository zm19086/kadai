function nazo10(){
    if(document.getElementById('answer10').value=='夢'){
        alert('あたり!');T();}
else if(document.getElementById('answer10').value=='ゆめ'){
    alert('あたり!');T();}
else if(document.getElementById('answer10').value=='ユメ'){
    alert('あたり!');T();}
else if(document.getElementById('answer10').value=='yume'){
    alert('あたり!');T();}
else if(document.getElementById('answer10').value=='YUME'){
    alert('あたり!');T();}
else{alert('はずれ!');}
}

function T(){
    add();
    window.location.href="./result.html";
}