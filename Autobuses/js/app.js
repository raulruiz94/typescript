const buttom = document.getElementById('btn');
buttom?.addEventListener('click' ,tarifa);

function tarifa(){

let bus = String(document.getElementById('TipoDeAutobus').value);
let km = Number(document.getElementById('KilometrosRecorridos').value);
if(bus == 'A' || bus == 'a'){

    total = km * 1.5;

    let divImprimir = `<div class="alert alert-primary">El precio seria a : $1.5 <br> Total a pagar $${total} </div>`;
    ZonePrint.innerHTML = divImprimir;

}else if(bus == 'B' || bus == 'b'){
    total = km * 2;
    let divImprimir = `<div class="alert alert-primary">El precio seria a : $2.0 <br> Total a pagar $${total} </div>`;
    ZonePrint.innerHTML = divImprimir;
}else if(bus == 'C' || bus == 'c'){
    total = km * 2.5;
    let divImprimir = `<div class="alert alert-primary">El precio seria a : $2.5 <br> Total a pagar $${total} </div>`;
    ZonePrint.innerHTML = divImprimir;
}else if(bus == 'D' || bus == 'd'){
    total = km * 3;
    let divImprimir = `<div class="alert alert-primary">El precio seria a : $3.0 <br> Total a pagar $${total} </div>`;
    ZonePrint.innerHTML = divImprimir;
}
}
