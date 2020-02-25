const button = document.getElementById('btn');
button?.addEventListener('click', promedio);
const ZonePrint = document.getElementById('ZonePrint');

function promedio() {


    cal1 = Number(document.getElementById('Cal1').value);
    cal2 = Number(document.getElementById('Cal2').value);
    cal3 = Number(document.getElementById('Cal3').value);

    resultado = (cal1 + cal2 + cal3) / 3;

    if (resultado >= 9) {

        divImprimir = `<div class="alert alert-success"> <p>El alumno a aprobado</p> Su promedio es : ${resultado}</div>`;
        ZonePrint.innerHTML = divImprimir;
    }else if(resultado >= 6 && resultado < 9){

        divImprimir = `<div class="alert alert-warning"> <p>El alumno es regular</p> Su promedio es : ${resultado}</div>`;
        ZonePrint.innerHTML = divImprimir;
    }else if (resultado < 6){
        divImprimir = `<div class="alert alert-danger"> <p>El alumno a reprobado</p> Su promedio es : ${resultado}</div>`;
        ZonePrint.innerHTML = divImprimir;
    }
}