let opcion2 = 0;

while (opcion2 != 6) {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Calcular estadísticas de N notas");
    console.log("2. Contar pares e impares en un rango");
    console.log("3. Generar tabla de multiplicar");
    console.log("6. Salir");

    opcion2 = parseInt(prompt("Elija una opción:"));

    if (opcion2 == 1) {
        let n = parseInt(prompt("¿Cuántas notas desea ingresar?"));
        let notas = [];
        let suma = 0;

        for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        notas.push(nota);
        suma += nota;
        }

        let promedio = suma / n;
        let max = notas[0];
        let min = notas[0];
        let pares = 0;
        let impares = 0;
        let encima = 0;

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] > max) max = notas[i];
            if (notas[i] < min) min = notas[i];
            if (notas[i] % 2 == 0) pares++;
            else impares++;
            if (notas[i] > promedio) encima++;
        }

        console.log("📊 Promedio:", promedio.toFixed(2));
        console.log("Máximo:", max);
        console.log("Mínimo:", min);
        console.log("Pares:", pares);
        console.log("Impares:", impares);
        console.log("Por encima del promedio:", encima);

    } else if (opcion2 == 2) {
        let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
        let fin = parseInt(prompt("Ingrese el fin del rango:"));
        let pares = 0, impares = 0;

        for (let i = inicio; i <= fin; i++) {
        if (i % 2 == 0) pares++;
        else impares++;
        }

        console.log("En el rango", inicio, "-", fin);
        console.log("Pares:", pares);
        console.log("Impares:", impares);

    } else if (opcion2 == 3) {
        let num = parseInt(prompt("Ingrese un número:"));
        console.log("📘 Tabla del", num);
        for (let i = 1; i <= 12; i++) {
        console.log(num + " x " + i + " = " + (num * i));
        }

    } else if (opcion2 == 6) {
        console.log("Sali");
    } else {
        console.log("⚠️ Opción inválida.");
    }
}
