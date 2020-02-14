let cateto1 , cateto2 , total;

let buttom = document.getElementById('btn')
let imprimir = document.getElementById('imprimir');
buttom?.addEventListener('click' , hipotenusa);

function hipotenusa(){



    cateto1 = Number(document.getElementById('cateto1').value);
    cateto2 = Number(document.getElementById('cateto2').value);

    total = Math.pow(cateto1,2) + Math.pow(cateto2 , 2);
    hipotenusa1 = Math.sqrt(total);
   

    imprimir.innerText = hipotenusa1;
}