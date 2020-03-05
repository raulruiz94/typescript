
let x = 1, y = 0;

let z,t,p;

let numero = Number(prompt('ingrese numero para parar'));
console.log(y)
for(t = 1 ; y<= numero ; t++){

z= x+y;

console.log(z);
x = y;
y =z;

const div = document.createElement('div');


const label = document.createElement('label');
label.innerText = ` ${x}`;


output.appendChild(div);
div.appendChild(label);

}
