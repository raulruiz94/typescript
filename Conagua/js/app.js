let MCubicos , total , resultado;
const valorMCubico = 1000;
const costoPorLitro = 1.3;


let buttom = document.getElementById('btn');
buttom?.addEventListener('click', metro);

function metro(){


    console.log("Holaaaaa");

    MCubicos = Number(document.getElementById('mc').value);

    resultado = MCubicos * valorMCubico * costoPorLitro;

    let imprimir = document.getElementById('imprimir');

    imprimir.innerText = "Total a pagar : $" + resultado;
}