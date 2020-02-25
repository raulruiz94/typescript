let buttom = document.getElementById('btn');

buttom?.addEventListener('click',letra);



function letra(){

    let calificacion = Number(document.getElementById('calificacion').value);
if(calificacion <= 5){

    let DivPrint = `<div class="alert alert-primary"> F </div>`;
    ZonePrint.innerHTML = DivPrint;
}
else if (calificacion ==10){
    let DivPrint = `<div class="alert alert-primary"> A </div>`;
    ZonePrint.innerHTML = DivPrint;

}
else if (calificacion ==9){
    let DivPrint = `<div class="alert alert-primary"> B </div>`;
    ZonePrint.innerHTML = DivPrint;

}
else if (calificacion ==8){
    let DivPrint = `<div class="alert alert-primary"> C </div>`;
    ZonePrint.innerHTML = DivPrint;

}
else if (calificacion <=7 && calificacion >=6){
    let DivPrint = `<div class="alert alert-primary"> D </div>`;
    ZonePrint.innerHTML = DivPrint;

}



}