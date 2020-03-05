function crearDom(){

	const output = document.getElementById('output');
	for (let x = 100; x >= 0; x--) {
		const div = document.createElement('div');
		div.classList.add('form-group');

		const label = document.createElement('label');
		label.innerText = `Numero : ${x}`;

		output.appendChild(div);
		div.appendChild(label);
    }
}
crearDom();

