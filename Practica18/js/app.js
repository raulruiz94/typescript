numeroDeAutos= Number(prompt("Ingrese numero de automoviles"))
let acumulador=0;
let acumuladorTotal=0;
acumulador2=0
acumulador3=0
acumuladorTotal2=0
acumuladorTotal3=0
for(x=1;x<=numeroDeAutos;x++){
let precio = Number(prompt("Pecio del automovil"))
let clave = Number(prompt("Clave"))
total=0;

if(clave ==1){

    acumulador++;
 
    total = precio * .10;
    acumuladorTotal= acumuladorTotal+total;
    document.write(` Impuesto por el auto ${x} $${total} <br>`)

   

}

if(clave ==2){

    acumulador2++;

    total2 = precio * .07;

    acumuladorTotal2= acumuladorTotal2+total2;
    document.write(` Impuesto por el auto ${x} $${total2} <br>`)
}
if(clave ==3){
    acumulador3++;

    total3 = precio * .05;
    acumuladorTotal3= acumuladorTotal3+total3;
    document.write(` Impuesto por el auto ${x} $${total3} <br>`)

}
}

document.write(" numero de carros con clave 1 = "+acumulador+"<br>")
document.write(" Impuesto por el total de autos con categoria 1 = $ "+acumuladorTotal+"<br>") //todos los autos


document.write(" numero de carros con clave 2 = "+acumulador2+"<br>")
document.write(" Impuesto por el total de autos con categoria 2 = $ "+acumuladorTotal2+"<br>") //todos los autos

document.write(" numero de carros con clave 3 = "+acumulador3+"<br>")
document.write(" Impuesto por el total de autos con categoria 3 = $ "+acumuladorTotal3+"<br>")
 //todos los autos
document.write(" Impuesto total de todos los autos = $ "+(acumuladorTotal2 + acumuladorTotal+ acumuladorTotal3)+"<br>") //todos los autos