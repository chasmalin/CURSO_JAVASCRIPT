var agora = new Date();
var diaDaSemana = agora.getDay();
//console.log(diaDaSemana); // essa linha vai exibir um número
// ele considera os dias da semana como números, vamos usar isso pra aprender o switch case
switch(diaDaSemana){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-Feira');
        break;
    case 2:
        console.log('Terça-Feira');
        break;
    case 3:
        console.log('Quarta-Feira');
        break;
    case 4:
        console.log('Quinta-Feira');
        break;
    case 5:
        console.log('Sexta-Feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('ERRO');
        break;
}