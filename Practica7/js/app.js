let numero = Number(prompt("numero"));
let numeroinicial = document.getElementById('numeroinicial')
numeroinicial.innerText= numero;
numeroinicial.setAttribute('style','font-size:30px;')
while (numero != 1) {
  if (numero % 2 == 0) {
    numero = numero / 2;
    console.log(numero);
  } else {
    numero = numero * 3 + 1;
    console.log(numero);
  }



function CrearDom() {

    const output = document.getElementById('output');
    
  const div = document.createElement("div");
  div.classList.add("form-group");

  const label = document.createElement("label");

  label.innerText = numero;
  label.setAttribute('style','font-size:30px;')

  output.appendChild(div)
  output.appendChild(label)
 

  
}
CrearDom();
}
