let b = Number(prompt("ingrese numero para detener"));

for (a=1; a <= b; a++) {     //(a=1) (a) se va a detener cuando sea menor o igual a (b) = numero introducido en el prompt (a) incremetara de 1 en una  


  let conta = 0;                //contador es igual a 0

  for(let  m=1; m<=a;m++){                  // (m = 1) (m) va a seguir hasta que sea menor o igual (a) = numero introducido en el prompt y que aumenta 
                                            //de uno en uno por el primer for

  if(a%m ==0){                              //si a / m ==0  (1/1 residuo = 0) si se cumple
      conta++;                                          //contador va incrementar si se cumple if 1
  }
  }
  if (conta==2){                                        //si contador == 2 el numero es primo 
      console.log(a)
  }
}
