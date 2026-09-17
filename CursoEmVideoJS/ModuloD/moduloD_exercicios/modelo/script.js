function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 6 && hora < 12){
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
        img.src = 'img/manha.png'
        document.body.style.background = 'rgb(223, 194, 31)';
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
        img.src = 'img/tarde.png'
        document.body.style.background = 'rgb(223, 133, 31)';
    } else{
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
        img.src = 'img/noite.png'
        document.body.style.background = 'rgb(38, 13, 59)';
    }
}