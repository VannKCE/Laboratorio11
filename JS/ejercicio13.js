let continuar = true;
let total = 0;

while (continuar) {
    let precio = Number(prompt("Ingrese el precio del producto:"));
    
    if (precio >= 0) {
        total += precio;
    } else {
        console.log("Precio no válido.");
    }

    let respuesta = prompt("¿Desea agregar otro producto? (s/n):").toLowerCase();
    if (respuesta !== "s") {
        continuar = false;
    }
}

console.log("Total parcial: S/ " + total.toFixed(2));

if (total > 100) {
    console.log("Tiene un descuento del 10%.");
    total = total - total * 0.10;
} else if (total >= 50) {
    console.log("Gana un cupón de 5%.");
    total = total - total * 0.05;
} else {
    console.log("No aplica descuento.");
}

console.log("Total a pagar: S/ " + total.toFixed(2));
