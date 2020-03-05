const div = document.createElement("div");
div.classList.add("form-group");
const label = document.createElement('label');
label.innerText = "numero de fabricas";
const input = document.createElement("input");
input.setAttribute("id", "inpNumero");
input.setAttribute("class", "form-control");
input.setAttribute("placeholder", "Numero (N)");

const button = document.createElement("button");
button.innerText = "Calcular numeros";
button.setAttribute("id", "btn");
button.setAttribute("class", "btn btn-primary mt-3");

output.appendChild(div);
div.appendChild(label);
output.appendChild(input);
output.appendChild(button);

function addEvent() {
  let button = document.getElementById("btn");
  button.addEventListener("click", Procedimiento);
}

function Procedimiento() {
  let n = 0;
  y = 0;
  p = 2;
  numeroN = Number(document.getElementById("inpNumero").value);
  for (let x = 1; x <= numeroN; x++) {
    y++;
    y = p;
    r = y / x;

    console.log(`${y} / ${x} = ${r}`);
  }
}
addEvent();
