
    /** Se declaran las variables que se utilizaran en el codigo */
    let numero1;
    let numero2;
    let resultado;
    
    
    /**Se decllara variable de boton y se le asigna el boton de sumar */
    
    let buttom = document.getElementById('btnCalcular');  //para obtener elemento de html
    buttom?.addEventListener('click',suma);             //al hacer click
    
    function suma(){

        numero1 = Number( document.getElementById('numero1').value);

        numero2 = Number( document.getElementById('numero2').value);

       resultado= numero1 + numero2;

       let ImprimirResultado = document.getElementById('ImprimirResultado');

            ImprimirResultado.innerText=resultado;
    }
