


let radio;
const pi = 3.1416;
let resultado;


let buttom = document.getElementById('btnArea');
buttom?.addEventListener('click',area);

function area(){

radio = Number(document.getElementById('radio').value);

// resultado = pi * (radio*radio);

radioElevado = Math.pow(radio ,2);
resultado = radioElevado * Math.PI;

let ImprimirResultado = document.getElementById('ImprimirResultado');
ImprimirResultado.innerText = 'La Area Es :'+ resultado;
// console.log (Math.PI);
}



//pi *radio al cuadrado