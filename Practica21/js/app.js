// const div = document.createElement("div");
// div.classList.add("form-group");

// const input = document.createElement("input");
// input.setAttribute("id", "inpNumero");
// input.setAttribute("class", "form-control");
// input.setAttribute("type", "number");

// const label = document.createElement("label");
// label.innerText = "Numero de fabricas";

// const button = document.createElement("button");
// button.setAttribute("class", "btn btn-primary mt-3");
// button.setAttribute("id", "btn");
// button.innerText = "Calcular";

// output.appendChild(div);
// div.appendChild(label)
// output.appendChild(input);
// output.appendChild(button);

// function addEvent() {
//   let button = document.getElementById("btn");
//   button.addEventListener("click", proceso);
// }

function proceso() {
    let detener = Number(prompt("Ingrese N numero"))
    let numeroPositivo =0;
    let npromedio = 0;
    let numeroNegativo =0;
    let npromedioNe =0;
for(let x = 1;x<=detener;x ++){

  Numero= Number(prompt('numero'))
  if(Numero >= 0){
    numeroPositivo++;
    
    npromedio = npromedio + Numero;
  
}
if(Numero<=0){
numeroNegativo++;
npromedioNe = npromedioNe + Numero;

}
}
console.log("numero mayor a 0 = " + numeroPositivo)
console.log("total de los numeros positivos = " + npromedio / numeroPositivo)

console.log("Numeros menor a 0 = " + numeroNegativo)
console.log("total de los numeros negativos = " + npromedioNe / numeroNegativo)

console.log("Promedio de todos los numeros = "+ (npromedio / detener + npromedioNe / detener))

}

proceso();


