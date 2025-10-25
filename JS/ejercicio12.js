let opcion2 = 0;

while (opcion2 !== 4) {
    console.log("MENÚ PRINCIPAL");
    console.log("1. Calcular promedio de notas");
    console.log("2. Contar pares e impares en un rango");
    console.log("3. Mostrar tabla de multiplicar");
    console.log("4. Salir");

    opcion2 = parseInt(prompt("Ingrese una opción: "));

    if (opcion2 === 1) {
        let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?: "));
        let suma = 0;
        let contador = 1;

        while (contador <= cantidad) {
            let nota = parseFloat(prompt("Ingrese la nota " + contador + ": "));
            suma += nota;
            contador++;
        }

        let promedio = suma / cantidad;
        console.log("El promedio de notas es: " + promedio.toFixed(2));

    } else if (opcion2 === 2) {
        let inicio = parseInt(prompt("Ingrese el inicio del rango: "));
        let fin = parseInt(prompt("Ingrese el fin del rango: "));
        let pares = 0;
        let impares = 0;
        let i = inicio;

        while (i <= fin) {
            if (i % 2 === 0) pares++;
            else impares++;
            i++;
        }

        console.log("Entre " + inicio + " y " + fin + ":");
        console.log("Pares: " + pares);
        console.log("Impares: " + impares);

    } else if (opcion2 === 3) {
        let numero = parseInt(prompt("Ingrese un número: "));
        console.log("Tabla del " + numero);
        let j = 1;
        while (j <= 12) {
            console.log(numero + " x " + j + " = " + (numero * j));
            j++;
        }

    } else if (opcion2 === 4) {
        console.log("Saliendo.");
    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }
}
