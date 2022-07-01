// Ejericio 1

// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion

const distance = prompt("Ingrese un valor entre 0 y 100000, para determinar el transporte apropiado.", parseInt("-1"));
const determineTransportation = (distance) => {
    if (distance > 0 && distance <= 1000) return "pie";
    if (distance > 1000 && distance <= 10000) return "bicicleta";
    if (distance > 10000 && distance <= 30000) return "colectivo";
    if (distance > 30000 && distance <= 100000) return "auto";
    else if (distance > 100000) return "avion";
    return "desconocido";
};
document.write("El medio de transporte apropiado para la distancia que ingreso es: " + determineTransportation(distance));