let suma = 0;
let contador = 0;
let notas = "Notas: "

while (contador < 5) {
  let nota = parseFloat(prompt("Ingrese la nota " + (contador + 1) + " (0 a 20):"));
  if (nota >= 0 && nota <= 20) {
    suma += nota;
    contador++;
    notas += nota + " ";
  } else {
    console.log("Nota inválida.");
  }
}

console.log(notas)
let promedio = suma / 5;
console.log("El promedio es: " + promedio.toFixed(2));