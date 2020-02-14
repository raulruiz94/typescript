let dias ,total;
const hotel = 600 , comida = 250 , dinero = 100;

let buttom = document.getElementById('btn');
let imprimir = document.getElementById('imprimir');
buttom?.addEventListener('click' ,sumar);

function sumar(){


    dias = Number(document.getElementById('dias').value);

    total = hotel + comida + dinero;
    cheque = total * dias;
    imprimir.innerText = "Monto del cheque $" + cheque;




}