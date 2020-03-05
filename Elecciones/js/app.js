


function calcular(){
acumuladorVotos = 0;

votos=0;
votos2=0;
votos3=0;
votos4=0;
totalvotos=0;
y = false;
for(let x = 1 ; x = x; x++){
    

let voto = Number(prompt(`Porquien decea votar (1 , 2 , 3 , 4)`))

if(voto == 0){

    break;
}

if(voto == 1){

    votos++;








}
if(voto == 2){

    votos2++;

}
if(voto == 3){

    votos3++;


}
if(voto == 4){

    votos4++;


}


}

}
calcular();
document.write(" Candidato 1 = "+votos +"<br> ")
document.write(" Candidato 2 = "+votos2+"<br>")
document.write(" Candidato 3 = "+votos3+"<br>")
document.write(" Candidato 4 = "+votos4+"<br>")
// document.write(" pro = "+promedio+"<br>")
totalvotos= votos+votos2+votos3+votos4;
document.write("Votos totales = "+totalvotos)
