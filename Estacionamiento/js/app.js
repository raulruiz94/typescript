let buttom = document.getElementById('btn');
buttom?.addEventListener('click',cobro);


function cobro(){

let horas = Number(document.getElementById('horas').value);

if(horas <= 2){
total = horas * 5;
 let divImprimir = `<div class="alert alert-primary">El precio seria a : $5.0 <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;
}else if(horas >= 3 && horas <= 4){
    total = horas * 4;
 let divImprimir = `<div class="alert alert-primary">El precio seria a : $4.0 <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;


}else if(horas >= 5 && horas <= 10){

    total = horas * 3;
     let divImprimir = `<div class="alert alert-primary">El precio seria a : $3.0 <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;
}else if(horas > 10){
    total = horas * 2;
     let divImprimir = `<div class="alert alert-primary">El precio seria a : $2.0 <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;
}
}