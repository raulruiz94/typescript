const buttom = document.getElementById('btn');
buttom?.addEventListener('click',costo);
const A = 95 , B = 85 , C = 75;

function costo(){

    let personas = Number(document.getElementById('NPersonas').value);



if(personas > 200 && personas <= 300){

   let total = personas * B;
 let divImprimir = `<div class="alert alert-primary">El precio seria a : $ ${B} <br> Total a pagar $${total} </di>`;
  ZonePrint.innerHTML = divImprimir;




    
}else if(personas > 300){
   let total = personas * C;
   let divImprimir = `<div class="alert alert-primary">El precio seria a : $ ${C} <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;

}else if(personas <= 200){
   let total = personas * A;
   let divImprimir = `<div class="alert alert-primary">El precio seria a : $ ${A} <br> Total a pagar $${total} </di>`;
    ZonePrint.innerHTML = divImprimir;

}

}