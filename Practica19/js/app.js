let acumuladorPares = 0;
let acumuladorImpares = 0;
x = 1;
let acumularopares = 0;
promedio = 0;
for (x = 1; x <= 5; x++) {
  let numero1 = parseInt(prompt("Escriba numero"));

  if (numero1 % 2 == 0) {
    acumularopares++;
    acumuladorPares = acumuladorPares + numero1;
 
    promedio = acumularopares;

  } else {
    acumuladorImpares = acumuladorImpares + numero1;
   
  }
}
document.write("Suma de los pares = " + acumuladorPares+"<br>");
document.write("Total de numeros pares = " + acumularopares+"<br>");
document.write("promedio pares = " + acumuladorPares/promedio+"<br>");

document.write("Suma de numeros impares = "+acumuladorImpares+"<br>");