
const generaNuevoCarton = () => {

    let fila;
    let numeroRandom;
    let listaNumerosDados = [];

    let cartonEnJuego = [];


    for (let i = 1; i <= 3; i++) {
        fila = [];
        for (let j = 1; j <= 5 ; j++) {
            do {
                numeroRandom = Math.floor(Math.random() * (90 - 1) + 1);
            } while (listaNumerosDados.includes(numeroRandom) === true);
            
            listaNumerosDados.push(numeroRandom);
            fila.push({"valor" : numeroRandom,
                    "ok" : false});
        }
        
        cartonEnJuego.push({"linea" : fila,
                    "completa" : false});
    }      

    return cartonEnJuego;
}


const mostrarCarton = (cartonEnJuego) => {
    let datosCarton ="";

    for (let value of cartonEnJuego) {
        value.linea.forEach(numero => {
            numero.ok === false ? datosCarton += "[" + 
                            (numero.valor < 10 ? "0" + numero.valor : numero.valor) + "]  " :
                            datosCarton += "[XX]  "})
        datosCarton += value.completa ? "  (Completa)" : ""; 
        datosCarton += "\n";

    }

    return datosCarton;
}


const actualizaCarton = (bola, cartonEnJuego) => {
    const acierto = {
                        bola : false,
                        linea : false,
                        bingo : false,
                    };

    for (let value of cartonEnJuego) {
        value.linea.forEach(numero => {
            if (bola === numero.valor && !acierto.bola) {numero.ok = true; acierto.bola = true;}
        })
            
        if (value.linea.every(numero => numero.ok)  && !value.completa) {
            value.completa = true;
            acierto.linea = true;
        }
    }
    
    if (cartonEnJuego.every(linea => linea.completa === true)) acierto.bingo = true;

    return acierto;
}


const sacarBola = (bolasSacadasEnJuego) => {
    let bola;

    do {
        bola = Math.floor(Math.random() * (90 - 1) + 1)
    } while (bolasSacadasEnJuego.includes(bola))

    bolasSacadasEnJuego.push(bola);

    return bolasSacadasEnJuego;
}


const entradaUsuario = (usuarios, usuarioEnJuego) => {

    let reNombre, indiceUsuario;

    usuarioVacio = {
        nombre : "",
        puntos : 0,
        aciertosNumeros : 0,
        lineasCompletas : 0,
        turnosFallidos : 0,
        bingo : false
    }

    
    do {
        do {
            usuarioVacio.nombre = prompt("Cual será tu nombre de usuario en la partida?");
            if (usuarioVacio.nombre === null) break;
            usuarioVacio.nombre = usuarioVacio.nombre.trim();
        } while (usuarioVacio.nombre === "")
        if (usuarioVacio.nombre ===  null) break;
        
        indiceUsuario = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() === usuarioVacio.nombre.toLowerCase())
        if (indiceUsuario >= 0) {

            reNombre = confirm("EL usuario \"" + usuarioVacio.nombre + "\" ya existe.\n" +
            "Deseas continuar con ese nombre (sumando puntos)?");
            
            if (reNombre) {
                usuarioEnJuego = usuarios[indiceUsuario];
                break;
            }
        } else {
            usuarioEnJuego = usuarioVacio;
            break;
        }
        
    } while (!reNombre)
    
    if (usuarioVacio.nombre === null)
        return null;

    return usuarioEnJuego;
}


const guardaUsuarioEnJuego = (usuarioEnJuego, usuarios) => {
    
    const indiceModificar = usuarios.findIndex(usuario => usuario.nombre === usuarioEnJuego.nombre);

    if (indiceModificar > -1) {
        usuarios[indiceModificar] = usuarioEnJuego;
    } else { 
        usuarios.push(usuarioEnJuego);
    }

    return usuarios;

}


const calculaPuntosUsrEnJuego = (usuarioEnJuego) => {
    let puntos = ((usuarioEnJuego.aciertosNumeros * 5) + (usuarioEnJuego.lineasCompletas * 25) +
                    (usuarioEnJuego.bingo ? 100 : 0)) * 15;
    
    puntos -= 5 * usuarioEnJuego.turnosFallidos;

    puntos = puntos > 0 ? puntos : 0;
    
    usuarioEnJuego.puntos = puntos;
}


const actualizaUsuarioEnJuego = (acierto, usuarioEnJuego) => {
    if (acierto.bola)
        usuarioEnJuego.aciertosNumeros += 1;
    else if (acierto.linea) {
        usuarioEnJuego.lineasCompletas += 1;
        usuarioEnJuego.aciertosNumeros += 1;
    }
    else if (acierto.bingo) {
        usuarioEnJuego.bingo = true;
        usuarioEnJuego.lineasCompletas += 1;
        usuarioEnJuego.aciertosNumeros += 1;
    }
    else
        usuarioEnJuego.turnosFallidos += 1;

    return usuarioEnJuego;
    
}


const muestraSistemaPuntuacion = () => {
    sistemaPuntuacion = "Sistema de puntuación:\n" +
                        "----------------------------\n" +
                        "5 puntos por número acertado.\n" +
                        "25 puntos por linea completa.\n" +
                        "100 puntos por hacer bingo.\n" +
                        "El total será multiplicado por 15 como base de \n" +
                        "máxima puntuación (3750 puntos).\n" +
                        "Al total se le restará 5 puntos por cada turno fallido.";
                        
    alert(sistemaPuntuacion);
}


const muestraRanking = (usuarios) => {
        
    let usuariosOrdenados = usuarios.sort((a, b) => b.puntos - a.puntos);
    let ranking = ">>>>>>> Ranking <<<<<<<<<\n\n";
    
    if (usuariosOrdenados.length === 0) 
        ranking += "    Aún no hay jugadas! :(\n";
    else {
        for (let i = 1;  i <= usuariosOrdenados.length; i++) {
            ranking += `${i}.-     ${usuariosOrdenados[i-1].nombre}       ${usuariosOrdenados[i-1].puntos}  puntos.\n`;
        }
    }   

    ranking += "\n>>>>>>>>>><<<<<<<<<<<<"

    return ranking;
}


const usuarioSeleccionCarton = () => {
    let respuesta;
    
    do {
        generaNuevoCarton();

        do {
            respuesta = prompt ("Quieres este cartón?\n" +
                                mostrarCarton() + 
                                "\n[1] Cambiar." +
                                "\n[2] Jugar!"
                        );
        } while (!/^\s*[12]\s*$/.test(respuesta) && respuesta !== null)
        if (respuesta === null) break;

    } while (respuesta.trim() === "1")
    
    if (respuesta === null) return false;
}

const avisoInicioJuego = (usuarioEnJuego) => {
    alert ("********************************************************\n" +
    `    ${usuarioEnJuego.nombre}!, empieza el juego!\n` +
    "********************************************************");
}


const canta_Linea_Bingo = (aciertoEnTurno, cantaLinea) => {
    if (aciertoEnTurno.linea && !aciertoEnTurno.bingo && !cantaLinea){
        alert("--------------------------\n" +
            "   LINEAAAAAAA!!\n" +
            "--------------------------");
            cantaLinea = true;
    }
    else if (aciertoEnTurno.bingo) {
        alert("-------------------------\n" +
            "   BINGO!\n" +
            "   BINGOOO!\n" +
            "   BINGOOOOOOOOOOOOOOO!!\n" +
            "-------------------------");
    }  

    return cantaLinea;
}


const presentaPanelTurno = (bolaEnJuego, acierto, cartonEnJuego, usuarioEnJuego) => {

    let estadoUsuario;
    let respuesta;
    
    if (acierto.bola) {
        estadoUsuario = "  :) Este le tengo !!!!";
    }
    else {
        estadoUsuario = "  :("
    }

    respuesta = confirm ("--------Tu cartón--------      < Puntos: " + usuarioEnJuego.puntos + ">   " +
                            estadoUsuario + "\n" +
                            mostrarCarton(cartonEnJuego) + 
                            "---------------------------" +
                            "\n        ----BOMBO---" +
                            "\n         >>> " + (bolaEnJuego === 0 ? "    " : bolaEnJuego) + " <<<      " +
                            "\n        ----------------" +
                            "\n Presiona [Aceptar] para sacar bola o [Cancelar] para abandonar.");


    return respuesta;
}







// ---------------------------------------------

const bingo = () => {
    
    let cartonEnJuego = [];
    let bolasSacadasEnJuego = [];
    let bolaEnJuego = 0;
    let usuarioEnJuego = [];
    let usuarios = [];
    let cantaLinea = false;
    let aciertoEnTurno = [];
    
    muestraSistemaPuntuacion();

    let respuesta;
    let formaEscape = true;
    do {
        bolasSacadasEnJuego = [];
        cantaLinea = false;

        usuarioEnJuego = entradaUsuario(usuarios);
        if (usuarioEnJuego === null){
            formaEscape = false;
            break;
        };                    

        alert(muestraRanking(usuarios));
        cartonEnJuego = generaNuevoCarton();
        avisoInicioJuego(usuarioEnJuego);

        do {

            if (!presentaPanelTurno(bolaEnJuego, aciertoEnTurno, cartonEnJuego, usuarioEnJuego)) {
                if (bolaEnJuego === 0) formaEscape = false;
                break;
            }
            
            bolasSacadasEnJuego = sacarBola(bolasSacadasEnJuego);
            bolaEnJuego = bolasSacadasEnJuego[bolasSacadasEnJuego.length - 1];
            aciertoEnTurno = actualizaCarton(bolaEnJuego, cartonEnJuego)
            
            cantaLinea = canta_Linea_Bingo(aciertoEnTurno, cantaLinea);
            
            usuarioEnJuego = actualizaUsuarioEnJuego(aciertoEnTurno, usuarioEnJuego);
            calculaPuntosUsrEnJuego(usuarioEnJuego);
            
            usuarios = guardaUsuarioEnJuego(usuarioEnJuego, usuarios);
            
        } while (!aciertoEnTurno.bingo)

        respuesta = confirm ("Quieres jugar otra partida?");

        if(respuesta === false) break;
        
        
    }  while (respuesta)
    
    if (!formaEscape) 
        alert("Sentimos salgas sin jugar, hasta otra!");
    else
        alert("Gracias por jugar a BINGO!");
    

    return usuarios;

}



bingo();


