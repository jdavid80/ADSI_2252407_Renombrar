/* Método Slice */
var anyo = "2019";
var anyo2LastChar = anyo.slice(2, 4);
console.log(anyo2LastChar);

/* Buscando espacios dobles */
var nombres = "Jesus  David";
for (i = 0; i < nombres.length; i++) {
    if (nombres.slice(i, (i + 2)) === "  ") {
        console.log("La cadena tiene espacios dobles");
        break;
    }
}

/* Reemplazando parte de la cadena de texto */
var hobby = "Programar en Java";
var newLang = "Python";
for (i = 0; i < hobby.length; i++) {
    if(hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
 }
 console.log(hobby + newLang);

 /* Reemplazar texto con Indexof */
 var hobby2 = "Programar en Javascript a tope";
 var firstChar = hobby2.indexOf("Javascript");
 if (firstChar !== -1) {
     console.log(firstChar);
     hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
     console.log(hobby2);
 }

 /* Buscando carácteres especiales */
 var frase = "Hola Mundo"
for (var i = 0; i < frase.length; i++) {
    if(frase.charAt(i) === "!") {
        console.log("La cadena tienen signos de admiración");
    }
}

/* Reemplazar con el método replace */
var ciudad = "Valle de Pitalito";
ciudad = ciudad.replace("Pitalito" , "Laboyos");
console.log(ciudad);