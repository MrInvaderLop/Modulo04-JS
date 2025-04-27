// app.js

import { registrarDestino, mostrarItinerario } from './logica.js';


// Iniciar la aplicación
const iniciarApp = () => {
    console.log("Bienvenido a la aplicación de viajes ✈️");

    // Simulamos que el usuario registra algunos destinos
    registrarDestino("Paris", "2025-06-10", "Avión");
    registrarDestino("Tokyo", "2025-07-20", "Avión");
    registrarDestino("Madrid", "2025-08-20", "Tren");
    registrarDestino("New York", "2025-09-20", "Avión");
    registrarDestino("Londres", "2025-10-20", "Tren");

    // Mostramos el itinerario registrado
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();