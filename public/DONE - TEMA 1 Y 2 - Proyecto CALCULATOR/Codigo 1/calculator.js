function calculadora(ent1, ent2) {
    let unArray = [];

    if (numerosCorrectos(ent1, ent2)) { // Son numeros
        if (dosNumeros(ent1, ent2)) { // Son dos numeros
            ent1 = stringANum(ent1);
            ent2 = stringANum(ent2);

            unArray.push(ent1, ent2, 
                        suma(ent1, ent2),
                        resta(ent1, ent2),
                        multiplica(ent1, ent2),
                        divide(ent1, ent2));
         } else { // No son numeros
            unArray.push("La raiz cuadrada de " + ent1 + " es: " + Math.sqrt(ent1));            
        }
    } else { // Se ha introducido un solo numero.
        unArray.push("Por el tipo de entrada, la operacion no se puede llevar a cabo!");
    }

    return unArray;

    // Retorna 'true' si los argumentos son numeros y 'false' si alguno de ellos o ambos no lo son.
    function numerosCorrectos (num1, num2) {
        // Se verifica si 'num1' o 'num2' no devuelven la propiedad 'NaN'
        if (isNaN(num1) || (isNaN(num2) && typeof num2 !== "undefined"))
            return false;
        else{
            if (typeof num1 === "boolean" || (typeof num2 === "boolean" && typeof num2 !== "undefined"))
                return false
            else
                return true;
        }
    }

    // Retorna 'true' si se introducen dos numeros, y 'false' si es solo uno.
    function dosNumeros (num1, num2){
        // Revisar si solo se ha introducido un numero.
        if (typeof num2 === "undefined") // Se ha introducido solo un numero!
            return false;
        else // Se han introducido los dos numeros
            return true;
    if (num1 !== "" && num2 !== "") {
        num1 = Number(num1); num2 = Number(num2);
        unArray.push(ent1, ent2, 
                    suma(ent1, ent2),
                    resta(ent1, ent2),
                    multiplica(ent1, ent2),
                    divide(ent1, ent2));
    } else {
        let sumRaiz = ent1 + ent2;
        unArray.push("La raiz cuadrada de " + sumRaiz + " es: " + Math.sqrt(sumRaiz));            
    }

    return unArray;

    // Si el numero es un 'string', lo convierte en numero.
    function stringANum (num){
        return (typeof num) === "string" ? Number(num) : num
    }

    // Suma dos numeros
    function suma (num1, num2) {
        return ctrlDecimales(num1 + num2);
    }

    // Resta dos numeros
    function resta (num1, num2) {
        return ctrlDecimales(num1 - num2);
    }

    // Multiplica dos numeros
    function multiplica (num1, num2) {
        return ctrlDecimales(num1 * num2);
    }

    // Divide dos numeros
    function divide (num1, num2) {
        if (num2 === 0)
            return "Imposible dividir " + num1 + " entre 0";
        else
            return ctrlDecimales(num1 / num2);
    }

    // Retorna 3 decimales si los necesitara
    function ctrlDecimales(num) {
        num = +num;
        return Math.abs(num - num.toFixed(3)) > 0 ? +num.toFixed(3): num
    }
}

// Calculator
resultados = calculadora(7, 6);
let num1, num2;

do {
    do {
        num1 = prompt("CALCULADORA:\n" + 
                        "Cual es el primer numero?");
        if (isNaN(num1)) {console.log("Debes introducir un numero valido!");}    
    }while(isNaN(num1));

    do {
        num2 = prompt("CALCULADORA:\n" + 
                        "Y el segundo numero?");
        if (isNaN(num2)) {console.log("Debes introducir un numero valido!");}                            
    }while(isNaN(num2));

    if (num1 === "" && num2 === "") {console.log("Al menos, debes introducir un numero!");}
} while (num1 === "" && num2 === "")


resultados = calculadora(num1, num2);

if (resultados.length > 1) {
    let result = "El resultado de las operaciones son:\n" +
    "Suma: " + resultados[0] + "+" + resultados[1] + " = " + resultados[2] + "\n" +
    "Resta: " + resultados[0] + "-" + resultados[1] + " = " + resultados[3] + "\n" +
    "Multiplicación: " + resultados[0] + "*" + resultados[1] + " = " + resultados[4] + "\n" +
    "División: " + resultados[0] + "/" + resultados[1] + " = " + resultados[5];
    "Multiplicacion: " + resultados[0] + "*" + resultados[1] + " = " + resultados[4] + "\n" +
    "Division: " + resultados[0] + "/" + resultados[1] + " = " + resultados[5];

    console.log(result);
} else
    console.log(resultados[0]);
