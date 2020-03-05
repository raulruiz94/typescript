

let sueldo = 1500;
let x=0;
while(x<=6){
    x++;
total = sueldo * 0.10;
tota= total+sueldo;
 

console.log("Sueldo Normal = "+sueldo)
console.log("Aumento = "+total)
console.log("Total con aumento = "+tota)

    const output = document.getElementById('output');

    const div = document.createElement('div')
    div.classList.add('form-group')
    
    const label = document.createElement('label')
    const label2 = document.createElement('label')
    const label3 = document.createElement('label')
    label.innerText = `Sueldo Normal = $${sueldo}`;
    label.setAttribute('class' ,'alert alert-success mt-3')

    label2.innerText = `Aumento por mes = $${total}`;
    label2.setAttribute('class' ,'alert alert-warning mt-3')
    const br = document.createElement('br')


    label3.innerText = `Sueldo total con aumento = $${tota}`;
    label3.setAttribute('class' ,'alert alert-primary mt-12')


    output.appendChild(div)
    div.appendChild( label )
    div.appendChild( label2 )
    div.appendChild( label3 )
    sueldo = sueldo +total;

    
}









