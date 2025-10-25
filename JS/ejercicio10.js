let opcion = 0;
const pi = 3.1416;

while (opcion !== 3) {
    console.log("\n--- MENÚ DE ÁREAS ---");
    console.log("1. Calcular área del círculo");
    console.log("2. Calcular área del rectángulo");
    console.log("3. Salir");

    opcion = Number(prompt("Ingrese una opción:"));

    if (opcion === 1) {
        let radio = Number(prompt("Ingrese el radio del círculo:"));
        let area = pi * radio * radio;
        console.log("El área del círculo es: " + area.toFixed(2));
    } else if (opcion === 2) {
        let base = Number(prompt("Ingrese la base del rectángulo:"));
        let altura = Number(prompt("Ingrese la altura del rectángulo:"));
        let area = base * altura;
        console.log("El área del rectángulo es: " + area.toFixed(2));
    } else if (opcion === 3) {
        console.log("Saliendo.");
    } else {
        console.log("Opción no válida.");
    }
}
