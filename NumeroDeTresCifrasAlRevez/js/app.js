const button = document.getElementById('btn');
button?.addEventListener('click' ,procedimiento);

function procedimiento(){
let numero = Number(document.getElementById('n').value);

//123
let entero1 = Math.floor(numero / 10);        
let decimal = numero % 10;                 
let entero2 = Math.floor(entero1 / 10);     
let decimal2 = entero1 % 10;                

let x = decimal * 100; 
let y = decimal2 * 10 ; 
let e = entero2 * 1 ; 

total = x + y + e;
if(numero == total){
  
    alert("El numero es capicua")

}else{
    alert("El numero no es capicua")
}


}



