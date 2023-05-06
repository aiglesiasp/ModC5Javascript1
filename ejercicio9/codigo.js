
var texto = prompt("Introduce un texto: ");

function checkUpperCase(frase) {
    if (frase == frase.toUpperCase()) {
        return "Está formada sólo por mayúsculas";
    }
    else if (frase == frase.toLowerCase()) {
        return "Está formada solo por minusculas"
    }
    else {
        return "Hay mezcla de minusculas y mayusculas"
    }
}

alert(checkUpperCase(texto));