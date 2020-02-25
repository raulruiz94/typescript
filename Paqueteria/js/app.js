const button =document.getElementById('btn');
button?.addEventListener('click',proceso);

function proceso(){

let adonde= Number(document.getElementById('adonde').value);
let kilos = Number(document.getElementById('kilos').value);

if(kilos > 5){

    alert("producto demaciado pesado ,no podemos enviarlo por seguridad")
}
else{

    let costo = kilos * adonde;
    alert("Total $" + costo);
}




}