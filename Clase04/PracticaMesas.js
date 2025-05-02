// Usar el algoritmo de los dos punteros para identificar rápidamente el primer par 
// de invitados cuyos nombres comienzan con la misma letra.
const invitados = ["Alejandra", "Daniel", "Esther",  "Jazmin", "Joel", "Liliana",  "Patty"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (inicio < arr.length - 1) {
        let letra1 = arr[inicio][0].toLowerCase();
        let letra2 = arr[siguiente][0].toLowerCase();

        if (letra1 === letra2) {
            return [arr[inicio], arr[siguiente]];
        }
        siguiente++;
        if (siguiente === arr.length) {
            inicio++;
            siguiente = inicio + 1; // Luego de comparar inicio con todos los siguiente posibles,
            // esto avanza inicio al siguiente nombre, y reinicia siguiente 
            // para que comience desde la posición justo después de inicio.
        }
    }

    return null;
}

console.log(encontrarPareja(invitados));

