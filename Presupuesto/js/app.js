const buttom = document.getElementById('btn');
buttom?.addEventListener('click',desarrollo);

function desarrollo(){

let presupuesto = Number(document.getElementById('presupuesto').value);
let articulo1 = Number(document.getElementById('articulo1').value);
let articulo2 = Number(document.getElementById('articulo2').value);
let articulo3 = Number(document.getElementById('articulo3').value);
let articulo4 = Number(document.getElementById('articulo4').value);

let subtotal = articulo1 + articulo2 + articulo3 + articulo4;


let PrintAlert = `<div class="alert alert-primary"> ${subtotal} </div>`;

ZonePrint.innerHTML = PrintAlert;

if(subtotal <= presupuesto){

    
    let PrintAlert = `<div class="alert alert-primary"> Su presupuesto si alcanza ${presupuesto} </div>`;

ZonePrint.innerHTML = PrintAlert;
}else {

        
    let PrintAlert = `<div class="alert alert-primary"> Su presupuesto no alcanza ${presupuesto} </div>`;

ZonePrint.innerHTML = PrintAlert;
}

}

