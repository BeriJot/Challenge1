// se declara text, le añado data para evitar null y ver si ha sido modificado en los pasos.
let text = "";

// array con caracteres objetivos
const cryptTarget = ["a", "e", "i", "o", "u"];

// array con caracteres a insertar en lugar de cryptTarget
const cryptReplacement = ["ai", "enter", "imes", "ober", "ufar"];

const btnCrypt = document.getElementById("btnCrypt");
const encrypted = document.getElementById("encrypted");

const btnDecrypt = document.getElementById("btnDecrypt");
const decrypted = document.getElementById("decrypted");
const respuesta = document.querySelector(".respuesta");
const copia = document.querySelector(".copiar");
copia.style.display = "none";
const warn = document.querySelector(".warning");

function validarTexto() {
  let textoEscrito = document.querySelector(".textArea").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

btnCrypt.addEventListener("click", () => {
  letsCrypt();
  //showCrypt();
});

btnDecrypt.addEventListener("click", () => {
  letsDecrypt();
  //showDecrypt();
});

//capturar el texto a encryptar
function getText() {
  text = "";
  text = document.getElementById("textArea").value;
  return text;
}

// encripta el mensaje original
function crypt() {
  arrayModified = [];
  //por cada caracter de text, compara con cryptTarget.
  for (var idxText = 0; idxText < text.length; idxText++) {
    //booleano para checkear que hubo modificaciones o no.
    var noModifica = new Boolean(true);
    for (var idxTarget = 0; idxTarget < cryptTarget.length; idxTarget++) {
      //si el caracter de text coincide con el objetivo, es remplazado por el nuevo
      if (text[idxText] == cryptTarget[idxTarget]) {
        arrayModified = arrayModified + String(cryptReplacement[idxTarget]);
        //evita que agregue la letra original al evitar el siguiente if.
        noModifica = false;
      }
    }
    //si no modifica, le agrega la letra del texto original
    if (noModifica) {
      arrayModified = arrayModified + text[idxText];
    }
  }
  document.querySelector(".respuesta").textContent = arrayModified;
  respuesta.style.backgroundImage = "none";
  textArea.value = "";
  copia.style.display = "block";
  warn.style.display = "none";
}

//al hacer click en el boton encriptar, toma el texto y lo encripta.
function letsCrypt(text) {
  if (!validarTexto()) {
    getText();
    crypt(text);
  }
}

function decrypt() {
  arrayModified = text.replace(/enter/g, "e").replace(/ober/g, "o").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ufat/g, "u");
  document.querySelector(".respuesta").textContent = arrayModified;
}

//al hacer click en el boton desencriptar, toma el texto y lo desencripta.
function letsDecrypt(text) {
  if (!validarTexto()) {
    getText();
    decrypt(text);
  }
}

//muestra sobre la pagina el mensaje encriptado
//function showCrypt() {
//  document.querySelector(".encrypted").textContent = arrayModified;
//}

//muestra sobre la pagina el mensaje desencriptado
//function showDecrypt() {
//  document.querySelector(".decrypted").textContent = arrayModified;
//}

function copiar() {
  respuesta.select();
  navigator.clipboard.writeText(respuesta.value);
  respuesta.value = "";
}
