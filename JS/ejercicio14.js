let presupuesto = Number(prompt("Ingrese su presupuesto:"));
let total = 0;
let continuar = true;

while (continuar) {
    let precio = Number(prompt("Ingrese el precio del producto:"));
    
    if (precio < 0) {
        console.log("Precio no válido.");
        continue;
    }

    if (total + precio > presupuesto) {
        console.log("No puede agregar este producto. Se excede del presupuesto.");
        continuar = false;
    } else {
        total += precio;

        let respuesta = prompt("¿Desea agregar otro producto? (s/n):").toLowerCase();
        if (respuesta !== "s") {
            continuar = false;
        }
    }
}

console.log("Total: S/ " + total.toFixed(2));

if (total > 100) {
    console.log("Tiene un descuento del 10%.");
    total -= total * 0.10;
} else if (total >= 50) {
    console.log("Gana un cupón de 5%.");
    total -= total * 0.05;
} else {
    console.log("No aplica descuento.");
}

console.log("Total a pagar: S/ " + total.toFixed(2));
