function calculatorPRO () {
    let arrayParam = [];
    let countErr = 0;
    let result = "";
    let operacionCurso = 0;


    // Itera todos los argumentos, verifica el tipo y los guarda en arrayParam
    for (num of arguments) {
        if (typeof num === "number" && typeof num !== "undefined" && isNaN(num) === false)
            arrayParam.push(num);
        else {
            countErr ++;
        }
    }

    // Se si hay uno o mas numeros de entrada
    if (arrayParam.length > 1){

        // Muestra el mensaje de errores en caso de haberlos.
        if (countErr > 0) {
            result = "Se han omitido " + countErr + " valores de entrada no numericos!\n";
            result += "Se calculara solo en base a los numeros: " + arrayParam + "\n\n";
        }

        // Suma
        for (num of arrayParam) {
            operacionCurso += num;
        }
        result += "La suma de todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        // Resta
        operacionCurso = arrayParam[0];
        for (let i = 1; i < arrayParam.length; i++) {
            operacionCurso -= arrayParam[i];
        }
        result += "La resta entre todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        // Multiplicacion
        operacionCurso = arrayParam[0];
        for (let i = 1; i < arrayParam.length; i++) {
            operacionCurso *= arrayParam[i];
        }
        result += "El producto de todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";

        // Division
        if (arrayParam.indexOf(0) > 0){
            result += "La division no se pudo realizar porque existe un divisor igual a cero!.";
        } else {
            operacionCurso = arrayParam[0];
            for (let i = 1; i < arrayParam.length; i++) {
                operacionCurso /= arrayParam[i];
            }
            result += "La division entre todos los numeros es igual a: " + ctrlDecimales(operacionCurso) + "\n";
        }
    } else { // Hay uno o ningun numero de entrada.
        if (arrayParam.length === 0) // No hay numeros
            result += "No existen numeros para operar!";
        else { // Hay un numero
            result += "Solo ha entrado un numero, se resolvera su raiz cuadrada!\n\n";

            if (arrayParam[0] < 0) // Es el numero negativo?
                result += "Numero negativo, imposible hacer la raiz!"
            else
                result += "La raiz cuadrada de " + arrayParam[0] + " es: " + ctrlDecimales(Math.sqrt(arrayParam[0]));
        }
    }
     
    // Retorna 3 decimales si los necesitara
    function ctrlDecimales(num) {
        return Math.abs(num - num.toFixed(3)) > 0 ? +num.toFixed(3): num
    }

    return result;
}

console.log(calculatorPRO(32 ,9 ,44 ,27 ));

const resp = prompt("Te gustaia hacer una nueva operación con difenetes valores? (s/n)", "n").toLocaleLowerCase();

switch (resp) {
  case "s":
    console.log(calculatorPRO("r" ,5 ,27 ,undefined,94 ,7 ));
  break;

  case "n":
    console.log("De acuerdo, adios!");
  break;
}

