document.getElementById('copiar').addEventListener('click', copiarAlPortapapeles);

function copiarAlPortapapeles(ev){
    var codigoACopiar = document.getElementById('output');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    try {
        var res = document.execCommand('copy');
        if (res){
            alert("Texto copiado correctamente");
        }
        else{
            alert("Se ha producido un error al copiar al portapaples");
        }
    }
    catch(ex) {
        alert("Se ha producido un error al copiar al portapaples");
    }
    window.getSelection().removeRange(seleccion);
}