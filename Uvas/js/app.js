const buttom = document.getElementById('btn');
const costo = 45;
const tipoA = .20;
const tipoB = .30;
const tamano2 = .50;
buttom?.addEventListener('click' ,procedimiento);


function procedimiento(){



let kilos = Number(document.getElementById('kilos').value);
let tipo = String(document.getElementById('tipo').value);
let tamano = Number(document.getElementById('tamano').value);



if(tipo == 'a' && tamano == 1){

    let Tipo = kilos * tipoA;
    let total = (kilos * costo) + Tipo;

    alert("Total A Pagar : $" + total);

}else if (tipo == 'a' && tamano == 2){

    let Tipo = kilos * tipoB;
    let total = (kilos * costo) + Tipo;

    alert("Total A Pagar : $" + total);
}
if (tipo == 'b' && tamano == 1){

    let Tipo = kilos * tipoB;
    let total = (kilos * costo) - Tipo;

    alert("Total A Pagar : $" + total);

}else if (tipo == 'b' && tamano == 2){

    let Tipo = kilos * tamano2;
    let total = (kilos * costo) - Tipo;

    alert("Total A Pagar : $" + total);
}



}