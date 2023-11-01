function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    //var hora = data.getHours()
    var hora = 23
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FADD3F'
        msg.innerHTML = `Agora são ${hora} horas.`
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FBDCC7'
        msg.innerHTML = `Agora são ${hora} horas.`
    } else {
        // Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#81659F'
        msg.innerHTML = `Agora são ${hora} horas.`
    }
}