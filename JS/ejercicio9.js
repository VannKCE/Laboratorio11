let n = parseInt(prompt("Ingrese un número: "))

let suma = 0;
let i=1;
while(i <= n){
    if (i % 5 == 0) {
        continue;
    } else {
        suma += i;
    }
}

console.log("La suma de número de 1 hasta " + n + " es: " + i);