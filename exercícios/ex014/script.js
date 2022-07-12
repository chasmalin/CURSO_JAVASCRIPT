//alert('olá');
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 19;
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. (=`;
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = '../aula12_exercicios/imagens/amanha.png';
        document.body.style.background = '#9ca85e';
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = '../aula12_exercicios/imagens/atarde.png';
        document.body.style.background = '#ad6200';
    } else{
        //boa noite
        img.src = '../aula12_exercicios/imagens/anoite.png';
        document.body.style.background = '#000051';
    }
}
