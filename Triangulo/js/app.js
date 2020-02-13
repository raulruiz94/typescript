let lado1;
let lado2;
let lado3;
let perimetro1;
let area;

let buttom = document.getElementById('btn');

buttom?.addEventListener('click',perimetro);


function perimetro(){

    lado1 = Number (document.getElementById('lado1').value);
    lado2 = Number(document.getElementById('lado2').value);
    lado3 = Number(document.getElementById('lado3').value);


    perimetro1 = (lado1 + lado2 + lado3) / 2;

    per2 = perimetro1 -lado1;
    per3 = perimetro1 -lado2;
    per4 = perimetro1 -lado3;

    perimetro5 = perimetro1 * per2 * per3 * per4;

    area = Math.sqrt(perimetro5);

    let imprimirPerimetro = document.getElementById('ImprimirPerimetro');

    imprimirPerimetro.innerText = area;




}