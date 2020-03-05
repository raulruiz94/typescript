let b = Number(prompt("ingrese numero para detener"));
x=1
i=0
acumulador=0

for(i=1; i<=b; i++){
  acumulador=0;
while(i>x){

  if(i%x == 0)
acumulador+=x;
x++;
}
x=1
if(i==acumulador)
console.log(i+" ")
}
