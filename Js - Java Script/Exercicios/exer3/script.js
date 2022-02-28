var inicio = document.getElementById ('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo'); 
var btn = document.getElementById ('btn'); 
var result = document.getElementById('result');
var input = document.getElementsByTagName('input')[2]; 

btn.addEventListener('click', clicar); 
function clicar(){
    if (input.value.length == 0 || inicio.value.length == 0 ||fim.value.length == 0 ||passo.value.length == 0){
        result.innerHTML = '[ERROR] - Digite os números no formulário!! Impossivel contar';
        result.style.color = 'red';
    }else{ 
        var i = Number (inicio.value);
        var f = Number (fim.value);
        var p = Number (passo.value);
        if (p <= 0){
            window.alert('Passo invalido! Redirecionando o valor para Passo = 1')
            p = 1; 
        }
        if(i<f){
            for(var c = i; c<= f; c += p){
                result.innerHTML +=`${c} \u{1F449}`	
            }
        result.innerHTML += `\u{1F6F8}`
        }else {
            for(var c = i; c >= f; c -= p){
                result.innerHTML +=`${c} \u{1F449}`	
            }
        result.innerHTML += `\u{1F6F8}`
        }
    }
}