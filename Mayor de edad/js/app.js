
const buttom = document.getElementById('btn');

buttom?.addEventListener('click',Comparacion);


function Comparacion(){


    console.log("Hola");

    let nombre1 = String(document.getElementById('IpNombre1').value);
    let nombre2 = String(document.getElementById('IpNombre2').value);



    
    let edad1 = Number(document.getElementById('IpEdad1').value);
    let edad2 = Number(document.getElementById('IpEdad2').value);



    if(edad1 > edad2)
    {



        let ImpriAlert = document.getElementById('ImpriAlert');
        ImpriAlert.innerText = "El mayor de edad es : " + nombre1 + " " + "Con  " + edad1 + " Años";

    }else{

   
        let ImpriAlert = document.getElementById('ImpriAlert');
        ImpriAlert.innerText = "El mayor de edad es : " + nombre2 + " " + "Con  " + edad2 + " Años";

    }




    
    

}