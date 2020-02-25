const buttom = document.getElementById('btn');
buttom?.addEventListener('click',nose);


function nose(){

let numero1 = Number(document.getElementById('numero1').value);
let numero2 = Number(document.getElementById('numero2').value);
let numero3 = Number(document.getElementById('numero3').value);

if(numero1 > numero2 && numero1 > numero3 && numero2 > numero3){


    alert("el mayor es " + numero1 + " El menor es " + numero3 + "El numero " + numero2 + "queda en medio") ;

    alert(numero1 + '-' + numero2 + '-' + (numero3))

}else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2){

    alert("el mayor es " + numero1 + " El menor es " + numero2 + "El numero " + numero3 + " queda en medio") ;
    alert(numero1 + '-' + numero3 + '-' + (numero2))

}

//////////////////////////////////7/////////////////////////////////////////////////////////////7/////////////////////////////

if(numero2 > numero1 && numero2 > numero3 && numero1 > numero3){


    alert("el mayor es " + numero2 + " El menor es " + numero3 + "El numero " + numero1 + "queda en medio") ;
-
    alert(numero2 + '-' + numero1 + '-' + (numero3))

}else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1){

    alert("el mayor es " + numero2 + " El menor es " + numero1 + "El numero " + numero3 + "queda en medio") ;
    alert(numero2 + '-' + numero3 + '-' + (numero1))

}

//////////////////////////////////7/////////////////////////////////////////////////////////////7/////////////////////////////
if(numero3 > numero1 && numero3 > numero2 && numero2 > numero1){


    alert("el mayor es " + numero3 + " El menor es " + numero1 + "El numero " + numero2 + "queda en medio") ;

    alert(numero3 + '-' + numero2 + '-' + (numero1))
}else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2){

    alert("el mayor es " + numero3 + " El menor es " + numero2 + "El numero " + numero1 + "queda en medio") ;
    alert(numero3 + '-' + numero1 + '-' + (numero2))

}

}