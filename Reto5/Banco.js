let numeroCuenta, nombreCuenta, estadoCuenta, saldoFinal = 0, saldoAcual;


do {
    document.write("<br>")
    nombreCuenta = prompt("Ingrese su nombre: ");
    numeroCuenta = prompt("Ingrese el número de la cuenta: ");
    saldoAcual = parseInt(prompt("Ingrese el saldo de la cuenta: "));
    document.write("<br>")

    if (saldoAcual > 0) {
        saldoFinal = saldoFinal + saldoAcual;
        document.write("El nombre de la cuenta es: "+nombreCuenta+"\nEl número de la cuenta es: "+numeroCuenta+"\nEl saldo actual es: "+saldoAcual);
        document.write("¡Usted es Acreedor!");
    } else if (saldoAcual = 0) {
        document.write("El nombre de la cuenta es: "+nombreCuenta+"\nEl número de la cuenta es: "+numeroCuenta+"\nEl saldo actual es: "+saldoAcual);
        document.write("¡Su cuenta esta el día!");
    } else if (saldoAcual < 0){
        document.write("El nombre de la cuenta es: "+nombreCuenta+"\nEl número de la cuenta es: "+numeroCuenta+"\nEl saldo actual es: "+saldoAcual);
        document.write("¡Usted es Deudor!");
    }

} while (saldoAcual > 0);

document.write("El saldo final es de " +saldoFinal);