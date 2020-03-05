function evenListener() {
	const button = document.getElementById('btn');
	button.addEventListener('click', initAplicacion);
}
evenListener();

function initAplicacion() {
	const cantidades = Number(prompt('Cuantos numero vas a evaluar?'));

    let acumuladoresMenores = 0;
    let acumuladoresMayores = 0;
	for (let x = 0; x < cantidades; x++) {
		let Numero = Number(prompt('Numero a evaluar?'));

		if (Numero <= 0) {
            acumuladoresMenores++;

        
		}else{
            acumuladoresMayores++;


        }


    }
    alert("Numeros mayores : " + acumuladoresMayores);
    alert("Numeros menores : " + acumuladoresMenores);

}
