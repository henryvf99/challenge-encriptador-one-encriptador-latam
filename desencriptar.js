var inputD = document.getElementById('input');
var botonD = document.getElementById('botonD');
var txtDesencriptado = "";

function desencriptar(mensajeEncriptado){

    for (let index = 0; index < mensajeEncriptado.length; index++) {
        mensajeEncriptado = mensajeEncriptado.replace("ai", "a")
                             .replace("enter", "e")
                             .replace("imes", "i")
                             .replace("ober", "o")
                             .replace("ufat", "u");   
    }

    return mensajeEncriptado;
    
}

function mostrarDesencriptado(){
    var entradaD = inputD.value.toLowerCase()
    txtDesencriptado = desencriptar(entradaD);
    document.querySelector("#output").innerHTML = txtDesencriptado;
    document.getElementById('copiar').style.visibility = "visible";
    document.getElementById('imagen').style.visibility = "hidden";
    document.getElementById('texto-ningun').style.visibility = "hidden";
    document.getElementById('texto-ref').style.visibility = "hidden";
}

botonD.onclick = mostrarDesencriptado;