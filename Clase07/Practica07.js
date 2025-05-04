// PROBLEMA: Encontrar el número máximo de un arreglo

function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [42, 315, 87, 998, 120, 754, 601, 233, 15, 809, 472, 690, 221, 934, 301, 67, 512, 443, 728, 105];
console.log(findMax(numbers));