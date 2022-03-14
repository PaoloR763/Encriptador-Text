var btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(event){

    event.preventDefault();

    var textoCopiar = document.querySelector("#msg")

    textoCopiar.select();
    textoCopiar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoCopiar.value);
    notif.className = "alert alert-success";
    info.textContent = "El texto ha sido copiado al portapapeles";

});