let N = parseInt(prompt("Ingrese un número para verificar si es Armstrong:"));
let numeroOriginal = N;
let cantidadDigitos = String(N).length;
let sumas = 0;

while (N > 0) {
    let digito = N % 10;
    let potencia = 1;

    for (let i = 0; i < cantidadDigitos; i++) {
        potencia = Math.pow(digito, cantidadDigitos);
    }

    sumas += potencia;
    N = parseInt(N / 10); 
}

console.log("Número ingresado: " + numeroOriginal);

if (sumas === numeroOriginal) {
    console.log(numeroOriginal + " es un número Armstrong.");
} else {
    console.log(numeroOriginal + " no es un número Armstrong.");
}
