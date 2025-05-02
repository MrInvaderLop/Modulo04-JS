// Sumatoria
// Array ordenado y numero dado, encuentra dos numeros cuya suma sea el númer dado

function sumatoria(array, num){
    let left = 0;
    let right = array.length -1;

    while(left < right){
        let suma = array[left] + array[right];

        if(suma === num){
            return[array[left], array[right], suma]
        } else if (suma < num){
            left++;
        }else {
            right--;
        }
    }
    return[];
}

console.log(sumatoria([10,20,30,40,50,60,70,80],100));

// Encontrar un Palíndromo
function esPalidromo(palabra) {
    let inicio = 0;
    let fin = palabra.length -1;

    while(inicio < fin) {
        if(palabra[inicio] !== palabra[fin]) {
            return false;
        }
        inicio++;
        fin--;
    }
    return true;
}

console.log(esPalidromo("radar"));
console.log(esPalidromo("javascript"))
console.log(esPalidromo("reconocer"))

// Eliminar duplicados
function eliminarDuplicados(arr) {
    let puntero = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
        }
    }
    return arr.slice(0, puntero + 1);
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 7, 7, 9, 9, 9]));

// Comparar dos listas
function encontrarInterseccion(lista1, lista2) {
    let puntero1 = 0;
    let puntero2 = 0;
    const interseccion = [];

    while (puntero1 < lista1.length && puntero2 < lista2.length) {
        if (lista1[puntero1] === lista2[puntero2]) {
            interseccion.push(lista1[puntero1]);
            puntero1++;
            puntero2++;
        } else if (lista1[puntero1] < lista2[puntero2]) {
            puntero1++;
        } else {
            puntero2++;
        }
    }
    return interseccion;
}

console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6]));