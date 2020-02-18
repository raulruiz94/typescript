

const buttom = document.getElementById('btn');

buttom?.addEventListener('click',verificarCalificacion);


function verificarCalificacion(){

const calificacion = Number(document.getElementById('ipCalificacion').value);

const PrintAlert = document.getElementById('PrintAlert');

if(calificacion > 8){

    PrintAlert.innerText = "Estas Aprobado : " + calificacion;
}else {
    PrintAlert.innerText = "Estas Reprobado : " + calificacion;

    const Audio = document.getElementById('audio');           ///implementar audio

    Audio.play();                       //reproducir audio
}

}