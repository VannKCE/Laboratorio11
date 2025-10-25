let edad = parseInt(prompt("Ingrese su edad:"));
console.log("Edad: " + edad);

if (edad < 0) {
  console.log("Edad inválida.");
} else if (edad < 12) {
  console.log("Niño");
} else if (edad <= 17) {
  console.log("Adolescente");
} else if (edad <= 59) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}