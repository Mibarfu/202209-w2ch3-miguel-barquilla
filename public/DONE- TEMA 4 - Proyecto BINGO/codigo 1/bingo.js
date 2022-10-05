const bingo = () => {
   
    let bolaEnJuego;
    let cartonEnJuego = [];
    let bolasSacadasEnJuego = [];
    let usuarioEnJuego = [];
    let usuarios = [];

    // ---------------------------------------------

    const generaNuevoCarton = () => {
    
        let fila;
        let numeroRandom;
        let listaNumerosDados = [];
   
        cartonEnJuego = [];
        bolasSacadasEnJuego = [];

        for (let ii = 1; ii <= 3; ii++) {
            fila = [];
            for (let i = 1; i <= 5 ; i++) {
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

    }


    const mostrarCarton = () => {
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


    const actualizaCarton = (bola) => {
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


    const sacarBola = () => {
        let bola;

        do {
            bola = Math.floor(Math.random() * (90 - 1) + 1)
        } while (bolasSacadasEnJuego.includes(bola))

        bolasSacadasEnJuego.push(bola);

        return bola;
    }
 
    
    const inicializaNuevoUsuario = (nuevoNombre, continuaUsuario) => {

        usuarioVacio = {
            nombre : nuevoNombre,
            puntos : 0,
            aciertosNumeros : 0,
            lineasCompletas : 0,
            turnosFallidos : 0,
            bingo : false
        }

        const indiceUsuario = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() === nuevoNombre.toLowerCase())
        
        if (indiceUsuario === -1 ) {
            usuarioEnJuego = usuarioVacio;
            return false;
        } else {
            if (continuaUsuario)
                usuarioEnJuego = usuarios[indiceUsuario]

            return true;
        }

    }


    const guardaUsuarioEnJuego = () => {
        
        const indiceModificar = usuarios.findIndex(usuario => usuario.nombre === usuarioEnJuego.nombre);

        if (indiceModificar > -1) {
            usuarios[indiceModificar] = usuarioEnJuego;
            return true;
        } else { 
            usuarios.push(usuarioEnJuego);
            return false;                                      
        }

    }


    const calculaPuntosUsrEnJuego = () => {
        let puntos = ((usuarioEnJuego.aciertosNumeros * 5) + (usuarioEnJuego.lineasCompletas * 25) +
                     (usuarioEnJuego.bingo ? 100 : 0)) * 15;
        
        puntos -= 5 * usuarioEnJuego.turnosFallidos;

        puntos = puntos > 0 ? puntos : 0;
        
        usuarioEnJuego.puntos = puntos;
    }


    const actualizaUsuarioEnJuego = (acierto) => {
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


    const muestraRanking = () => {
            
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


    const entradaUsuario = () => {
 
        let nombre, reNombre;

        do {
            do {
                nombre = prompt("Cual será tu nombre de usuario en la partida?");
                if (nombre === null) break;
                nombre = nombre.trim();
            } while (nombre === "")
            if (nombre ===  null) break;
                   
            if (inicializaNuevoUsuario(nombre, false)) {
                do {
                    reNombre = prompt("EL usuario \"" + nombre + "\" ya existe.\n" +
                                "[1] Si deseas continuar con ese nombre (sumando puntos).\n" +
                                "[2] Elegir otro nombre.");
                    if (reNombre ===  null) return false;
                    reNombre = reNombre.trim();
                } while (!/^[12]$/.test(reNombre))
                
                if (reNombre === "1") {
                    inicializaNuevoUsuario(nombre, true);
                    break;
                }
            } else {
                inicializaNuevoUsuario(nombre, false);
                break;
            }

        } while (reNombre === "2")

        if (nombre === null)
            return false;

        return true;
    }
 

    const jugar = () => {
        let respuesta, respuesta2;
        
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
 
        alert ("********************************************************\n" +
               `    ${usuarioEnJuego.nombre}!, empieza el juego!\n` +
               "********************************************************");

        let acierto;
        do {

            bolaEnJuego = sacarBola();
            acierto = actualizaCarton(bolaEnJuego);
            actualizaUsuarioEnJuego(acierto);
            calculaPuntosUsrEnJuego();
            
            if (acierto.linea && !acierto.bingo){
                alert("--------------------------\n" +
                    "   LINEAAAAAAA!!\n" +
                    "--------------------------");
            }
            else if (acierto.bingo) {
                alert("-------------------------\n" +
                    "   BINGO!\n" +
                    "   BINGOOO!\n" +
                    "   BINGOOOOOOOOOOOOOOO!!\n" +
                    "-------------------------");
                break;
            }
            else {
                let estadoUsuario;

                if (acierto.bola) {
                    estadoUsuario = "  :) Este le tengo !!!!";
                }
                else {
                    estadoUsuario = "  :("
                }

                respuesta2 = prompt ("-------Tu cartón---------\n" +
                                        mostrarCarton() +
                                     "---------------------------" +
                                     "\n        ----BOMBO---" +
                                     "\n         >>> " + bolaEnJuego + " <<<      " +
                                     "\n        ----------------" +
                                     "\n Puntos: " + usuarioEnJuego.puntos + "     " + estadoUsuario,
                                     "Tirar nuevo turno!");
            }

            if (respuesta2 === null) break;

        } while (respuesta !== null)

        return respuesta === null ? false : true;

    }


    // ---------------------------------------------
  

    muestraSistemaPuntuacion();

    let respuesta;
    let retorno = true;
    do {
        if (!entradaUsuario()){
            retorno = false;
            break;
        };                    

        alert(muestraRanking());

        if (!jugar()) {
            retorno = false;
            break;
        }

        guardaUsuarioEnJuego();

        do {
            respuesta = prompt ("Quieres jugar otra partida [s/n]?");
        } while (!/^\s*[sSnN]\s*$/.test(respuesta) && respuesta !== null);

        if(respuesta !== null) respuesta.toLowerCase();
    
    }  while (respuesta.trim().toLowerCase() === "s")
    
    return retorno;
}



if (!bingo()) 
    alert("Sentimos salgas sin jugar, hasta otra!");
else
    alert("Gracias por jugar a BINGO!");