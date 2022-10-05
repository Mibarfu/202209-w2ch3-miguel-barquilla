// ---------------------------------------------------------
// Variables y constantes
// ---------------------------------------------------------

const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];
let NombreUsuario;
  



// ---------------------------------------------------------
// Funciones
// ---------------------------------------------------------

// Funcion bienvenida
function bienvenida(NombreUsuario) {
    let NombreUsuarioArray = [];

    NombreUsuario = NombreUsuario.toLowerCase();
    NombreUsuarioArray = NombreUsuario.split(" ");

    NombreUsuarioArray = NombreUsuarioArray.map(function (value) {
        value = value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
        return value;
    });

    NombreUsuario = NombreUsuarioArray.join(" ");
    NombreUsuario = NombreUsuario.trim();

    console.log ("Bienvenido/a Sr/Sra. " + NombreUsuario + " a Airlines ISDI.")

    return NombreUsuario;
}

// Funcion juntar propiedades de forma amigable por vuelo
function listarVuelos(obj) {
    let res = [];

    let costeMedio = 0;
    for (let i = 0; i < obj.length; i++) {
        res.push(`Vuelo con origen: ${obj[i].from}` + 
                    ` y destino (${obj[i].scale === true ? "con escala": "sin escala" }): ${obj[i].to},` + 
                    ` tiene un coste de ${obj[i].cost} euros.`);

    }
    
    return res;
}

// Funcion precio medio
function precioMedio(obj) {
    let res = 0 
    for(let i= 0; i < obj.length; i++)
        res += obj[i].cost;

    return res / obj.length;
}


// Funcion sacar vuelos con escala
function vuelosConEscala (obj) {
    let result = [];
    for (let i = 0; i < obj.length; i++)
    {
        if (obj[i].scale) 
            result.push({"from": obj[i].from, "to": obj[i].to}); 
    }

    return result;
}

// Funcion sacar ultimos vuelos
function destUltimosVuelos (obj) {
    let res = [];
    obj.sort(function (a, b) {return a.id - b.id});

    if (obj.length > 5) {
        for (i = obj.length - 5; i < obj.length; i++) {
            res.push(obj[i].to);
        }
    }
    else {
        for (i = 0; i < obj.length; i++) {
            res.push(obj[i].to);
        }
    }  

    return res;
}








// ---------------------------------------------------------
// Cuerpo
// ---------------------------------------------------------

// Bienvenida y peticion de nombre
do {
    NombreUsuario = prompt("Introduzca su NombreUsuario para identificar su vuelo:")
    if (NombreUsuario !== "")
        NombreUsuario = bienvenida(NombreUsuario);
    else 
        console.log("Por favor, introduzca su nombre.")
} while(NombreUsuario === "");


// Muestra vuelos y coste medio
console.log ("\nLos vuelos disponible el dia de hoy son:\n" +
"------------------------------------------\n");

const arrayVuelos = listarVuelos(flights);
for (res of arrayVuelos)
    console.log(res + "\n")    ;


// Mostrar precio medio    
console.log ("\nEl coste medio a dia de hoy es de: " + precioMedio(flights) + " Euros.\n\n");


// Muestra vuelos con escala
const listadoEscala = vuelosConEscala(flights);

if (listadoEscala.length > 0) {
    console.log(`Actualmente hay ${listadoEscala.length} vuelos que hacen escala:\n`  + 
                "--------------------------------------------------------- \n")
    for (let i = 0; i < listadoEscala.length; i++) {
        console.log(listadoEscala[i].from + " -> " + listadoEscala[i].to +"\n");
    }
} else
    console.log("Hoy no hay vuelos que hagan escala!\n");

// Lista los destinos de los ultimos vuelos
const ultVuelos = destUltimosVuelos(flights);

console.log("\nLos destinos de los ultimos vuelos del dia son:\n");
console.log("-----------------------------------------------")
for (dest of ultVuelos) {
    console.log(dest);
}

