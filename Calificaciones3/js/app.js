const buttom = document.getElementById('btn');
buttom?.addEventListener('click', notas);


function notas() {

    let practica1 = Number(document.getElementById('practica1').value);
    let practica2 = Number(document.getElementById('practica2').value);
    let practica3 = Number(document.getElementById('practica3').value);
    let practica4 = Number(document.getElementById('practica4').value);

    if (practica1 > practica2 && practica1 > practica3 && practica1 > practica4) {




        if (practica2 < practica3 && practica2 < practica4) {

            let resultado = (practica1 + practica3 + practica4) / 3;


            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 2 por ser menor (${practica2})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }

        if (practica3 < practica2 && practica3 < practica4) {

            let resultado = (practica1 + practica2 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 3 por ser menor (${practica3})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
        if (practica4 < practica3 && practica4 < practica1) {
     
            let resultado = (practica1 + practica2 + practica3) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 4 por ser menor (${practica4})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////


    if (practica2 > practica1 && practica2 > practica3 && practica2 > practica4) {


    

        if (practica3 < practica4 && practica3 < practica1) {
   

            let resultado = (practica1 + practica2 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 3 por ser menor (${practica3})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }

        if (practica1 < practica3 && practica1 < practica4) {
       
            let resultado = (practica3 + practica2 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 1 por ser menor (${practica1})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
        if (practica4 < practica3 && practica4 < practica1) {
            
            let resultado = (practica1 + practica2 + practica3) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 4 por ser menor (${practica4})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////


    if (practica3 > practica1 && practica3 > practica2 && practica3 > practica4) {


     

        if (practica4 < practica1 && practica4 < practica2) {
          

            let resultado = (practica1 + practica2 + practica3) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 4 por ser menor (${practica4})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }

        if (practica2 < practica1 && practica2 < practica4) {
          
            let resultado = (practica3 + practica1 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 2 por ser menor (${practica2})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
        if (practica1 < practica4 && practica1 < practica2) {
            
            let resultado = (practica4 + practica2 + practica3) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 1 por ser menor (${practica1})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////

    if (practica4 > practica1 && practica4 > practica2 && practica4 > practica3) {


   

        if (practica3 < practica1 && practica3 < practica2) {
         

            let resultado = (practica1 + practica2 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 3 por ser menor (${practica3})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }

        if (practica2 < practica1 && practica2 < practica3) {
           
            let resultado = (practica3 + practica1 + practica4) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 2 por ser menor (${practica2})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
        if (practica1 < practica3 && practica1 < practica2) {
          
            let resultado = (practica4 + practica2 + practica3) / 3;
            let divImprimir = `<div class="alert alert-primary"> <label class="font-weight-bold text-danger">Se descartara la nota 1 por ser menor (${practica1})</label > <label class="font-weight-bold text-success">El promedio es : ${resultado}</label> </div>`;
            ZonePrint.innerHTML = divImprimir;
        }
    }
}