const button = document.getElementById('btn');
button?.addEventListener('click',calcularBono);

function calcularBono(){

let antiguedad = Number(document.getElementById('antiguedad').value);
let sueldo = Number(document.getElementById('sueldo').value);



if(antiguedad > 2 && antiguedad < 5 && sueldo <= 1000){

total = sueldo *.20;
total = sueldo + total;
alert('Rango 2 a 5 $' + total);

}if( antiguedad > 5 && sueldo >= 1000 ){
        total = sueldo * .30;
        total = sueldo +total;
    alert("mas de 5 años $" + total);

}

if(sueldo < 1000){
    total = sueldo * .25;
    total = sueldo +total;
alert("menos de $1000 $" + total);
}if( sueldo > 1000 && sueldo <= 3500){
    total = sueldo * .15;
    total = sueldo +total;
alert("entre $1000 y $3500 $" + total);

}if(sueldo > 3500){
    total = sueldo * .10;
    total = sueldo +total;
alert("mas de $3500 $" + total);

}


}