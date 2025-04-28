const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Pantalones", precio: 30, categoria: "Ropa" },
    { nombre: "Tablet", precio: 300, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 25, categoria: "Educación" },
    { nombre: "Audífonos", precio: 70, categoria: "Electrónica" },
    { nombre: "Sudadera", precio: 40, categoria: "Ropa" },
    { nombre: "Calculadora", precio: 20, categoria: "Educación" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Vestido", precio: 45, categoria: "Ropa" },
    { nombre: "Cargador", precio: 20, categoria: "Electrónica" },
    { nombre: "Cuaderno", precio: 5, categoria: "Educación" }
];

//Usa filter() para obtener los productos que cuesten menos de $100.
const baratos = productos.filter(productos => productos.precio < 100);
console.log(baratos);

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const ordenar = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));  // Hay que decirle como comparar dos valores, usamos localeCompare para cadenas de texto
console.log(ordenar);

//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombres = productos.map(productos => productos.nombre);
console.log(nombres);

//Uso de some() para saber si hay un elemento llamado Libro
const libro = productos.some(producto => producto.nombre === "Libro");
console.log(libro);

