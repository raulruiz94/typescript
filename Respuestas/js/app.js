let RBien;
let RMal;
let RBlanco;
let total;
let bien = 4;
// let mal = -1;
let totalBien;
let totalBlanco;
let totalTodo;

let buttom = document.getElementById('btn');
buttom?.addEventListener('click',calcular);


function calcular(){

console.log('holiiii');

RBien = Number(document.getElementById('IpBien').value);
RMal = Number(document.getElementById('IpMal').value);
RBlanco = Number(document.getElementById('IpBlanco').value);

totalBien = RBien * bien;
totalMal = RMal * -1;
totalBlanco = RBlanco * 0;

totalTodo = totalBien + totalMal;

let imprimirResultado = document.getElementById('ImprimirResultado');

imprimirResultado.innerText = 'Resultado Final ' + totalTodo;



}
