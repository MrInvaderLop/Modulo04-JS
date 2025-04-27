//Ejericico: Tarjetas de presentación
const contactos = [
    {
        nombre: "Joel López",
        puesto: "Desarrollador Web",
        empresa: "BBVA",
        correo: "joel.lopez@bbva.com",
        telefono: "+52 618 379 35 68"
    },
    {
        nombre: "Cristiano Ronaldo",
        puesto: "Futbolista profesional",
        empresa: "Al-Nassr",
        correo: "cristiano.ronaldo@alnassr.com",
        telefono: "+966 458 95 89"
    },
    {
        nombre: "Warren Buffett",
        puesto: "CEO",
        empresa: "Berkshire Hathaway",
        correo: "invesing,buffett@berkshire.com",
        telefono: "+1 245 65 26"
    }
];
const generarTarjeta = (contacto) => {
return `============================
|| Nombre: ${contacto.nombre} 
||  Puesto: ${contacto.puesto} 
||  Empresa: ${contacto.empresa} 
||  Correo: ${contacto.correo} 
||  Telefono: ${contacto.telefono} 
============================ `;
};
contactos.forEach(contacto => {
    console.log(generarTarjeta(contacto));
});