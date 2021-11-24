var promedio = 2.596482;
var promedioStr = promedio.toString();

if (promedioStr.charAt(promedioStr.length - 1 === "5")) {
    promedioStr = promedioStr.slice(0, promedioStr.length - 1) + 5;
}
promedio = Number(promedioStr);
var newProm = promedio.toFixed(2);
console.log("Resultado: " + newProm);

/* condicional es 5 */
