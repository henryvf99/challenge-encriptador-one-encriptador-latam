function check(event) {
    tecla = (document.all) ? event.keyCode : event.which;
    patron = /[a-z a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}