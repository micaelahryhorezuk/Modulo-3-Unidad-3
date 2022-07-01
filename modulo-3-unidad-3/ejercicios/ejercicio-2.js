// Ejericio 2

// Crear el código que reciba como parámetro un array de números y devuelva el mayor.

const lenght = 10;
const array = Array.from({length: lenght}, () => prompt("Agregue " + lenght + " numeros al array", "0"));
const getMax = (array) => Array.isArray(array) ? Math.max(...array) : "Error al obtener el maximo";
document.write("Array ingresado: ", "[", array, "]");
document.write("<br/>")
document.write("El numero mayor del array es: ", getMax(array));