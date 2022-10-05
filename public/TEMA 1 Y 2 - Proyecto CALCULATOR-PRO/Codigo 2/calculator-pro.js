function calculatorPRO (s) {
    
    let Param = s.split(",");
    
    let operandos = [];
    let countErr = 0;
    let result = "";
    let operacionCurso = 0;



    for (num of Param) {
        if (!isNaN(Number(num.trim())) && num.trim() !=="")
            operandos.push(Number(num));
        else {
            countErr ++;
        }
    }


    if (operandos.length > 1){

        if (countErr > 0) {
            result = "Se han omitido " + countErr + " valores de entrada no numericos!\n";
            result += "Se calculara solo en base a los numeros: " + operandos + "\n\n";
        }

        for (num of operandos) {
            operacionCurso += num;
        }
        result += "La suma de todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        operacionCurso = operandos[0];
        for (let i = 1; i < operandos.length; i++) {
            operacionCurso -= operandos[i];
        }
        result += "La resta entre todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        operacionCurso = operandos[0];
        for (let i = 1; i < operandos.length; i++) {
            operacionCurso *= operandos[i];
        }
        result += "El producto de todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        if (operandos.indexOf(0, 1) >= 1){
            result += "La division no se pudo realizar porque existe un divisor igual a cero!.";
        } else {
            operacionCurso = operandos[0];
            for (let i = 1; i < operandos.length; i++) {
                operacionCurso /= operandos[i];
            }
            result += "La division entre todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";
        }

    } else {
        
        if (operandos.length === 0)
            result += "No existen numeros para operar!";
        else {
            result += "Solo ha entrado un numero, se resolvera su raiz cuadrada!\n\n";

            if (operandos[0] < 0)
                result += "Numero negativo, imposible hacer la raiz!"
            else if (operandos[0] === 0) 
                result += "Solo se ha introducido un cero. Imposible operar!";
            else
                result += "La raiz cuadrada de " + operandos[0] + " es: " + ctrlDecimales(Math.sqrt(operandos[0]));
        }
    }
     

    function ctrlDecimales(num) {
        return Math.abs(num - num.toFixed(3)) > 0 ? +num.toFixed(3): num
    }

    return result;
}



let respSalir;
let expresion;

do {

    do {
        expresion = prompt("Introduce los numeros a operar separado por comas. ej: 2,5,8,1");
    } while (expresion === null)


    console.log(calculatorPRO(expresion));

    do {
        respSalir = prompt("Te gustaria probar con otra operacion (s/n)?");
        respSalir === null ? respSalir = "n": respSalir;
    } while(respSalir.toLowerCase() !== "s" &&
            respSalir.toLowerCase() !== "n");

}while(respSalir.toLowerCase() === "s")

console.log("Adios!");


