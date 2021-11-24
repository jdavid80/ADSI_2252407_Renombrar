"use strict"
/* Obtener la feha y hora GMT del navegador */
console.log("===Fecha y Hora GMT===");
var timeGMT =  new Date();
console.log(timeGMT);

/* Convertir fecha a String */
console.log("===Fecha y Hora Local===");
var timeCurrentStr = new Date();
console.log(timeCurrentStr.toString());

/* Extraer elementos de la fecha */
/* Extraer el día */
console.log("===Obteniendo el día===");
var numDiaSemana = new Date();
/* El día 0 es el domingo */
/* El sabado es el día 6 */
console.log("Día de la semana: " + numDiaSemana.getDay());

/* Con una función */
/* Llamamos a la función */
obtenerDia();

/* Mostrando el día de la semana con un switch*/

function obtenerDia() {
    var diaStr = "";
    var fechaActual = new Date();
    var diaActual = fechaActual.getDay();

    switch(diaActual) {
        case 0:
            console.log("Día: Domingo");
            break;
        case 1:
            console.log("Día: Lunes");
            break;
            /* .... */
        case 3:
            console.log("Día: Miercoles");
            break;
    }
}

/* Con un arreglo */
/* var numDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var fechaActual = new Date();
var diaActualNumero = fechaActual.getDay();
console.log("Hoy es: " + numDia[diaActualNumero]); */

/* Mostrar fecha formateada */
var numDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var fechaActual = new Date();
var diaActualNumero = fechaActual.getDay();
var mesDia = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
              "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesDiaStr = mesDia[fechaActual.getMonth()];
var horaActual = fechaActual.getHours();
var minutosActual = fechaActual.getMinutes();
var setMorningAfternoon = "";
if (horaActual > 12) {
    setMorningAfternoon = "P.M.";
    horaActual = horaActual - 12;
}
else {
    setMorningAfternoon = "A.M.";
}
/* Agregar un 0 a los minutos en caso de que sea menor a 10 minutos */
if (minutosActual < 10) {
    minutosActual = "0" + minutosActual.toString();
}
console.log("Hoy es " + numDia[diaActualNumero] + ", " + fechaActual.getDate() +
           " de " + mesDiaStr + " del año " + fechaActual.getFullYear());
console.log("Son las " + horaActual + ":" + minutosActual + " " + setMorningAfternoon);


/* Saber cuantos tiempo falta para llegar a determinada fecha */
/* Por ejemplo...Navidad */
/* Puedo agregar una fecha de forma similar a como se averigua la fecha actual */
var navidad = "December 24, 2021"
var fechaNavidad = new Date(navidad);
var fechaHoy = new Date();

/* Hallamos los milisegundos transcurridos hasta el día de hoy */
var msToday = fechaHoy.getTime();
var msNavidad = fechaNavidad.getTime();
var msFaltantes = msNavidad - msToday;
console.log(msFaltantes);

/* Modificar hora */



















