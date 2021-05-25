
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //Bom dia
        img.src = 'image/fotomanha.png'
        document.body.style.background = '#EBBB30'
    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'image/fototarde.png'
        document.body.style.background = '#D28225'
    }else {
        //Boa noite
        img.src = 'image/fotonoite.png'
        document.body.style.background = '#333551'
    }
}