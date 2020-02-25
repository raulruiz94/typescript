let buttom = document.getElementById('btn');
buttom?.addEventListener('click',procedimiento);
const PlanA = 1200;
const PlanB = 950 , beber = .10 , UsarLentes = .05 , TenerEnfermedad = 0.05 ,SerMayor = .20;
let auxiliar;
function procedimiento(){


let plan = String(document.getElementById('plan').value);
let bebe = String(document.getElementById('bebe').value);
let lentes = String(document.getElementById('lentes').value);
let enfermedad = String(document.getElementById('enfermedad').value);
let edad = String(document.getElementById('edad').value);
if(plan == 'a'){
    alert("A seleccionado cobertura alta A $" + PlanA);

    switch (bebe) {
        case 's':
          alert("Tiene Multa por borracho (10%)");
          multa = PlanA * .10;
          break;
        case 'n':
          alert("usted no tiene multa por beber alcohol");
          multa = 0;
          break;
     
      }
      switch(lentes){
        case 's':
            alert("Tiene Multa por Lentes (5%)");
            multa2 = PlanA * .05;
        break;
        case 'n':
            alert('usted no tiene multa por lentes');
            multa2 = 0;
      }
      switch(enfermedad){
        case 's':
            alert("Tiene Multa por Enfermedad (5%)");
            multa3 = PlanA * .05;
        break;
        case 'n':
            alert('usted no tiene multa por enfermedad');
            multa3 = 0;
      }
      switch(edad){
        case 's':
            alert("Tiene Multa por Edad (20%)");
            multa4 = PlanA * .20;
        break;
        case 'n':
            alert('usted no tiene multa de edad');
            multa4 = 0;
      }
      alert("Total a pagar : " + (PlanA + multa + multa2 + multa3 + multa4));


}
if(plan == 'b'){
    alert("A seleccionado daño a terceros B $" + PlanB);

    switch (bebe) {
        case 's':
          alert("Tiene Multa por borracho (10%)");
          multa = PlanB * .10;
          break;
        case 'n':
          alert("usted no tiene multa por beber alcohol");
          multa = 0;
          break;
    B
      }
      switch(lentes){
        case 's':
            alert("Tiene Multa por Lentes (5%)");
            multa2 = PlanB * .05;
        break;
        case 'n':
            alert('usted no tiene multa por lentes');
            multa2 = 0;
      }
      switch(enfermedad){
        case 's':
            alert("Tiene Multa por Enfermedad (5%)");
            multa3 = PlanB * .05;
        break;
        case 'n':
            alert('usted no tiene multa por enfermedad');
            multa3 = 0;
      }
      switch(edad){
        case 's':
            alert("Tiene Multa por Edad (20%)");
            multa4 = PlanB * .20;
        break;
        case 'n':
            alert('usted no tiene multa de edad');
            multa4 = 0;
      }
      alert("Total a pagar : " + (PlanB + multa + multa2 + multa3 + multa4));


}


}

