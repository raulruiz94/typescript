function meses() {




let acumuladormes = 0 ,mes = 10;
let acumuladorcantidad = acumuladormes;
let precio = Number(prompt("Ingrese el precio del articulo"));

  for (let x = 1; x <= 20; x++) {

acumuladormes = acumuladormes + mes;
acumuladorcantidad = acumuladormes + acumuladorcantidad;

 alert(`Total a pagar mes ${x} : $${acumuladormes}`)
 

 
}
alert("Interes que pago a 20 meses : $"+acumuladorcantidad)
alert(`El producto le costo a : $${precio}`)
alert(`Total con interes a 20 meses : $${precio + acumuladorcantidad}`)
}
meses();
