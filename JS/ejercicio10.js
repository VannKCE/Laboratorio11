const PI = 3.1416;
let opcion = 0;

while (opcion !== 3) {
    opcion = parseInt(prompt(
        "MENÚ\n" + "1. Calcular área del círculo\n" +
        "2. Calcular área del rectángulo\n" + "3. Salir\n\n" +
        "Ingrese una opción:"
    ));

    if (opcion === 1) {
        let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        let area = PI * Math.pow(radio, 2);
        console.log("El área del círculo es: " + area.toFixed(2));

    } else if (opcion === 2) {
        let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
        let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
        let area = base * altura;
        console.log("El área del rectángulo es: " + area.toFixed(2));

    } else if (opcion === 3) {
        console.log("Saliendo.");
    } else {
        console.log("Opción no válida.");
    }
}
