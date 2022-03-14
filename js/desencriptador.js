var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){

    event.preventDefault();

    var textoInput = document.querySelector("#input-texto");

    var texto = textoInput.value;

    var textoVerificado = verificarTexto(texto)

    if(textoVerificado == true)
    {
        var textoDesencriptado;

        var textoDesencriptado = texto.replace((/enter/gi), "e")
                                            .replace((/imes/gi), "i")
                                            .replace((/ober/gi), "o")
                                            .replace((/ai/gi), "a")
                                            .replace((/ufat/gi), "u");

    

    var mostrar = document.querySelector("#msg");
    mostrar.value=textoDesencriptado;
    }
    
    
});