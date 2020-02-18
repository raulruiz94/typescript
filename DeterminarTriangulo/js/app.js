const buttom = document.getElementById('btn');

buttom?.addEventListener('click' , verificar);
const PrintAlert = document.getElementById('PrintAlert');

function verificar(){


Longitud1 = Number(document.getElementById('L1').value);
Longitud2 = Number(document.getElementById('L2').value);
Longitud3 = Number(document.getElementById('L3').value);

if( Longitud1 === Longitud2 && Longitud2 === Longitud3 && Longitud1 === Longitud3){

    PrintAlert.innerText = "Las Longitudes son iguales es un triangulo EQUILATERO";

}else if( Longitud1 === Longitud2 || Longitud2 === Longitud3 || Longitud1 === Longitud3){
PrintAlert.innerText = "2 lados son iguales es un triangulo ISOSELES"
}else if(Longitud1 !== Longitud2 && Longitud2 !== Longitud3 && Longitud1 !== Longitud3){
            PrintAlert.innerText = 'Todos los lados son diferentes es un triangulo ESCALENO';
}

}