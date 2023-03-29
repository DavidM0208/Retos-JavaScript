let operacion = prompt("Seleciones la operacion a realizar: \n 1. Suma. \n 2. Resta. \n 3. Multiplicación. \n 4 .División");
let n1 = prompt("Ingrese el primer número:");
let n2 = prompt("Ingrese el segundo número:");

let respuesta;

n1 = parseInt(n1);
n2 = parseInt(n2);

switch (operacion){
    case "1":
        respuesta = n1 + n2;
        alert("La suma entre " + n1 + " y " + n2 + " es: " + respuesta);
        document.write("La suma entre " + n1 + " y " + n2 + " es: " + respuesta);
    break;
    case "2":
        respuesta = n1 - n2;
        alert("La resta entre " + n1 + " y " + n2 + " es: " +respuesta);
        document.write("La resta entre " + n1 + " y " + n2 + " es: " +respuesta);
    break;
    case "3":
        respuesta = n1 * n2;
        alert("La multiplicación entre " + n1 + " y " + n2 + " es: " +respuesta);
        document.write("La multiplicación entre " + n1 + " y " + n2 + " es: " +respuesta);
    break;
    case "4":
        respuesta = n1 / n2;
        alert("La división entre " + n1 + " y " + n2 + " es: " +respuesta);
        document.write("La división entre " + n1 + " y " + n2 + " es: " +respuesta);
    break;
    default:
        alert("Opcion no valida");
    break;
        
}