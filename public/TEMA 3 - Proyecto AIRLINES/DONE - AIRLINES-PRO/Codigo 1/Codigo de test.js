// Declaracion de variables

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




// Declaracion de funciones

function bienvenida(NombreUsuario) {

    patronPrimeraLetra = /\b\w/g;
    NombreUsuario = NombreUsuario.toLowerCase().replace(patronPrimeraLetra, (pL) => pL.toUpperCase());

    console.log ("Bienvenido/a Sr/Sra. " + NombreUsuario + " a Airlines ISDI.")

    return NombreUsuario;
}


function listarVuelos(obj) {
    let res = [];

    for (let i = 0; i < obj.length; i++) {
        res.push(`Vuelo con origen: ${obj[i].from}` + 
                 ` y destino (${obj[i].scale === true ? "con escala": "sin escala" }): ${obj[i].to},` + 
                 ` tiene un coste de ${obj[i].cost} euros.`);

    }
    
    return res;
}


function isAdmin() {
    let sel;

    do {
        sel = prompt("Indica por favor tu nivel de privilegios:\n[U]suario\n[A]dministrador.", "u");
    } while (!/^\s*[ua]\s*$/i.test(sel))

    if (sel.toLowerCase().trim() === "a") 
        return true;
    else
        return false;
}


function precioMedio(obj) {
    let res = 0 
    
    obj.forEach(val => res += val.cost);

    return (res / obj.length).toFixed(2);
}


function vuelosConEscala (obj) {

    const res = obj.filter(val => val.scale === true);

    return res;
}


function destUltimosVuelos (obj) {
    let res = [];
    obj.sort(function (a, b) {return a.id - b.id});

    for (obj.length > 5 ? i = obj.length - 5 : i = 0 ; i < obj.length; i++) {
        res.push(obj[i].to);
    }

    return res;
}


function checkVuelos(obj) {
    let res = "";
    
    obj.forEach(val =>
        res += `ID: ${val.id} ` +
              `Origen: ${val.from} ` + 
              `Destino: ${val.to} ` + 
              `Coste: ${val.cost} ` + 
              `Escala: ${val.scale}\n`
    );

    return res;
}


function listaExtendida(obj) {
    let res;
    
    console.log ("\nLos vuelos disponible el dia de hoy son:\n" +
    "------------------------------------------\n");

    res = listarVuelos(obj);
    for (val of res) console.log(val + "\n");

    console.log (`\nEl coste medio es de: ${precioMedio(obj) } Euros.\n\n`);

    res = vuelosConEscala(obj);
    if (res.length > 0) {
        console.log(`Actualmente hay ${res.length} vuelos que hacen escala:\n`  + 
                    "--------------------------------------------------------- \n")
        res.forEach(val => {console.log(val.from + " -> " + val.to +"\n")});
    } else
        console.log("Hoy no hay vuelos que hagan escala!\n");

    res = destUltimosVuelos(obj);
    console.log("\nLos destinos de los ultimos vuelos del dia son:\n");
    console.log("-----------------------------------------------")
    for (val of res) console.log(val);
}


function crearVuelo(obj) {
    let origen, destino, precio, escala, res;
    
    const patronOrigDest = /^\s*(\w+\s*)+$/;
    
    do {
        origen = prompt("Creando un nuevo vuelo:\nOrigen?");
    } while(!patronOrigDest.test(origen) || origen === null);
    origen = origen.trim();
    
    do {
        destino = prompt("Creando un nuevo vuelo:\nDestino?");
    } while(!patronOrigDest.test(destino) || destino === null);
    destino = destino.trim();

    do {
        precio = prompt("Creando un nuevo vuelo:\nPrecio?");
    } while(isNaN(Number(precio)) ||
            Number(precio) === 0)
    
    do {
        escala = prompt("Creando un nuevo vuelo:\nHace escala [s/n]?");
    } while(!/^\s*[sSnN]\s*$/.test(escala) || escala === null)
    escala = escala.toLowerCase();

    do {
        res = prompt("Creando un nuevo vuelo:\n" +
                    "Origen: " + origen + "\n" +
                    "Destino: " + destino + "\n" +
                    "Precio: " + precio + " Euros\n" +
                    "Escala: " + (escala === "s" ? "Si": "No") + "\n\n" +
                    "1- Guardar\n2- Ignorar nuevo vuelo").toLowerCase();
    } while(!/^\s*[12]\s*$/.test(res))

    if (res === "1") {
        obj.sort(function (a, b) {return a.id - b.id});
        
        flights.push({id: obj[obj.length - 1].id + 1,
                to: destino,
                from: origen,
                cost: Number(precio),
                scale: (escala === "s") ? true: false});
        
        return true;
    }

    return false;

}


function borrarVuelo(obj) {
    let idSel, index;

    const soloNumeros = /^\s*\d+\s*$/;
    do {
        idSel = prompt("Eliminar vuelo:\nElige el ID del vuelo a eliminar:");

        if (idSel !== null && soloNumeros.test(idSel)) {
            idSel = Number(idSel) ;   
            index = obj.findIndex((valor) => valor.id === idSel);
            if (index === -1) alert("El ID seleccionado no existe!");
        }

    } while (index === -1  || idSel === null || !soloNumeros.test(idSel))
    
    do {
        sel = prompt ("\nEliminar vuelo:\nConfirma que deseas eliminar el vuelo (" +
        obj[index].from + "-" + obj[index].to + ") [s/n]");
    
        if (sel !== null)
            if (sel.toLowerCase().trim() === "s") {
                obj.splice (index ,1);
                console.log("\nVuelo eliminado.\n");
                return true;
            }

    } while (!/^\s*[sn]\s*$/.test(sel) || sel === null)

    return false;
}


function listarPorPrecios(obj) {
    const filtroPrecioBillete = /^\s*[\+-]?(\s+)?\d+(\.\d+)?\s*$/g;
    let res = [];

    do {
        precioBillete = prompt ("Compra de billetes:\n" + 
        "Selecciona el valor base precedido de:\n" +
        " (+) Para precios superior al indicado. Ej +64\n" +
        " (-) Para precios inferiores al indicado. Ej -64\n" +
        "No pongas signo si quiere busquedas de precio exacto.");
    } while (!filtroPrecioBillete.test(precioBillete))

    const precioNumeric = Number(precioBillete.match(/\d+(\.\d+)?/g));

    switch (precioBillete[precioBillete.search(/[\+-]/)]) {
        case undefined:
            res = obj.filter((elemento) => elemento.cost === precioNumeric);
            break;

        case "+":
            res = obj.filter((elemento) => elemento.cost > precioNumeric);
            break;

        case "-":
            res = obj.filter((elemento => elemento.cost < precioNumeric))
            break;

    }

    return res;
}


function comprarBillete(obj) {
    let res;

    do {
        do {
            res = prompt("Comprar billete:\n" +
                        "Selecciona el ID del vuelo a comprar:");
        } while (!/^\s*\d+\s*$/.test(res))

        if (!obj.some((valor) => valor.id === +res)) {
             alert (" El ID eligido no corresponde a ninguno de la lista!");
            
        }

    } while (!obj.some((valor) => valor.id === +res))

    console.log(`\n\nHa comprado el vuelo: ${obj[obj.findIndex((valor) => valor.id == res)].from}` +
                `-${obj[obj.findIndex((valor) => valor.id == res)].to}\nQue tenga buen vuelo!`);

}









// Cuerpo

do {
    NombreUsuario = prompt("Introduzca su nombre para identificar su vuelo:");

    if (NombreUsuario !== "" && NombreUsuario !== null)
        NombreUsuario = bienvenida(NombreUsuario.trim());
    else 
        console.log("Por favor, introduzca su nombre.")
} while(NombreUsuario === "" || NombreUsuario === null);

listaExtendida(flights);

if (isAdmin()){
    let sel;
    
    do {
        do {
            sel = prompt("Elige una opcion:\n\n" + 
                         "(1) Crear nuevo vuelo.\n" + 
                         "(2) Eliminar vuelo.\n" + 
                         "(3) Terminar.\n");
        } while (!/^\s*[123]\s*$/.test(sel))

        switch (Number(sel)){
            case 1:
               
                if (crearVuelo(flights)) {
                    console.clear();
                    console.log(checkVuelos(flights));
                }
                break;
            
            case 2:
                console.clear();
                console.log(checkVuelos(flights));
                if (borrarVuelo(flights)) {
                    console.clear();
                    console.log(checkVuelos(flights));
                }
                break;
            
            case 3:
                console.clear();
                listaExtendida(flights);
                console.log("\n\nQue tenga un buen dia!");
                break;
        }
    } while (Number(sel) !== 3)

} else {

    console.clear();
    let vuelosPrecio = listarPorPrecios(flights);
    while(checkVuelos(vuelosPrecio) === "") {
        alert("No se encontraron vuelos con ese precio");
        vuelosPrecio = listarPorPrecios(flights);
    }

    console.log(checkVuelos(vuelosPrecio));

    comprarBillete(vuelosPrecio);
}


