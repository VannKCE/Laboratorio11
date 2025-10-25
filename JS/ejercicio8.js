let num = parseInt(prompt("Ingrese un número:"));
console.log("Números primos entre 1 y " + num + ":");

for (let i = 2; i <= num; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i);
    }
}
