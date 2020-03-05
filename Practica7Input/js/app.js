CrearDom2();
addEvent();


function CrearDom2() {
  const output = document.getElementById("output");

  const div2 = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute('id','numero')

  input.classList.add("form-control");
  const label2 = document.createElement("label");
  label2.innerText = "Introduca Numero";
  const button = document.createElement("button");
  button.innerText = "Calcular";
  button.setAttribute("id", "btn");
  button.setAttribute("class", "btn btn-primary mt-3");

  output.appendChild(div2);
  div2.appendChild(label2);
  div2.appendChild(input);
  div2.appendChild(button);
}




function addEvent() {
  const button = document.getElementById("btn");
  button.addEventListener("click", proceso);
}

function proceso(){
  let numero = Number (document.getElementById('numero').value)

while (numero != 1) {
  if (numero % 2 == 0) {
    numero = numero / 2;
    console.log(numero);
  } else {
    numero = numero * 3 + 1;
    console.log(numero);
  }

  function CrearDom() {
    const output = document.getElementById("output");

    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");

    label.innerText = numero;
    label.setAttribute("style", "font-size:30px;");

    output.appendChild(div);
    output.appendChild(label);
    
  }
  CrearDom();

}

}

// let numero = Number(prompt('numero'))
// let numeroinicial = document.getElementById("numeroinicial");
// numeroinicial.innerText = numero;
// numeroinicial.setAttribute("style", "font-size:30px;");
// while (numero != 1) {
//   if (numero % 2 == 0) {
//     numero = numero / 2;
//     console.log(numero);
//   } else {
//     numero = numero * 3 + 1;
//     console.log(numero);
//   }

//   function CrearDom() {
//     const output = document.getElementById("output");

//     const div = document.createElement("div");
//     div.classList.add("form-group");

//     const label = document.createElement("label");

//     label.innerText = numero;
//     label.setAttribute("style", "font-size:30px;");

//     output.appendChild(div);
//     output.appendChild(label);
//   }
//   CrearDom();
// }


