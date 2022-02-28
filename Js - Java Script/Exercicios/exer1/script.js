function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date(); 
    var hora = data.getHours();
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //DIA
        img.src = 'img/Manhã.png';
        document.body.style.background = 'rgb(255, 214, 139)'
    }else if (hora >= 12 && hora <= 18){
        //TARDE
        img.src = 'img/Tarde.png';
        document.body.style.background = 'rgb(235, 144, 59)' 
    }else{
        //noite
        img.src = 'img/Noite.png';
        document.body.style.background = 'rgb(63, 63, 62)' 
    }
}