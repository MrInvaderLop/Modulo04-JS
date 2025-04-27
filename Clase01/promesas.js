//Ejercicio propuesto

const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: 1, name: "Alice"});
        }, 2000)
    });
};
const getUser = async () => {
    const userData = await fetchUserData();
    console.log(userData);
};
getUser();

// Actualizar Stock
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles() {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto('Camiseta', 25, 100);
producto1.actualizarStock(-20);
console.log(producto1.obtenerDetalles());  // Camiseta - Precio: 25 - Stock: 80