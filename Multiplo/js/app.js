const button = document.getElementById('btn');
button?.addEventListener('click',proceso);


function proceso(){


let numero1 = Number(document.getElementById('numero1').value);
let numero2 = Number(document.getElementById('numero2').value);
  
let resto = numero1 %  numero2; 
let resto2 = numero2 % numero1;
    if ( resto == 0 ){
            DivImprimir = `<div class="alert alert-primary"> ${numero1} Es Multiplo De ${numero2} </div>`;
            ZonePrint.innerHTML = DivImprimir;

    }else{

        DivImprimir = `<div class="alert alert-primary"> ${numero1} No Es Multiplo De ${numero2} </div>`;
        ZonePrint.innerHTML = DivImprimir;    }
        if ( resto2 == 0 ){
                  DivImprimir = `<div class="alert alert-primary"> ${numero1} Es Multiplo De ${numero2} </div>`;
                  ZonePrint.innerHTML = DivImprimir;
      
          }else{
      
              DivImprimir = `<div class="alert alert-primary"> ${numero1} No Es Multiplo De ${numero2} </div>`;
              ZonePrint.innerHTML = DivImprimir;    }
          
      
}