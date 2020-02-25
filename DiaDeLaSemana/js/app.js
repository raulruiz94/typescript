const buttom = document.getElementById('btn');

buttom?.addEventListener('click', desifrarDia)


function desifrarDia(){

let dia = Number(document.getElementById('selectDia').value);

if(dia == 1){

  


    let divImprimir = `<div class="alert alert-primary">Lunes</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 2){

  


    let divImprimir = `<div class="alert alert-primary">Martes</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 3){

  


    let divImprimir = `<div class="alert alert-primary">Miercoles</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 4){

  


    let divImprimir = `<div class="alert alert-primary">Jueves</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 5){

  


    let divImprimir = `<div class="alert alert-primary">Viernes</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 6){

  


    let divImprimir = `<div class="alert alert-primary">Sabado</di>`;
    ZonePrint.innerHTML = divImprimir;
}
if(dia == 7){

  


    let divImprimir = `<div class="alert alert-primary">Domingo</di>`;
    ZonePrint.innerHTML = divImprimir;
}
else{
    let divImprimir = `<div class="alert alert-primary">No es un dia de la semana</di>`;
    ZonePrint.innerHTML = divImprimir;
}

}