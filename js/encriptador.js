var botonEncripar = document.querySelector("#btn-encriptar");
botonEncripar.addEventListener("click",function(event){

    event.preventDefault();

    var textoInput = document.querySelector("#input-texto");

    var texto = textoInput.value;
    var textoVerificado = verificarTexto(texto)

    if(textoVerificado == true)
    {
        var textoEncriptado;
 
        var textoEncriptado =   texto.replace((/e/gi), "enter")
                                .replace((/i/gi), "imes")
                                .replace((/o/gi), "ober")
                                .replace((/a/gi), "ai")
                                .replace((/u/gi), "ufat");  
    
        var mostrar = document.querySelector("#msg");
        mostrar.value=textoEncriptado;

    }
        
   
                            
});


 
 




