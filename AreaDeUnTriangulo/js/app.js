//base * altura / 2

let base;
let altura;
let resultado;

let buttom = document.getElementById('btnArea');
buttom?.addEventListener('click',area);

function area(){

base = Number(document.getElementById('base').value);
altura = Number(document.getElementById('altura').value);

resultado = base * altura / 2;

let ImprimirResultado = document.getElementById('ImprimirResultado');
ImprimirResultado.innerText = 'La Area Es :'+resultado;
}