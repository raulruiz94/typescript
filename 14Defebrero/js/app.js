const button = document.getElementById('btn');
button?.addEventListener('click', proceso);


function proceso(){

let presupuesto = Number(document.getElementById('presupuesto').value);

if(presupuesto >= 5 && presupuesto <=10){
alert("puedes comprar una tarjeta");
}

if(presupuesto >= 11 && presupuesto <= 100){
alert("Puedes comprar chocolates" )
}

if(presupuesto >= 101 && presupuesto <= 250){
alert("Puedes comprar flores" )
}
if(presupuesto >= 251){
alert("Puedes comprar anillo" )
}
else if(presupuesto <= 4) {
    alert("no puedes comprar nada");
}
}
