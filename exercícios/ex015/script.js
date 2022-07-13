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
        if (fsex[0].checked){
            genero = 'Homem 👦🏻';
        } else if (fsex[1].checked){
            genero = 'Mulher 👧🏻';
        }
        res.style.textAlign = 'left';
        res.innerHTML = `${genero} de ${idade} anos.`
    }
        
}
