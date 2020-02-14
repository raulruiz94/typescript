let metros ,total;
const pulgada = 39.3701;

let buttom = document.getElementById('btn');

buttom?.addEventListener('click' , convertir);


function convertir(){

// alert("ya jalo");


metros = Number(document.getElementById('Metros').value);

total = metros * pulgada ;

let imprimir = document.getElementById('imprimir');

imprimir.innerText = total + " Pulgadas";

}