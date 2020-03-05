function nventas() {
  const numeroDeVentas = Number(prompt("Ingrese numero de ventas"));

  let acumuladorMayor = 0;
  let acumuladorMenor = 0;
  let acumuladorMenorMenor = 0;
  let acumuladorCantidad = 0;
  let acumuladorCantidadMe = 0;
  let acumuladorCantidadMeMe = 0;
 

  for (x = 1; x <= numeroDeVentas; x++) {
      
    let numero = Number(prompt(`Cantidad ${x}`));

    
    if (numero >= 1000) {
      acumuladorMayor++;
      
      acumuladorCantidad = acumuladorCantidad + numero;

    
    }
    else if (numero >= 500 && numero <=1000){
        acumuladorMenor++;
      
        acumuladorCantidadMe = acumuladorCantidadMe + numero;
     
    }
    else if(numero <= 500){

        acumuladorMenorMenor++;
        acumuladorCantidadMeMe = acumuladorCantidadMeMe + numero;


    }
    
  }
  alert(`Mayor ${acumuladorMayor}`);
  alert (`Total de ventas mayores a $1000 :    $${acumuladorCantidad}`)

  alert(`Menor ${acumuladorMenor}`);
  alert (`Total de ventas mayores a $500 pero menores a $1000 :    $${acumuladorCantidadMe}`)
  
  alert(`Menor a $500 ${acumuladorMenorMenor}`);
  alert (`Total de ventas menor a $500 :    $${acumuladorCantidadMeMe}`)
  
}
nventas();
