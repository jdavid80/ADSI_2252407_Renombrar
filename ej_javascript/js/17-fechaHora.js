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

/* Cuantos días faltan para mi cumpleaños */
var currentTime = new Date();
/* var myHappyBirthday = new Date("July 5, 2022"); */
var myHappyBirthday = new Date("February 16, 2022");
/* Cúantos milisegundos han transcurrido hasta el día de hoy desde 01/01/1970 */
var msActual = currentTime.getTime();
var msMyHappyBirthday = myHappyBirthday.getTime();
var diffMsHappyBirthday = msMyHappyBirthday - msActual;
var segundosHappyBirthday = diffMsHappyBirthday / 1000;
var minutosHappyBirthday = segundosHappyBirthday / 60;
var horasHappyBirthday = minutosHappyBirthday / 60;
var diasHappyBirthday = horasHappyBirthday / 24;
console.log("La cantidad de días que faltan para el cumpleaños son: "+ Math.ceil(diasHappyBirthday) + " días");

/* Cuantos años tendré en... */
var fechaNacimiento = new Date("November 12, 2003");
var fechaFutura = new Date("December 11, 2028");
/* Obtener años */
var anyoFechaNacimiento = fechaNacimiento.getFullYear();
var anyoFechaFutura = fechaFutura.getFullYear();
var mesFechaNacimiento = fechaNacimiento.getMonth();
var mesFechaFutura = fechaFutura.getMonth();
var diaFechaNacimiento = fechaNacimiento.getDate();
var diaFechaFutura = fechaFutura.getDate();
var edad = 0;

edad = anyoFechaFutura - anyoFechaNacimiento;

if (anyoFechaNacimiento < anyoFechaFutura) {
    if (mesFechaNacimiento < mesFechaFutura) {
        edad = anyoFechaFutura - anyoFechaNacimiento;
    }
    else if (mesFechaNacimiento === mesFechaFutura && diaFechaNacimiento <= diaFechaFutura){
        edad = anyoFechaFutura - anyoFechaNacimiento;
    }
    else {
         edad = edad - 1;
    }
}
else if (anyoFechaNacimiento === anyoFechaFutura) {
    console.log("Edad: 0 años");
}
else {
    console.log("Los datos ingresados son incorrectos. Verifique por favor...");
}
console.log("Edad: " + edad + " años");

/* Modificar hora */



















