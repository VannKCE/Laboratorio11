console.log("Ingrese sus notas: ");


let suma = 0;
for (let i =1; i<=5; i++){
   let nota = parseFloat(prompt("Nota " + i+": "));


   if(nota<=20 && nota >=0){
       suma+=nota;
   } else {
       console.log("Nota invàlida");
   }
}


let promedio = suma/5;


console.log("Su promedio es" + promedio);
