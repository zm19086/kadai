function nazo7(){
    if(document.getElementById('answer7').value=='夢'){
        alert('あたり!');T();}
else if(document.getElementById('answer7').value=='ゆめ'){
    alert('あたり!');T();}
else if(document.getElementById('answer7').value=='yume'){
    alert('あたり!');T();}
else if(document.getElementById('answer7').value=='YUME'){
    alert('あたり!');T();}
else{alert('はずれ!');}
}

function T(){
    add();
    window.location.href="./8.html";
}