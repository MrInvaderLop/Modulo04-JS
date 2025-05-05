const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

function agregarNota(titulo, contenido) {
let notas = [];
if (fs.existsSync(filePath)) {
    console.log('El archivo ya existe... leyendo contenido existente');
    const datos = fs.readFileSync(filePath, 'utf8'); //readFile para leer el archivo
    notas = JSON.parse(datos); // Convertimos de texto a arreglo - Necesario para trabajarlo con JS
} else {
    console.log('El archivo no existe, creando uno nuevo.');
}

const nuevaNota = { titulo, contenido };
notas.push(nuevaNota);

// PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
// COMPLETAR: Usa fs.writeFileSync para guardar las notas.
fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8'); // Regresamos el arreglo a string para guardar
    console.log('Nota agregada con éxito.');

}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        const datos = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(datos);
    
        if (notas.length === 0) {
            console.log('No hay notas guardadas.');
        } else {
            console.log('Lista de notas:\n');
            notas.forEach((nota, index) => {
                console.log(`${index + 1}. ${nota.titulo}`);
                console.log(`   ${nota.contenido}\n`);
        });
        }
    
        } else {
        console.log('No hay notas guardadas.');
        }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        // Leer y parsear el archivo
        const datos = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(datos);
    
        const notasRestantes = notas.filter(nota => nota.titulo !== titulo);
    
        // Verificar si realmente se eliminó alguna nota
        if (notas.length === notasRestantes.length) {
            console.log(`No se encontró ninguna nota con el título "${titulo}".`);
            return;
        }
    
        // Sobrescribimos el archivo con las notas filtradas
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2), 'utf8');
        console.log(`Nota con título "${titulo}" eliminada.`);
        } else {
        console.log('No hay notas para eliminar.');
        }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
[
  { "titulo": "Compras", "contenido": "Comprar leche y pan." },
  { "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
]
