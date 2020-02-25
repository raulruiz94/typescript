const buttom = document.getElementById('btn');

buttom?.addEventListener('click',CompararNumeros)
const PrintAlert = document.getElementById('PrintAlert');

function CompararNumeros(){

const numero1 = Number(document.getElementById('inputvalue1').value);
const numero2 = Number(document.getElementById('inputvalue2').value);
const numero3 = Number(document.getElementById('inputvalue3').value);



if(numero1 > numero2){

          if(numero1 > numero3){
PrintAlert.innerText = numero1;
          
        
}else{

    PrintAlert.innerText = numero3;
}
}
else if(numero2 > numero3){

    PrintAlert.innerText = numero2;

}else{

    PrintAlert.innerText = numero3;
}
}
