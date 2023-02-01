var inputE = document.getElementById('input');
var botonE = document.getElementById('botonE');

var txtEncriptado = "";

function encriptar(mensaje){

    var ext = mensaje.split('');

    for (let i = 0; i < ext.length; i++) {

        if(ext[i] == 'a'){
            ext[i] = "ai"
        }
        if(ext[i] == 'e'){
            ext[i] = "enter"
        }
        if(ext[i] == 'i'){
            ext[i] = "imes"
        }
        if(ext[i] == 'o'){
            ext[i] = "ober"
        }
        if(ext[i] == 'u'){
            ext[i] = "ufat"
        }

    }
    
    return ext.join('');
}

function mostrarEncriptado(){
    var entradaE = inputE.value.toLowerCase()
    if(entradaE == ""){
        alert("Por favor ingrese su texto");
        document.getElementById('aviso').style.color = "red";
    }else{
        document.getElementById('aviso').style.color = "black";
        txtEncriptado = encriptar(entradaE);
        document.querySelector("#output").innerHTML = txtEncriptado;
        document.getElementById('copiar').style.visibility = "visible";
        document.getElementById('imagen').style.visibility = "hidden";
        document.getElementById('texto-ningun').style.visibility = "hidden";
        document.getElementById('texto-ref').style.visibility = "hidden";
    }
}

botonE.onclick = mostrarEncriptado;