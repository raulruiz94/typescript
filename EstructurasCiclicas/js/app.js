// let resultado = 0;

// for (let ValorInicial = 0; ValorInicial < 3; ValorInicial++) {
// 	let numeroIngresado = Number(prompt('ingrese un numero'));

// 	resultado = resultado + numeroIngresado;
// }

// const ZonaImprimir = document.getElementById('output');
// ZonaImprimir.innerHTML = resultado;

function crearDom() {
	const output = document.getElementById('output');

	for (let x = 1; x <= 5; x++) {

		const div = document.createElement('div');
        div.classList.add('form-group');
        
		const label = document.createElement('label');
        label.innerText = `Ingresa el numero: ${x}`;
        
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'inpNumero1');

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);

	}
}
crearDom();
