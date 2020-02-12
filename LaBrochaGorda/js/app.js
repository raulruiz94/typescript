
let CostoPorMetro = 20;
let MetrosDeLargo;
let MetrosDeAncho;
let Resultado;
let Nombre="";

let buttom = document.getElementById('btnCosto');
buttom?.addEventListener('click', multi);

function multi() {
    Nombre = String(document.getElementById('name').value);
    MetrosDeLargo = Number(document.getElementById('MLargo').value);
    MetrosDeAncho = Number(document.getElementById('MAncho').value);

    Resultado = MetrosDeLargo * MetrosDeAncho * CostoPorMetro;

    let ImprimirResultado = document.getElementById('ImprimirResultado');

    ImprimirResultado.innerText = "Hola Sr " + Nombre + " El Total A Pagar Es : $" + Resultado;
}