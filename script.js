//Definiendo variables

let mensajeCodificado;

function encriptarTexto(){
    var textoSinEncriptar = document.getElementById("textoUsuario").value;
    textoSinEncriptar = textoSinEncriptar.replace(/e/g, "enter");
    textoSinEncriptar = textoSinEncriptar.replace(/i/g, "imes");
    textoSinEncriptar = textoSinEncriptar.replace(/a/g, "ai");
    textoSinEncriptar = textoSinEncriptar.replace(/o/g, "ober");
    textoSinEncriptar = textoSinEncriptar.replace(/u/g, "ufat");
    console.log(textoSinEncriptar);
    mostrarResultado(textoSinEncriptar);
}

function desencriptarTexto(){
    var textoEncriptado = document.getElementById("textoUsuario").value;
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    console.log(textoEncriptado);

    mostrarResultado(textoEncriptado);
}

function mostrarResultado(texto){
    var seccionDerecha = document.querySelector(".contenido__derecha");
    seccionDerecha.innerHTML = '';

    var nuevoTexto = document.createElement("p");
    nuevoTexto.classList.add("contenido__derecha__resultado");
    nuevoTexto.textContent = texto;

    seccionDerecha.appendChild(nuevoTexto);

    var botonCopiar = document.createElement("button");
    botonCopiar.classList.add("boton", "copiar");
    botonCopiar.textContent = "Copiar resultado";
    botonCopiar.onclick = function() {
        navigator.clipboard.writeText(texto).then(() => {
            alert("¡Texto copiado al portapapeles!");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    };
    seccionDerecha.appendChild(botonCopiar);
}