let x1 , y1 ,x2 , y2 , punto1,punto2,resultado , punto1alcuadrado,punto2alcuadrado,distancia2;



let buttom = document.getElementById('btn');
buttom?.addEventListener('click', distancia);




function distancia(){

console.log("si jaloooooo");
x1 = Number(document.getElementById('x1').value);
y1 = Number(document.getElementById('y1').value);
x2 = Number(document.getElementById('x2').value);
y2 = Number(document.getElementById('y2').value);

punto1 = x2 - x1;
punto2 = y2 - y1;

punto1alcuadrado = Math.pow(punto1 ,2);
punto2alcuadrado = Math.pow(punto2 ,2);

distancia2 = punto1alcuadrado + punto2alcuadrado;
distanciaTotal = Math.sqrt(distancia2); 



let imprimir = document.getElementById('imprimir');

imprimir.innerText = "La Distancia entre A y B es : " + distanciaTotal;

}