// PROBLEMA: Buscar un objeto en una lista de regalos (Usar recursión)

const gifts = ["Lego", "Pelota", "Funko Pop", "Nintendo Switch", "Drone", "Tablet", "Beyblade", "Nerf", "Slime", "Cubo Rubik", "Hot Wheels"];
// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    //Si llegamos al final de la lista y no lo encontramos
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    //Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
    //Recursividad para seguir buscando en la siguiente posición
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
// Llama a la función y prueba con diferentes regalos
let giftName = "Terreneitor";  // Es aquí donde insertamos el nombre del regalo que queremos buscar
console.log(findGift(gifts, giftName));

// Caso cuando el regalo no está en la lista
giftName = "Camión";
giftName = "Avión";
giftName = "Max Steel";
giftName = "Terreneitor";

// Salida esperada:
// "Camión no está en la lista."
