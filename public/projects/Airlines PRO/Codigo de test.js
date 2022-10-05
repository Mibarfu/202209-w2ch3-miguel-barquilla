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
let nombreUsuario;




// Declaracion de funciones

function bienvenida(nombreUsuario) {

    patronPrimeraLetra = /\b\w/g;
    nombreUsuario = nombreUsuario.toLowerCase().replace(patronPrimeraLetra, (pL) => pL.toUpperCase());

    console.log ("Bienvenido/a Sr/Sra. " + nombreUsuario + " a Airlines ISDI.")

    return nombreUsuario;
}


function listarVuelos(obj) {
    let listaAmigable = [];

    for (let i = 0; i < obj.length; i++) {
        listaAmigable.push(`Vuelo con origen: ${obj[i].from}` + 
                 ` y destino (${obj[i].scale === true ? "con escala": "sin escala" }): ${obj[i].to},` + 
                 ` tiene un coste de ${obj[i].cost} euros.`);

    }
    
    return listaAmigable;
}


function isAdmin() {
    let entradaUsuario;

    do {
        entradaUsuario = prompt("Indica por favor tu nivel de privilegios:\n[U]suario\n[A]dministrador.", "u");
    } while (!/^\s*[ua]\s*$/i.test(entradaUsuario) && entradaUsuario !== null)

    if (entradaUsuario === null) 
        return null;

    if (entradaUsuario.toLowerCase().trim() === "a") 
        return true;
    else
        return false;
}


function precioMedio(obj) {
    let sumaCostes = 0 
    
    obj.forEach(val => sumaCostes += val.cost);

    return (sumaCostes / obj.length).toFixed(2);
}


function vuelosConEscala (obj) {

    return obj.filter(val => val.scale === true);

}


function destUltimosVuelos (obj) {
    let DestinoUltimosVuelos = [];
    obj.sort(function (a, b) {return a.id - b.id});

    for (obj.length > 5 ? i = obj.length - 5 : i = 0 ; i < obj.length; i++) {
        DestinoUltimosVuelos.push(obj[i].to);
    }

    return DestinoUltimosVuelos;
}


function checkVuelos(obj) {
    let listaRapidaID = "";
    
    obj.forEach(val =>
        listaRapidaID += `ID: ${val.id} ` +
              `Origen: ${val.from} ` + 
              `Destino: ${val.to} ` + 
              `Coste: ${val.cost} ` + 
              `Escala: ${val.scale}\n`
    );

    return listaRapidaID;
}


function verExtendida(obj) {
    let listaExtendida;
    
    console.log ("\nLos vuelos disponible el dia de hoy son:\n" +
    "------------------------------------------\n");

    listaExtendida = listarVuelos(obj);
    for (val of listaExtendida) console.log(val + "\n");

    console.log (`\nEl coste medio es de: ${precioMedio(obj) } Euros.\n\n`);

    listaExtendida = vuelosConEscala(obj);
    if (listaExtendida.length > 0) {
        console.log(`Actualmente hay ${listaExtendida.length} vuelos que hacen escala:\n`  + 
                    "--------------------------------------------------------- \n")
        listaExtendida.forEach(val => {console.log(val.from + " -> " + val.to +"\n")});
    } else
        console.log("Hoy no hay vuelos que hagan escala!\n");

    listaExtendida = destUltimosVuelos(obj);
    console.log("\nLos destinos de los ultimos vuelos del dia son:\n");
    console.log("-----------------------------------------------")
    for (val of listaExtendida) console.log(val);
}


function crearVuelo(obj) {
    let origen, destino, precio, escala, seleccUsuario;
    
    const patronOrigDest = /^\s*(\w+\s*)+$/;
    
    if (obj.length < 15) {

        do {
            origen = prompt("Creando un nuevo vuelo:\nOrigen?");
        } while(!patronOrigDest.test(origen) && origen !== null);
        if (origen === null) return false;
        origen = origen.trim();
        
        do {
            destino = prompt("Creando un nuevo vuelo:\nDestino?");
        } while(!patronOrigDest.test(destino) && destino !== null);
        if (destino === null) return false;
        destino = destino.trim();

        do {
            precio = prompt("Creando un nuevo vuelo:\nPrecio?");
        } while(!/^\s*[0-9]+\s*$/.test(precio) && precio !== null)
        if (precio === null) return false;
        precio = precio.trim();

        do {
            escala = prompt("Creando un nuevo vuelo:\nHace escala [s/n]?");
        } while(!/^\s*[sSnN]\s*$/.test(escala) && escala !== null)
        if (escala === null) return false;
        escala = escala.toLowerCase();

        do {
            seleccUsuario = prompt("Creando un nuevo vuelo:\n" +
                                "Origen: " + origen + "\n" +
                                "Destino: " + destino + "\n" +
                                "Precio: " + precio + " Euros\n" +
                                "Escala: " + (escala === "s" ? "Si": "No") + "\n\n" +
                                "1- Guardar\n2- Ignorar nuevo vuelo");
        } while(!/^\s*[12]\s*$/.test(seleccUsuario) && seleccUsuario !== null)
        if (seleccUsuario === null) return false;

        if (seleccUsuario === "1") {
            obj.sort(function (a, b) {return a.id - b.id});
            
            flights.push({id: obj[obj.length - 1].id + 1,
                    to: destino,
                    from: origen,
                    cost: Number(precio),
                    scale: (escala === "s") ? true: false});
            
            return true;
        }

    } else {
        alert("No se pueden superar el numero de 15 vuelos al dia.\n" + 
              "Para incluir mas vuelos, elimine alguno.")
        return false;
    }

}


function borrarVuelo(obj) {
    let idSeleccion, index;

    const soloNumeros = /^\s*\d+\s*$/;
    do {
        idSeleccion = prompt("Eliminar vuelo:\nElige el ID del vuelo a eliminar:");

        if (idSeleccion !== null && soloNumeros.test(idSeleccion)) {
            idSeleccion = Number(idSeleccion) ;   
            index = obj.findIndex((valor) => valor.id === idSeleccion);
            if (index === -1) alert("El ID seleccionado no existe!");
        }

    } while ((index === -1 || !soloNumeros.test(idSeleccion)) && idSeleccion !== null )
    if (idSeleccion === null) return false;

    do {
        confirmacionUsuario = prompt ("\nEliminar vuelo:\nConfirma que deseas eliminar el vuelo (" +
        obj[index].from + "-" + obj[index].to + ") [s/n]");
    
        if (confirmacionUsuario !== null)
            if (confirmacionUsuario.toLowerCase().trim() === "s") {
                obj.splice (index ,1);
                console.log("\nVuelo eliminado.\n");
                return true;
            }

    } while (!/^\s*[sn]\s*$/.test(confirmacionUsuario) && confirmacionUsuario !== null)
    
    return false;
}


function listarPorPrecios(obj) {
    const filtroPrecioBillete = /^\s*[\+-]?(\s+)?\d+(\.\d+)?\s*$/g;
    let listaSegunCoste = [];

    do {
        precioBillete = prompt ("Compra de billetes:\n" + 
        "Selecciona el valor base precedido de:\n" +
        " (+) Para precios superior al indicado. Ej +64\n" +
        " (-) Para precios inferiores al indicado. Ej -64\n" +
        "No pongas signo si quiere busquedas de precio exacto.");
    } while (!filtroPrecioBillete.test(precioBillete) && precioBillete !== null)
    if (precioBillete === null) return undefined;

    const precioNumeric = Number(precioBillete.match(/\d+(\.\d+)?/g));

    switch (precioBillete[precioBillete.search(/[\+-]/)]) {
        case undefined:
            listaSegunCoste = obj.filter((elemento) => elemento.cost === precioNumeric);
            break;

        case "+":
            listaSegunCoste = obj.filter((elemento) => elemento.cost > precioNumeric);
            break;

        case "-":
            listaSegunCoste = obj.filter((elemento => elemento.cost < precioNumeric))
            break;

    }

    return listaSegunCoste;
}


function comprarBillete(obj) {
    let entradaID;

    do {
        do {
            entradaID = prompt("Comprar billete:\n" +
                        "Selecciona el ID del vuelo a comprar:");
        } while (!/^\s*\d+\s*$/.test(entradaID) && entradaID !== null)

        if (!obj.some((valor) => valor.id === +entradaID) && entradaID !=null ) {
             alert (" El ID eligido no corresponde a ninguno de la lista!");
        }

    } while (!obj.some((valor) => valor.id === +entradaID) && entradaID !== null)

    if(entradaID !== null) {
        console.log(`\n\nHa comprado el vuelo: ${obj[obj.findIndex((valor) => valor.id == entradaID)].from}` +
                    `-${obj[obj.findIndex((valor) => valor.id == entradaID)].to}\nQue tenga buen vuelo!`);
        
        return true
    }
    else
        return false

}

function mensajeSalida() {
    alert("Has elegido salir, hasta pronto!");
}









// Cuerpo

do {
    nombreUsuario = prompt("Introduzca su nombre para identificar su vuelo:");

    if (nombreUsuario === null) break;
    
    if (nombreUsuario.trim() !== "")
        nombreUsuario = bienvenida(nombreUsuario.trim());
    else 
        console.log("Por favor, introduzca su nombre.")
} while(nombreUsuario.trim() === "");

if (nombreUsuario !== null) {

    verExtendida(flights);

    let opcionTarea;
    switch (isAdmin()){
        
        case true:
        
            do {
                do {
                    opcionTarea = prompt("Elige una opcion:\n\n" + 
                                "(1) Crear nuevo vuelo.\n" + 
                                "(2) Eliminar vuelo.\n");
                } while (!/^\s*[123]\s*$/.test(opcionTarea) && opcionTarea !== null)
                if (opcionTarea === null) {
                    mensajeSalida();
                    break;
                }


                switch (Number(opcionTarea)){
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
                }
            } while (Number(opcionTarea) !== 3)
            break;
        
        case false:
            console.clear();
            let vuelosPrecio = listarPorPrecios(flights);

            if (vuelosPrecio === undefined) {
                mensajeSalida();
                break;
            }

            while(checkVuelos(vuelosPrecio) === "") {
                mensajeSalida();
                vuelosPrecio = listarPorPrecios(flights);
            }

            console.log(checkVuelos(vuelosPrecio));

            if (comprarBillete(vuelosPrecio))
                break;
            else {
                mensajeSalida();
                break;
            }
        
        case null:
            mensajeSalida();

    }

} else {
    mensajeSalida();
}
