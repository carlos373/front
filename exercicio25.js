
var n1 = parseInt(prompt("Digite um numero"))

var primo = true;

if( n1 <2){
    primo = false;
}else{
    for ( var i = 2; i < n1; i++){
        if ( n1 % i===0){
            primo = false;
            break;
        }else{
            continue
        }
    }
}

fi (primo){
    document.write(`${n1} é um numero primo`);
} else {
    document.write(`${n1} não é um numero primo`);
}