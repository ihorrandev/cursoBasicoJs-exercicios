function tabuada(){
    var num = document.getElementById('numero'); 
    var btn = document.getElementById("btn");
    var select = document.getElementById('seltab'); 

    if (num.value.length ==0){
        alert('Registre algum número para fazer a tabuada')
    }else {
        var n = num.value; 
        var i = 1
        select.innerHTML= ''
        while (i <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value= `tab${c}`
            select.appendChild(item);
            i++;
        }
    }
}