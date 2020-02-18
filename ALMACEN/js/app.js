
const descuento = 1000;
const buttom = document.getElementById('btn');

buttom?.addEventListener('click',cantidadTotal);




function cantidadTotal(){


let cantidad = Number(document.getElementById('IpCantidadV').value);



if(cantidad > descuento){


    console.log("soy Mayor a 1000");

    subtotal = cantidad * .20;

    total =  cantidad - subtotal;

let ImpriAlert = document.getElementById('ImpriAlert');

ImpriAlert.innerText = 'Su compra si alcanza para el 20% de descuento : $' + total;



}else {
   ImpriAlert.innerText = 'Su compra no alcanza para el 20% de descuento : $' + cantidad;
}


}