var btn = window.document.getElementById('btn');

btn.addEventListener('click', verificar); 
function verificar(){
    var data = new Date(); 
    var ano = data.getFullYear(); 
    var formAno = document.getElementById('nas');
    var res = document.getElementById('result');

    if (nas.value.length == 0 || nas.value > ano){
        res.innerHTML = '[ERRO] Verifique seus dados e tente novamente';
        res.style.color = 'red'
    }else {
        var formGen = document.getElementsByName ('genero');
        var idade = ano - formAno.value;
        var genero = '';
        if (formGen[0].checked){
            genero = 'homem';
            if (idade >= 0 && idade < 12){
                res.innerHTML = `Detectamos que você é: Uma criança de ${idade} anos e é um ${genero}`; 
            }else if (idade >= 13 && idade <= 17){
                res.innerHTML = `Detectamos que você é: Um adolescente de ${idade} anos e é um ${genero}`; 
            }else if (idade >= 18 && idade <= 70){
                res.innerHTML = `Detectamos que você é: Um adulto de ${idade} anos e é um ${genero}`;
            }else res.innerHTML = `Detectamos que você é: Um idoso de ${idade} anos e é um ${genero}`; 

        }else if (formGen[1].checked){
            genero = 'mulher';
            if (idade > 0 && idade < 12){
                res.innerHTML = `Detectamos que você é: Uma criança de ${idade} anos e é uma ${genero}`;
            }else if (idade > 13 && idade < 17){
                res.innerHTML = `Detectamos que você é: Uma adolescente de ${idade} anos e é uma ${genero}`; 
            }else if (idade > 18 && idade < 70){
                res.innerHTML = `Detectamos que você é: Uma adulta de ${idade} anos e é uma ${genero}`;
            }else res.innerHTML = `Detectamos que você é: Uma idosa de ${idade} anos e é uma ${genero}`;
            
        }
        res.style.textAlign = 'center'
    }
}