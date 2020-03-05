function crearDom(){                ///crear dom

const output = document.getElementById('output');
for (let x = 0; x <= 100; x=x+2) { ////////////////////incrementar de 2 en 2
    const div = document.createElement('div'); ///crear div en html 100
    div.classList.add('form-group'); //crear clase en el div 

    const label = document.createElement('label'); //crear label en html
    label.innerText = ` ${x}`; 

    output.appendChild(div);            //agregar hijo al optput :div
    div.appendChild(label);             //agregar hijo al div : label

}



}
crearDom();         //invocar Dom