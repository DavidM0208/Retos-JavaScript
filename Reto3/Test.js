let nombre = prompt("Escriba su nombre:");
let total = prompt("Digite la cantidad de preguntas:");
let cantidad = prompt("Digita cuantas preguntas contesto correctamente:");

let respuesta = total / 100;
let promedio = cantidad / respuesta;

if (promedio >= 90 ){
    alert("Esta en un nivel superior");
    document.write("Esta en un nivel superior");
} else if (promedio >= 75 && promedio < 90){
    alert("Esta en un nivel medio");
    document.write("Esta en un nivel medio");
} else if (promedio >= 50 && promedio <75){
    alert("Esta en un nivel regular");
    document.write("Esta en un nivel regular")
} else{
    alert("Usted se encuentra fuera de nivel");
    document.write("Usted se encuentra fuera de nivel.")
}