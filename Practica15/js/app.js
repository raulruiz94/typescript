            //4 ciudades  3 tiendas X ciudad 10 Empleados x tienda 

numeroDVentas = Number(prompt("Ingrese numero de ventas"))
let x =1;
let ciudad =1;
let acumuladorVenta=0;
let acumuladorVenta2=0;
let acumuladorVenta3=0;
let acumuladorVenta4=0;
let acumuladorVenta5=0;
let acumuladorVenta6=0;
let acumuladorVenta7=0;
let acumuladorVenta8=0;
let acumuladorVenta9=0;
let acumuladorVenta10=0;
let acumuladorVenta11=0;
let acumuladorVenta12=0;
    while(x<=numeroDVentas){

        x++;
     

        ciudad = Number(prompt("Numero de ciudad (1 a 2)"))
        tiendas = Number(prompt("Elija el numero de tienda (1 a 3)"))
        empleados = Number(prompt("Elija el numero de empleado de la tienda (1 a 3)"))
    
    if(ciudad == 1){

        alert("Aguascalientes")
    if(tiendas == 1){

        alert("Tienda 1")

        if(empleados == 1){
            alert("Empleado 1 ")
            venta = Number(prompt("Yo Empleado 1 Vendi La Cantidad De : "))
        acumuladorVenta = acumuladorVenta + venta;

     
        }
        if(empleados == 2){
            alert("Empleado 2 ")
            venta = Number(prompt("Yo Empleado 2 Vendi La Cantidad De : "))
            acumuladorVenta2 = acumuladorVenta2 + venta;

           
        }
        if(empleados == 3){
            alert("Empleado 3 ")
            venta = Number(prompt("Yo Empleado 3 Vendi La Cantidad De : "))
            acumuladorVenta3 = acumuladorVenta3 + venta;

        }

    }
  


//////////////////////////////////////////////////////////////////////////////////

    if(tiendas == 2){

            alert("Soy tienda 2")

            if(empleados == 1){
                alert("Soy el empleado 1 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta4 = acumuladorVenta4 + venta;
   
            }
            if(empleados == 2){
                alert("Soy el empleado 2 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta5 = acumuladorVenta5 + venta;
            
            }
            if(empleados == 3){
                alert("Soy el empleado 3 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta6 = acumuladorVenta6 + venta;
                   

            }
        }
       


        
 
 /////////////////////////////////////////////////////////////////////////////////////// 
      
    }
    if(ciudad == 2){

        alert("Monterrey")
    if(tiendas == 1){

        alert("Tienda 1")

        if(empleados == 1){
            alert("Empleado 1 ")
            venta = Number(prompt("Yo Empleado 1 Vendi La Cantidad De : "))
        acumuladorVenta7 = acumuladorVenta7 + venta;

     
        }
        if(empleados == 2){
            alert("Empleado 2 ")
            venta = Number(prompt("Yo Empleado 2 Vendi La Cantidad De : "))
            acumuladorVenta8 = acumuladorVenta8 + venta;

           
        }
        if(empleados == 3){
            alert("Empleado 3 ")
            venta = Number(prompt("Yo Empleado 3 Vendi La Cantidad De : "))
            acumuladorVenta9 = acumuladorVenta9 + venta;

        }

    }
  


//////////////////////////////////////////////////////////////////////////////////

    if(tiendas == 2){

            alert("Soy tienda 2")

            if(empleados == 1){
                alert("Soy el empleado 1 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta10 = acumuladorVenta10 + venta;
   
            }
            if(empleados == 2){
                alert("Soy el empleado 2 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta11 = acumuladorVenta11 + venta;
            
            }
            if(empleados == 3){
                alert("Soy el empleado 3 ")
                venta = Number(prompt("Ingrese La venta"))
                acumuladorVenta12 = acumuladorVenta12 + venta;
                   

            }
        }
        
    


        
 
 /////////////////////////////////////////////////////////////////////////////////////// 
      
    }

    
    }
    console.log("Aguascalientes")
    console.log("total de la tienda 1 Empleado 1  = "+acumuladorVenta)
    console.log("total de la tienda 1 Empleado 2  = "+acumuladorVenta2)
    console.log("total de la tienda 1 Empleado 3 = "+acumuladorVenta3)

    console.log("total de la tienda 2 Empleado 1 = "+acumuladorVenta4)
    console.log("total de la tienda 2 Empleado 2 = "+acumuladorVenta5)
    console.log("total de la tienda 2 Empleado 3 = "+acumuladorVenta6)
    totaltienda1 = acumuladorVenta +acumuladorVenta2 +acumuladorVenta3 +acumuladorVenta4 + acumuladorVenta5+ acumuladorVenta6;
    console.log("total vendido en AGS $"+ totaltienda1)

    totaltienda2 = acumuladorVenta7 +acumuladorVenta8 +acumuladorVenta9 +acumuladorVenta10 + acumuladorVenta11+ acumuladorVenta12;
console.log("Monterrey")
    console.log("total de la tienda 1 Empleado 1  = "+acumuladorVenta7)
    console.log("total de la tienda 1 Empleado 2  = "+acumuladorVenta8)
    console.log("total de la tienda 1 Empleado 3 = "+acumuladorVenta9)

    console.log("total de la tienda 2 Empleado 1 = "+acumuladorVenta10)
    console.log("total de la tienda 2 Empleado 2 = "+acumuladorVenta11)
    console.log("total de la tienda 2 Empleado 3 = "+acumuladorVenta12)

totaltodo=totaltienda1 + totaltienda2;
    console.log("Total De Todas las tiendas = "+ totaltodo)