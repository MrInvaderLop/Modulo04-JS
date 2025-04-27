// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
class Viaje {
    constructor(destino, fecha, transporte) {
        this.destino = destino;
        this.fecha = fecha;
        this.transporte = transporte;
        this.costo = calcularCosto(destino, transporte);
            }
        }

const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = new Viaje(destino, fecha, transporte);
    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 550;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Madrid") {
        costoBase = 400;
    } else if (destino === "Tokyo") {
        costoBase = 700;
    }


    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    for (const viaje of destinos) { //Usamos for of para recorrer objetos
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log('---------------------------');
    }
};

//Todas estas funciones hay que exportarlas a usuario.js
export { registrarDestino };
export { mostrarItinerario };
