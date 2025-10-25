let monto = parseInt(prompt("Ingrese el monto a retirar:"));

if (monto > 0 && monto % 10 == 0) {
    let billetes100 = Math.floor(monto / 100);
    monto = monto % 100;
    let billetes50 = Math.floor(monto / 50);
    monto = monto % 50;
    let billetes20 = Math.floor(monto / 20);
    monto = monto % 20;
    let billetes10 = Math.floor(monto / 10);

    console.log("Billetes:");
    if (billetes100 > 0) 
        console.log("De 100: " + billetes100);
    if (billetes50 > 0) 
        console.log("De 50: " + billetes50);
    if (billetes20 > 0) 
        console.log("De 20: " + billetes20);
    if (billetes10 > 0) 
        console.log("De 10: " + billetes10);
} else {
    console.log("Monto inválido.");
}
