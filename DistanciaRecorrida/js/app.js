//50 metros por segundo


// let metros;
const vConstante = 10;
let total;
let tiempo;


let buttom = document.getElementById('btn');

buttom?.addEventListener('click',distancia);

function distancia(){


console.log('Sii jalo prro');

// metros = Number(document.getElementById('IpMetros').value);
tiempo = Number(document.getElementById('IpTiempo').value);

total = tiempo * vConstante;

let imprimirVelocidad = document.getElementById('imprimirVelocidad');

imprimirVelocidad.innerText = total + ' M/s ';


}

