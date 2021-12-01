"use strict"

var fechaActual = new Date();
var anyoActual = fechaActual.getFullYear();
var mesActual = fechaActual.getMonth();
var diaActual = fechaActual.getDate();
var horaActual = fechaActual.getHours();
var minutosActual = fechaActual.getMinutes();

mostrarHora();

function mostrarHora() {
    alert("Hora Actual: " + horaActual + ":" + minutosActual);
}

function mostrarFecha() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert("Hoy es " + diaActual + " de " + meses[mesActual] + " del año " + anyoActual);
}

/* Función con parámetros */

function saludo(saludoNavidad) {
    var saludoSencillo = "Bienvenidos."
    if (mesActual === 11) {
        alert(saludoSencillo + " " + saludoNavidad);
    }
    else {
        alert(saludoSencillo);
    }
}

/* Mostrar mensaje completo: Mi nombre es David y soy
del titulado 2252407 */
function presentacion(nombre, titulado) {
    alert("Mi nombre es " + nombre + " y soy del titulado " + titulado);
}

/* función con retorno */
/* Si la compra es superior a 10000 tiene 10% de descuento */
/* Si la compra esta entre 5000 y 9999 tiene 5% de descuento */
function validarDescuento(compra) {
    var total = 0;
    if (compra >= 10000) {
        total = compra * .9;
    }
    else if (compra >= 5000 && compra <= 9999) {
        total = compra * .95;
    }
    else if (compra < 5000){
        total = compra;
    }
    else {
        total = -1;
    }
    return total;
}

function calcularDescuento(costo) {
    if (costo === -1) {
        alert("Ha surgido en problema");
    }
    else if (costo >= 1) {
        alert("Costo total: " + validarDescuento(costo));
    }
    
}






