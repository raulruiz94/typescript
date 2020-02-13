let matricula;
let calificacion1 = 0;
let calificacion2;
let calificacion3;
let calificacion4;
let calificacion5;
let resultado;
let total;

let buttom = document.getElementById('btn');
let buttom2 = document.getElementById('btnBorrar');
buttom?.addEventListener('click',promedio);
buttom2?.addEventListener('click',borrar);


let alert = document.querySelector(".alert");
let alert2 = document.querySelector(".alert2");
let input = document.querySelector("#matricula");
let input2 = document.querySelector("#calificacion1");
let input3 = document.querySelector("#calificacion2");
let input4 = document.querySelector("#calificacion3");
let input5 = document.querySelector("#calificacion4");
let input6 = document.querySelector("#calificacion5");
let btnBorrar = document.querySelector("#btnBorrar");


function promedio(){
    alert2.style.visibility = "visible"
    alert.style.visibility = "visible";
    btnBorrar.style.visibility = "visible";
   

    console.log('siiiiii');
    matricula = Number(document.getElementById('matricula').value);
    calificacion1 = Number(document.getElementById('calificacion1').value);
    calificacion2 = Number(document.getElementById('calificacion2').value);
    calificacion3 = Number(document.getElementById('calificacion3').value);
    calificacion4 = Number(document.getElementById('calificacion4').value);
    calificacion5 = Number(document.getElementById('calificacion5').value);

    resultado = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5;
    total=resultado / 5;

    let imprimirMatricula = document.getElementById('ImprimirMatricula');
    let imprimirPromedio = document.getElementById('ImprimirPromedio');
    
    imprimirMatricula.innerText = ' Matricula del alumno : ' + matricula;
    imprimirPromedio.innerText = 'Promedio : ' + total;


}
function borrar(){
    alert2.style.visibility = "hidden";
    alert.style.visibility = "hidden";
    input.value ="";
    input2.value ="";
    input3.value ="";
    input4.value ="";
    input5.value ="";
    input6.value ="";
    btnBorrar.style.visibility ="hidden";
    



}