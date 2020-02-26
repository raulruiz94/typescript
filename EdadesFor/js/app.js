
eventlistener();
function eventlistener() {
	const button = document.getElementById('btn');
	button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion() {
    let numeroAlumnos = Number(prompt('Cuantos alumnos son?'));
    let acumulador = 0;
	for (let i = 1; i <= numeroAlumnos; i++) {
        let edad = Number(prompt(`Ingrese la edad del alumno ${i}`));
        acumulador += edad;
        
    }
    let resultado = acumulador / numeroAlumnos;
  
    alert = document.getElementById('ZonePrint');
    ZonePrint.innerText = resultado;
}
