
   eventlistener();
function eventlistener() {
	const button = document.getElementById('btn');
	button.addEventListener('click', InitApp);
}

function InitApp() {
	let continuar = true;
    let acumulador = 0;
    let contador = 0;

	while (continuar == true) {
		let estatura = Number(prompt('Ingrese la estatura'));
        if(estatura == 0){
            continuar = false;

        }
        acumulador += estatura;
        contador++ ;

    }
    let resultado = acumulador / (contador - 1);
    alert (resultado);
}

