var Op = prompt("Presione: \n 1. Para saber si un número es positivo o negativo. \n 2. Para comparar 2 números. \n 3. Para comprarar 3 números: cual es mayor, neutral y menor.");

switch (Op) {
    case "1":
        let num = prompt("Ingrese un número:");
        if (num < 0) {
            alert("El número: " + num + ", es negativo.");
            document.write("El número: " + num + ", es negativo.");
            console.log("El número: " + num + ", es negativo.");
        } else if (num > 0) {
            alert("El número: " + num + ", es positivo.");
            document.write("El número: " + num + ", es positivo.");
            console.log("El número: " + num + ", es positivo.");
        } else if (num == 0) {
            alert("El número es igual a 0.");
            document.write("El número es igual a 0.");
            console.log("El número es igual a 0.");
        }
        break;
    case "2":
        let num1 = prompt("Ingrese un número:");
        var num2 = prompt("Ingrese otro número:");
        if (num1 <= num2) {
            document.write(num1 + " Es menor que " + num2);
        } else if (num1 >= num2) {
            document.write(num1 + " Es mayor que " + num2);
        }
        break;
    case "3":
        let n1 = prompt("Ingrese el primer número:");
        var n2 = prompt("Ingrese el segundo número:");
        var n3 = prompt("Ingrese el tercer número:");
        if (n1 > n2) {
            alert(n1 + " Es mayor que " + n2);
            if (n1 > n3) {
                alert(n1 + " Es mayor que " + n3);
                if (n3 > n2) {
                    alert(n3 + " Es mayor que " + n2);
                    alert(n1 + " Es el número mayor, " + n3 + " Es el número neutal, " + n2 + " Es el número menor.");
                    document.write(n1 + " Es el número mayor, " + n3 + " Es el número neutal, " + n2 + " Es el número menor.");
                    console.log(n1 + " Es el número mayor, " + n3 + " Es el número neutal, " + n2 + " Es el número menor.");
                } else {
                    alert(n3 + " Es menor que " + n2);
                    alert(n1 + " Es el número mayor, " + n2 + " Es el número neutal, " + n3 + " Es el número menor.");
                    document.write(n1 + " Es el número mayor, " + n2 + " Es el número neutal, " + n3 + " Es el número menor.");
                    console.log(n1 + " Es el número mayor, " + n2 + " Es el número neutal, " + n3 + " Es el número menor.");
                }
            } else {
                alert(n1 + " Es menor que " + n3);
                if (n3 > n2) {
                    alert(n3 + " Es mayor que " + n2);
                    alert(n3 + " Es el número mayor, " + n1 + " Es el número neutal, " + n2 + " Es el número menor.");
                    document.write(n3 + " Es el número mayor, " + n1 + " Es el número neutal, " + n2 + " Es el número menor.");
                    console.log(n3 + " Es el número mayor, " + n1 + " Es el número neutal, " + n2 + " Es el número menor.");
                }
            }
        }
        else {
            alert(n1 + " Es menor que " + n2);
            if (n2 > n3) {
                alert(n2 + " Es mayor que " + n3);
                alert(n2 + " Es el número mayor, " + n3 + " Es el número neutal, " + n1 + " Es el número menor.");
                document.write(n2 + " Es el número mayor, " + n3 + " Es el número neutal, " + n1 + " Es el número menor.");
                console.log(n2 + " Es el número mayor, " + n3 + " Es el número neutal, " + n1 + " Es el número menor.");
            } else {
                alert(n2 + " Es menor que " + n3);
                alert(n3 + " Es el número mayor, " + n2 + " Es el número neutal, " + n1 + " Es el número menor.");
                document.write(n3 + " Es el número mayor, " + n2 + " Es el número neutal, " + n1 + " Es el número menor.");
                console.log(n3 + " Es el número mayor, " + n2 + " Es el número neutal, " + n1 + " Es el número menor.");
            }
        }
        break;
}