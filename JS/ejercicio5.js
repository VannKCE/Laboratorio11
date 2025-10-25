let pares = 0;
let impares = 0;
let numeros = "Numeros ingresados: "

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Ingrese el número " + i + ":"));
  
  if (num % 2 == 0) {
    pares++;
  } else {
    impares++;
  }

  numeros += num + " ";
}

console.log(numeros)

console.log("Pares: " + pares);
console.log("Impares: " + impares);