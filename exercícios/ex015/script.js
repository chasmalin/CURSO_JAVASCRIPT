// alert('olá');
function verificar(){
    //alert('FUNCIONOU!');
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano'); //formulário ano
    //var res = document.getElementById('res');
    //essa maneira de baixo é "mais moderna"
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else{
        //alert('ok');
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada ${idade}`;
        var genero = '';
        //res.style.textAlign = 'left';
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >=0 && idade < 10){
                res.innerHTML = `${genero} de ${idade} anos 👶🏻 🧒🏻.`
            } else if (idade < 21){
                res.innerHTML = `${genero} de ${idade} anos 🧒🏻.`
            } else if (idade < 65){
                res.innerHTML = `${genero} de ${idade} anos 👨🏻.`
            } else{
                res.innerHTML = `${genero} de ${idade} anos 👨🏼‍🦳.`
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >=0 && idade < 10){
                res.innerHTML = `${genero} de ${idade} anos 👶🏻 👧🏻.`
            } else if (idade < 21){
                res.innerHTML = `${genero} de ${idade} anos 👧🏻.`
            } else if (idade < 65){
                res.innerHTML = `${genero} de ${idade} anos 👩🏻.`
            } else{
                res.innerHTML = `${genero} de ${idade} anos 👩🏼‍🦳.`
            }
        }
    }
    // PARA COLOCAR IMAGENS FICARIA ASSIM:
    var img = document.createElement('img');
    img.setAttribute('src','anoite.png');
    res.appendChild(img);
}
