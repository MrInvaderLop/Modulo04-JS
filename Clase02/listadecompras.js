// Usamos Set (conjuntos) para evitar duplicados automáticamente
// Ademas tiene métodos que nos resultan útiles en esta situación
// Creamos un conjunto vacío llamado listaDeCompras
const listaDeCompras = new Set();

// Función para agregar un producto
const agregarProducto = (producto) => {
    if (!listaDeCompras.has(producto)) { // método has para verificar existencia de un valor en el set y el signo "!" niega el valor de verdad
    listaDeCompras.add(producto);
    console.log(`Producto "${producto}" agregado a la lista.`);
    } else {
    console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
    if (listaDeCompras.has(producto)) {
    listaDeCompras.delete(producto);
    console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
    console.log(`El producto "${producto}" no se encontró en la lista.`);
    }
};

// Función para mostrar toda la lista
const mostrarLista = () => {
    if (listaDeCompras.size === 0) {
    console.log("La lista de compras está vacía.");
    } else {
    console.log("Lista de Compras:");
    for (const producto of listaDeCompras) {
        console.log(`- ${producto}`);
    }
    }
};

agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Huevos");
agregarProducto("Avena");
agregarProducto("Pollo");
agregarProducto("Café");

eliminarProducto("Leche")

mostrarLista();