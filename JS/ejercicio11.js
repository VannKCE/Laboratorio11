let numero = parseInt(prompt("Ingrese un número para verificar si es Armstrong:"));
let numeroOriginal = numero;
let cantidadDigitos = String(numero).length;
let suma = 0;

while (numero > 0) {
    let digito = numero % 10;
    let potencia = 1;

    for (let i = 0; i < cantidadDigitos; i++) {
        potencia = Math.pow(digito, cantidadDigitos);
    }

    suma += potencia;
    numero = parseInt(numero / 10); 
}

console.log("Número ingresado: " + numeroOriginal);

if (suma === numeroOriginal) {
    console.log(numeroOriginal + " es un número Armstrong.");
} else {
    console.log(numeroOriginal + " no es un número Armstrong.");
}
