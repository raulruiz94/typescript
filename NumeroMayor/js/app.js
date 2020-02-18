//variable local es adentro de la funcion
//variable global es afuera de las funciones 


const buttom = document.getElementById('btnComparar');

buttom?.addEventListener('click',compararNumeros);

function compararNumeros(){


    let Numero1= Number(document.getElementById('inNumero1').value);
    let Numero2= Number(document.getElementById('inNumero2').value);
    const DivAlert = document.getElementById('PrintAlert');

    if(Numero1>Numero2){

        DivAlert.innerText = "El numero mayor es A : "+ Numero1;
    }else{

        DivAlert.innerText = Numero2;
        DivAlert.innerText = "El numero mayor es B : "+ Numero2;

        
    }
    if (Numero1==Numero2){
        DivAlert.innerText = "Los Numeros Son Iguales " + Numero1 +  " Y " + Numero2;


    }
   

    





}
