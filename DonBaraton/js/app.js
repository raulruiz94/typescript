const buttom = document.getElementById('btn');

buttom?.addEventListener('click',descuento);

function descuento(){

let costo = Number(document.getElementById('CostoDeTraje').value);


if(costo > 3600){

    let subtotal = costo * .16 ;
    let total = costo - subtotal;

    let divImprimir = `<div class="alert alert-primary">  Total a pagar $${total} </div>`;
        ZonePrint.innerHTML = divImprimir;
    
}else{

    let subtotal = costo * .07;
    let total = costo - subtotal;
    let divImprimir = `<div class="alert alert-primary"> Total a pagar $${total} </div>`;
    ZonePrint.innerHTML = divImprimir;


}


}