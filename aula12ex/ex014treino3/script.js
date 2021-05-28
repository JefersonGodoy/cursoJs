function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    
    if (hora >=0 && hora < 12) {
        img.src='image/fotomanha.png'
        document.getElementById('saudacao').innerHTML = 'Bom dia!'
        document.body.style.background = '#45D6CC'
    } else if (hora >= 12 && hora <= 17) {
        img.src='image/fototarde.png'
        document.getElementById('saudacao').innerHTML = 'Boa tarde!'
        document.body.style.background = '#F79E20'
    } else {
        img.src='image/fotonoite.png'
        document.getElementById('saudacao').innerHTML = 'Boa noite!'
        document.body.style.background = '#25265C'
    }
}