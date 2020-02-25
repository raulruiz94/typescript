const button = document.getElementById('btn');
button?.addEventListener('click' ,procedimiento);

function procedimiento(){
let numero = Number(document.getElementById('n').value);

//123


if(numero >1000){
    let entero1 = Math.floor(numero / 10); //1212 / 10 = 121.2 = 121        
let decimal = numero % 10;                 //1212 % 10 = 121.2 =      2
let entero2 = Math.floor(entero1 / 10);     // 121 / 10 = 12.1 = 12
let decimal2 = entero1 % 10;                // 121 % 10 = 12.1 =      1
let entero3 = Math.floor(entero2 / 10)      // 12 / 10 = 1.2 =        1
let decimal3 = entero2 % 10;                //12 % 10 = 1.2 =         2
alert(entero3)

let x = decimal * 1;        // 2 
let y = decimal2 * 1000 ;       // 1
let z = entero3 * 10;       // 1
let e = decimal3 * 100;         // 2
total = x + y + e + z;



if(numero == total){
  
    alert("El numero es capicua")

}else{
    alert("el numero no es capicua")
}



}
if(numero < 999){
    let entero1 = Math.floor(numero / 10); //1212 / 10 = 121.2 = 121        
    let decimal = numero % 10;                 //1212 % 10 = 121.2 =      2
    let entero2 = Math.floor(entero1 / 10);     // 121 / 10 = 12.1 =       12
    let decimal2 = entero1 % 10;                // 121 % 10 = 12.1 =      1

    
    let x = decimal * 100; 
    let y = decimal2 * 10 ; 
    let e = entero2 * 1 ; 
    total = x + y + e ;

if(numero == total){
  
    alert("El numero es capicua")

}else{
    alert("el numero no es capicua")
}

}
}

