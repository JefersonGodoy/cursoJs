function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =12// data.getHours()
    //var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src="image/fotomanha.png"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src="image/fototarde.png"
    } else {
        //Boa noite
        img.src="image/fotonoite.png"
    }
}
