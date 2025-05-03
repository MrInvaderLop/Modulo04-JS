// Encontrar la palabra más larga dado un texto

function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    // const words = ...
    const palabra = text.match(/\b\w+\b/g);

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {
    for (let i = 0; i < palabra.length; i++) {
        const palabractual = palabra[i];

    // TODO: Comparar la longitud de la palabra actual con la más larga
    // if (...) {
    if (palabractual.length > longestWord.length) {
        // Actualizar la palabra más larga
        longestWord = palabractual;
    }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// El texto no debe contener acentos porque el algoritmo dividirá la palabra en dos
const text = "En la penumbra de la dominacion estrategica, el intelecto subyuga voluntades quebrantadas, articulando manipulaciones sistematicamente calculadas, donde la virtud es un disfraz ornamental y la ambicion devora conciencias con sutileza imperial.";
console.log(findLongestWord(text));