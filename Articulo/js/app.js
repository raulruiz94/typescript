
const Donas = 1113 , CostoDonas = 15 , Papas = 2223 , CostoPapas = 12;

const buttom = document.getElementById('btn');
buttom?.addEventListener('click', consulta);
let PrintAlert = document.getElementById('PrintAlert');

function consulta(){


articulo = Number(document.getElementById('Articulo').value);
clave = Number(document.getElementById('Clave').value);

if(articulo == 1113){

  

    PrintAlert.innerText = "Donas" + " Clave N° " + Donas + " Costo original : $" + CostoDonas;
    if(clave == 01){


        PrecioDescuento = CostoDonas * .10;
        Total = CostoDonas - PrecioDescuento;
        PrintAlert.innerText = "Donas" + " Clave N° " + Donas + " Costo con descuento : $" + Total;
    

    }
    else if(clave == 02){

        PrecioDescuento = CostoDonas * .20;
        Total = CostoDonas - PrecioDescuento;
        PrintAlert.innerText = "Donas" + " Clave N° " + Donas + " Costo con descuento : $" + Total;
    }
}


if(articulo == 2223){

  

    PrintAlert.innerText = "Papas" + " Clave N° " + Papas + " Costo original : $" + CostoPapas;
    if(clave == 01){


        PrecioDescuento = CostoPapas * .10;
        Total = CostoPapas - PrecioDescuento;
        PrintAlert.innerText = "Papas" + " Clave N° " + Papas + " Costo con descuento : $" + Total;
    

    }
    else if(clave == 02){

        PrecioDescuento = CostoPapas * .20;
        Total = CostoPapas - PrecioDescuento;
        PrintAlert.innerText = "Papas" + " Clave N° " + Papas + " Costo con descuento : $" + Total;
    }
}



}