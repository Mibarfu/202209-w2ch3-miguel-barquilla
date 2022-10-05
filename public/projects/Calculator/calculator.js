let resultados = [];

function calculadora(ent1, ent2) {
    let unArray = [];

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


    function suma (num1, num2) {
        return ctrlDecimales(num1 + num2);
    }

    function resta (num1, num2) {
        return ctrlDecimales(num1 - num2);
    }

    function multiplica (num1, num2) {
        return ctrlDecimales(num1 * num2);
    }

    function divide (num1, num2) {
        if (num2 === 0)
            return "Imposible dividir " + num1 + " entre 0";
        else
            return ctrlDecimales(num1 / num2);
    }

    function ctrlDecimales(num) {
        num = +num;
        return Math.abs(num - num.toFixed(3)) > 0 ? +num.toFixed(3): num
    }
}

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
    "Multiplicacion: " + resultados[0] + "*" + resultados[1] + " = " + resultados[4] + "\n" +
    "Division: " + resultados[0] + "/" + resultados[1] + " = " + resultados[5];
    
    console.log(result);
} else
    console.log(resultados[0]);

