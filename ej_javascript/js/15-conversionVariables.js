/* Conversión de forma implícita */
var num1 = "12";
var num2 = 4;

console.log("Resultado Suma: " + (num2 + num1)); /* Concatena */
console.log("Resultado Resta: " + (num2 - num1));
console.log("Resultado Multiplicación: " + (num2 * num1));
console.log("Resultado División: " + (num1 / num2));

 /* Conversión de forma explicita */
 var num3 = "20";
 var num4 = 2;
 console.log("Resultado conversión explicita: " + (parseInt(num3) + num4));

 /* Conversión de decimales */
 var num5 = "12.2";
 var num6 = 4.5;
 console.log("Resultado conversión explicita: " + (parseFloat(num5) + num6));

 /* Conversión explicita conservando string */
 var num7 = "8.2";
 var num8 = 3;
 console.log("Resultado Suma: " + (Number(num7) + num8));

 /* Conversión de entero a string */
 var num9 = 12;
 var num10 = 10;
 console.log("Resultado concat: " + (num9.toString() + num10.toString()));
