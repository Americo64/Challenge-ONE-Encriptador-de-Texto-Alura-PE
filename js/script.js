//Copiar:
function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);



//Desencriptar:
function desencriptar() {
    var texto = document.querySelector("#input-text").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-text")) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};



//Encriptar:
function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-text")) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};