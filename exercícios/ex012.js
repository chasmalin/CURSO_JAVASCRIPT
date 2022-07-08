var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();
console.log(`Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos.`);
if(hora < 12){
    console.log('bom dia');
}else if(hora <= 18){
    console.log('boa tarde');
}else{
    console.log('boa notchê');
}