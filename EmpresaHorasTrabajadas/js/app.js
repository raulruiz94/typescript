
function crearDom() {
	const output = document.getElementById('output');


		const div = document.createElement('div');
		div.classList.add('form-group');

		const label = document.createElement('label');
		label.innerText = `Ingresa el numero de horas : `;

		const input = document.createElement('input');
		input.setAttribute('type', 'number');
		input.setAttribute('class', 'form-control');
		input.setAttribute('id', `inpHoras`);

		output.appendChild(div);
		div.appendChild(label);
		div.appendChild(input);
	
	const button = document.createElement('button');
	button.innerText = 'Calcular Sueldo';
	button.setAttribute('id', 'btnCalcularSueldo');
	button.setAttribute('class', 'btn btn-primary btn-block');

	output.appendChild(button);
	addEvent();
}

function addEvent() {
	button = document.getElementById('btnCalcularSueldo');
	button.addEventListener('click', suma);
}
function suma() {
	let horas= Number(document.getElementById('inpHoras').value);
    let resultado = horas * 23;
    alert("Total a pagar : $" + resultado);




}
crearDom();
