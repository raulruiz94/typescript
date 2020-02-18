const buttom = document.getElementById('btn');

buttom?.addEventListener('click' , TotalDeUnidades);
const PrintAlert = document.getElementById('PrintAlert');

function TotalDeUnidades(){


Unidades = Number(document.getElementById('Unidades').value);

if(Unidades > 100){

    PrintAlert.innerText = "El operario si recibira insentivos ";
}
else{

    PrintAlert.innerText = "El operario no recibira insentivos ";

}


}