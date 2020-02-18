
const buttom = document.getElementById('btn');

buttom?.addEventListener('click', Consultar);


function Consultar() {



    Edad1 = Number(document.getElementById('Edad1').value);
    Edad2 = Number(document.getElementById('Edad2').value);


    if (Edad1 > Edad2) {

        Resultado = Edad1 - Edad2;
        let PrintAlert = document.getElementById('PrintAlert');
        PrintAlert.innerText = " Hola soy el hermano 1 y soy mayor le gano con : " + Resultado + " años a mi hermano menor de " + Edad2;

    } else if (Edad2 > Edad1) {

        Resultado = Edad2 - Edad1;


        PrintAlert.innerText = Resultado;
        PrintAlert.innerText = " Hola soy el hermano 2 y soy mayor le gano con : " + Resultado + " años a mi hermano menor de " + Edad1;

    } else if (Edad1 == Edad2) {
        PrintAlert.innerText = " Es la misma edad no me quieras hacer pendejo jajajaj";


    }


}
