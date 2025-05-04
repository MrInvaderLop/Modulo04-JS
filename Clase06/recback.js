// RECURSIÓN

// Calcular el factorial de un número
function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
    }

    // Llamada recursiva: multiplicar n por el factorial de n-1
    return n * factorial(n - 1);
}

console.log(factorial(170)); // Notese que el máximo número que puede calcular es 170.


// BACKTRACKING

// Generar todas las posible combinaciones con un arreglo de letras.
function generateCombinations(letters, current, index, results) {
    // Agregar la combinación actual al resultado
    results.push(current);

    // Iterar a partir del índice actual
    for (let i = index; i < letters.length; i++) {
        // Llamar recursivamente añadiendo la letra actual
        generateCombinations(letters, current + letters[i], i + 1, results);
    }
}
function findAllCombinations(letters) {
    const results = [];
    generateCombinations(letters, '', 0, results);
    return results;
}

// Ejemplo de uso
const letters = ['a', 'b', 'c'];
console.log(findAllCombinations(letters));