const buttom = document.getElementById('btn');
buttom?.addEventListener('click',vacaciones);
const costoXkm = 3;


function vacaciones(){

let salir = String(document.getElementById('salir').value);
let aDonde = document.querySelector('#aDondeIP');
let aDonde2 = document.querySelector('#aDondeTx');
let adonde = String(document.getElementById('aDondeIP').value);


if(salir == 'S' || salir == 's'){



aDonde.style.visibility = "visible";
aDonde2.style.visibility = "visible";

if(adonde == 'm'){
    total = costoXkm * 750;
    let divImprimir = `<div class="alert alert-primary">Usted decea salir a mexico son : 750 KM <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;



}else if(adonde == 'mo'){

    total = costoXkm * 800;
    let divImprimir = `<div class="alert alert-primary"> Usted decea salir a monterrey son : 800 KM <br> Total a pagar $${total} </div>`;
ZonePrint.innerHTML = divImprimir;

}else if(adonde == 'a'){

    total = costoXkm * 1200;
    let divImprimir = `<div class="alert alert-primary"> Usted decea salir a Acapulco son : 1200 KM <br> Total a pagar $${total} </div>`;
ZonePrint.innerHTML = divImprimir;

}else if(adonde == 'c'){

    total = costoXkm * 1800;
    let divImprimir = `<div class="alert alert-primary"> Usted decea salir a Cancun son : 1800 KM <br> Total a pagar $${total} </div>`;
ZonePrint.innerHTML = divImprimir;

}else {
    let divImprimir = `<div class="alert alert-primary"> El destino no esta disponible por el momento </div>`;
ZonePrint.innerHTML = divImprimir;}

}else if(salir == 'n'){
    let divImprimir = `<div class="alert alert-primary"> Usted no decea salir </div>`;
ZonePrint.innerHTML = divImprimir;
}


}


