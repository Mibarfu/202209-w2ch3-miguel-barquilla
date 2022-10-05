// ****************************************************************************************************************
//    Para que este juego sea mas agradable visualmente, se le ha  añadido una serie de codigos Unicode acordes
//    al momento del texto. Se han elejido codigos UTF- 8 que esten incluidas todas las plataformas UTF-8, 
//    aunque entre ellas el aspecto pueda variar.
// ****************************************************************************************************************


let letras = [
  {
    letra: "a",
    palabra: ["abducir", "anticuario", "alcachofa"],
    estado: 1,
    preguntas:[
      "Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas",
      "Persona que colecciona o negocia con antigüedades",
      "Planta comestible con tallos blancos y hojas verdes. También está en la ducha"
    ]
  },
  {
    letra: "b",
    palabra: ["bingo", "biberon", "botiquin"],
    estado: 0,
    preguntas:[
      "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      "Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma",
      "Caja en la que se guardan medicinas"
    ]
  },
  {
    letra: "c",
    palabra: ["churumbel", "capo", "camilla"],
    estado: 0,
    preguntas: [
      "Niño, crío, bebé",
      "Jefe de la mafia, especialmente de narcotraficantes",
      "Cama en la que se llevan de un lado a otro heridos o enfermos"
    ]
  },
  {
    letra: "d",
    palabra: ["diarrea", "desodorante", "dedicatoria"],
    estado: 0,
    preguntas: [
      "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "Producto que se utiliza para suprimir el olor corporal o de algún recinto",
      "Palabras que se escriben y se dicen como regalo a alguien"
    ]
  },
  {
    letra: "e",
    palabra: ["ectoplasma", "efimero", "empañar"],
    estado: 0,
    preguntas: [
      "Gelatinoso y se encuentra debajo de la membrana plasmática", 
      "Pasajero, de corta duración",
      "Mancharse un cristal con el vapor de agua"
    ]
  },
  {
    letra: "f",
    palabra: ["facil", "faja", "fabula"],
    estado: 0,
    preguntas: [
      "Que no requiere gran esfuerzo, capacidad o dificultad",
      "Prenda interior elástica que ciñe la cintura, o la cintura y las caderas",
      "Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"
    ]
  },
  {
    letra: "g",
    palabra: ["galaxia" , "gominola", "guisar"],
    estado: 0,
    preguntas:[
      "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "Golosina blanca masticable, generalmente recubierta de azúcar",
      "Preparar alimentos cocinándolos con calor"
    ]
  },
  {
    letra: "h",
    palabra: ["harakiri", "historia", "hamaca"],
    estado: 0,
    preguntas: [
      "Suicidio ritual japonés por desentrañamiento",
      "Conjunto de todos los hechos ocurridos en tiempos pasados",
      "Tela resistente que se cuelga de sus extremos y se utiliza como cama"
    ]
  },
  {
    letra: "i",
    palabra: ["iglesia", "ilves", "imperdible"],
    estado: 0,
    preguntas: [
      "Templo cristiano, casa de dios",
      "Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",
      "Alfiler que se abrocha quedando su punta dentro de un gancho"
    ]
  },
  {
    letra: "j",
    palabra: ["jabali", "judion", "jinete"],
    estado: 0,
    preguntas: [
      "Variedad salvaje del cerdo, personaje de la película 'El Rey León', de nombre Pumba",
      "Variedad de judía de vainas anchas y semilla grande",
      "Persona que monta a caballo"
      
    ]
  },
  {
    letra: "k",
    palabra: ["kamikaze", "kilometro", "karaoke"],
    estado: 0,
    preguntas: [
      "Persona que se juega la vida realizando una acción temeraria",
      "Unidad de longitud equivalente a 1000 metros",
      "Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla"
    ]
  },
  {
    letra: "l",
    palabra: ["linterna", "linaje", "litera"],
    estado: 0,
    preguntas: [
      "Aparato nomalmente de mano usado para alumbrar",
      "Ascendencia o descendencia de una familia, especialmente noble",
      "Mueble formado por dos camas puestas una encima de la otra"
    ]
  },
  {
    letra: "m",
    palabra: ["martillo", "madriguera", "mayonesa"],
    estado: 0,
    preguntas: [
      "Herramienta para golpear",
      "Cueva en la que habitan ciertos animales, especialmente los conejos",
      "Salsa que se hace batiendo huevo y aceite"
    ]
  },
  {
    letra: "n",
    palabra: ["necedad", "navato", "nuca"],
    estado: 0,
    preguntas: [
      "Demostración de poca inteligencia",
      "Espinazo de los vertebrados",
      "Parte posterior de la cabeza situada encima del cuello"
    ]
  },
  {
    letra: "ñ",
    palabra: ["señal", "acuñar", "teñir"],
    estado: 0,
    preguntas: [
      "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "Hacer o fabricar moneda",
      "Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados"
    ]
  },
  {
    letra: "o",
    palabra: ["ojo", "onirico", "orilla"],
    estado: 0,
    preguntas: [
      "Puedes cerrar uno y no pierdes el sentido",
      "Perteneciente o relativo a los sueños",
      "Borde del mar, de un lago o de un río"
    ]
  },
  {
    letra: "p",
    palabra: ["petardo", "piolet", "planchar"],
    estado: 0,
    preguntas: [
      "Usado en fiestas donde se usa pa pirotecnia",
      "Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",
      "Quitar las arrugar a una prenda"
    ]
  },
  {
    letra: "q",
    palabra: ["queso", "equilatero", "quitamanchas"],
    estado: 0,
    preguntas: [
      "Producto obtenido por la maduración de la cuajada de la leche",
      "Triángulo que tiene todos sus lados iguales",
      "Producto natural o preparado que sirve para quitar manchas"
    ]
  },
  { 
    letra: "r",
    palabra: ["raton","risaralda", "racimo"],
    estado: 0,
    preguntas: [
      "Roedor",
      "Departamento de Colombia con capital en la ciudad de Pereira",
      "Conjunto de uvas sostenidas en un mismo tallo"
    ]
  },
  {
    letra: "s",
    palabra: ["stackoverflow", "sentar", "sembrar"],
    estado: 0,
    preguntas: [
      "Comunidad salvadora de todo desarrollador informático",
      "Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas",
      "Enterrar semillas en la tierra para que crezcan"
    ]
  },
  {
    letra: "t",
    palabra: ["terminator", "tipi", "taburete"],
    estado: 0,
    preguntas: [
      "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",
      "Asiento sin respaldo"
    ]
  },
  {
    letra: "u",
    palabra: ["unamuno", "unilateral", "untar"],
    estado: 0,
    preguntas: [
      "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",
      "Extender mantequilla sobre una rebanada de pan"
    ]
  },
  {
    letra: "v",
    palabra: ["vikingos", "vilano", "vecino"],
    estado: 0,
    preguntas: [
      "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "Flor del cardo",
      "Persona que vive en el mismo barrio o edificio que otra"
    ]
  },
  {
    letra: "w",
    palabra: ["sandwich", "wifi", "walabi"],
    estado: 0,
    preguntas: [
      "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "Sistema de conexión inalámbrica, dentro de un área determinada, entre dispositivos electrónicos, y frecuentemente para acceso a internet",
      "Animal marsupial que habita en Australia. Se parece al canguro pero es de menor tamaño"
    ]
  },
  {
    letra: "x",
    palabra: ["botox", "dux", "fenix"],
    estado: 0,
    preguntas: [
      "Toxina bacteriana utilizada en cirujía estética",
      "En las repúblicas de Venecia o Génova, príncipe o magistrado supremo",
      "Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas"
    ]
  },
  {
    letra: "y",
    palabra: ["popeye", "ensayar", "yunque"],
    estado: 0,
    preguntas: [
      "Conocido por comer muchas espinacas",
      "Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",
      "Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo"
    ]
  },
  {
    letra: "z",
    palabra: ["zen", "zumbado", "zumbido"],
    estado: 0,
    preguntas: [
      "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "Participio del verbo zumbar",
      "Sonido que producen algunos insectos como la abeja o el mosquito"
    ]
  },
];


let usuarios = [];

let letraEnJuego = {};

let usuarioEnJuego = {};

let roscoEnJuego;



function Temporizador () {
  
  const tiempoActual = new Date();
  let tiempoInicio;
  let segundos;
  let segundosEnPausa;

  this.iniciar = function(segundosADescontar) {
    segundos = segundosADescontar * 1000;
    tiempoInicio = Date.now();
  }

  this.verTiempoRestante = function() {
    return Math.floor((segundos - (Date.now() - tiempoInicio)) / 1000);
  }

  this.pausa = function() {
    segundosEnPausa = segundos - (Date.now() - tiempoInicio);
  }

  this.continua = function () {
    segundos = segundosEnPausa;
    tiempoInicio = Date.now();
  }

};

const reloj = new Temporizador();




const bienvenida = () => {
  alert ("Bienveni@ a Bingo PROMPT\n" + 
         "=========================\n\n" +
         "- Deberás contestar a todas las palabras para entrar en el ranking.\n" +
         "- Tienes 130 segundos para contestar, aunque no veas descontar el contador," + 
         "  este se actualizará por cada refresco del prompt con el nuevo tiempo.\n" +
         "- Hay 3 preguntas por cada palabra las cuales saldrán de forma aleatoria."
  );
  alert ("- Puedes pasar a la siguente letra escribiendo 'pasapalabra' o bien pulsando el botón de 'Cancelar' o con [Esc].\n" +
         "- Si contestas en vacio, te cambiará la pregunta para la letra en juego.\n" +
         "- Para finalizar la partida puedes escribir 'end', en este caso no entraras en ranking, " +
         "del mismo modo que si se te termina el tiempo.");
}

const nuevoUsuario = () => {
  let nombre;

  do {
    do {
      nombre = prompt("Dime tu nombre:");
      
      if (nombre === null) break;
      
      nombre = nombre.trim();
    } while (nombre === "");
    
    if (nombre === null) return "";

    if (usuarios.some(usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase())) {
      alert("Nombre de usuario ya existe, introduce uno diferente!");
      nombre = "";
    } else {
      usuarioEnJuego = {
        nombre: nombre,
        puntuacion: 0,
        acertados: 0,
        fallidos: 0,
        tiempoSobrante: 0,
      };
        
    }
    
  } while (nombre === "");

  return nombre;
};

const inicializaEstadoLetras = () => {
  letras.forEach((noUse, indice) => indice === 0 ? letras[0].estado = 1 : letras[indice].estado = 0);

  letraEnJuego = letras[0];
  letraEnJuego.indice = 0;
};

const creaRosco = (letraEnJuego) => {
  const estadoLetras = [
    String.fromCodePoint(0x26AA),
    String.fromCodePoint(0x1F448),
    String.fromCodePoint(0x1F535),
    String.fromCodePoint(0x1F534)
  ];
  
  let rosco =
  `A${estadoLetras[letras[0].estado]}     B${
    estadoLetras[letras[1].estado]
    }     C${estadoLetras[letras[2].estado]}      ` +
    `D${estadoLetras[letras[3].estado]}     E ${
      estadoLetras[letras[4].estado]
    }      F${estadoLetras[letras[5].estado]}     ` +
    `G${estadoLetras[letras[6].estado]}     H${
      estadoLetras[letras[7].estado]
    }       I ${estadoLetras[letras[8].estado]}\n` +
    `J ${estadoLetras[letras[9].estado]}     K${
      estadoLetras[letras[10].estado]
    }     L${estadoLetras[letras[11].estado]}      ` +
    `M${estadoLetras[letras[12].estado]}     N${
      estadoLetras[letras[13].estado]
    }     Ñ${estadoLetras[letras[14].estado]}     ` +
    `O${estadoLetras[letras[15].estado]}     P${
      estadoLetras[letras[16].estado]
    }      Q ${estadoLetras[letras[17].estado]}\n` +
    `R${estadoLetras[letras[18].estado]}     S${
      estadoLetras[letras[19].estado]
    }     T${estadoLetras[letras[20].estado]}       ` +
    `U${estadoLetras[letras[21].estado]}     V${
      estadoLetras[letras[22].estado]
    }     W${estadoLetras[letras[23].estado]}    ` +
    `X ${estadoLetras[letras[24].estado]}     Y${
      estadoLetras[letras[25].estado]
    }       Z ${estadoLetras[letras[26].estado]}  \n`;

  return rosco;
};

const seleccionDeRosco = () => {
  roscoEnJuego = Math.floor(Math.random() * 3);
  alert(usuarioEnJuego.nombre + ", juegas con el rosco numero "  + (roscoEnJuego + 1) + " " + String.fromCodePoint(0x1f3b2));
}

const numericoToEmoji = (numero) => {
  numeroEmoji = "";

  numero.toString().split("").forEach(numero => {
    numeroEmoji +=String.fromCodePoint(numero.charCodeAt(), 0xfe0f, 0x20e3);
  });
  
  return numeroEmoji;
};

const rellenaTableroJuego = () => {
  let tableroJuego = "";
  
  tableroJuego += creaRosco(letraEnJuego.letra) + "\n";
  tableroJuego += String.fromCodePoint(8987) + numericoToEmoji(reloj.verTiempoRestante()) + String.fromCodePoint(0x23f3)  + " segundos ";
  tableroJuego += "         " + String.fromCodePoint(0x2757) + (letraEnJuego.palabra[roscoEnJuego][0].toLowerCase() === letraEnJuego.letra ?
    " Con la " : " Contiene la ");
  tableroJuego += letraEnJuego.letra.toUpperCase() + " " + String.fromCodePoint(0x2757) +"\n\n";
  tableroJuego += letraEnJuego.preguntas[roscoEnJuego] + "\n";
  
  return tableroJuego;
  
};

const avanceLetra = (estado) => {

  let indice = letraEnJuego.indice;

  switch (estado) {
    case "pasapalabra":
      letras[indice].estado = 0;
      break;
    case "acierto":
      letras[indice].estado = 2;
      break;
    case "fallo":
      letras[indice].estado = 3;
      break;
  }

  if (letras.every(letra => letra.estado > 1))
    letraEnJuego = null;

  else {
      
    do {

      if (letraEnJuego.letra === "z") {
        letraEnJuego = letras[0];
        letraEnJuego.indice = 0;
        indice = 0;
      } else {
        indice ++;
        letraEnJuego = letras[indice];
        letraEnJuego.indice = indice;
      }
      
    } while (letras[letraEnJuego.indice].estado !== 0)


    letras[letraEnJuego.indice].estado = 1;
  }


};

const noooFallo = () => {
  alert(String.fromCodePoint(0x1F632) + "Nooooooo!!\n\n"+
    letraEnJuego.preguntas[roscoEnJuego] + "...\n" +
    "...es: " + String.fromCodePoint(0x2757) + letraEnJuego.palabra[roscoEnJuego] + String.fromCodePoint(0x2757)
  );
};

const finDelTiempo = () => {
  alert ("\n\n           " + String.fromCodePoint(0x231B) + "TIEMPO!!!" + String.fromCodePoint(0x231B))
};

const controlRespuesta = (respuesta) => {

  if (reloj.verTiempoRestante() <= 0) return 1; 

  if (respuesta !== null) {
    respuesta = respuesta.trim().toLowerCase();

    if (respuesta !== "") {
      
      if (respuesta === "pasapalabra")
        avanceLetra("pasapalabra");
      else if (respuesta === letraEnJuego.palabra[roscoEnJuego]) {
        usuarioEnJuego.acertados ++;
        avanceLetra("acierto");
      }
      else if (respuesta === "end")
        return 2;
      else {
        usuarioEnJuego.fallidos ++;
        reloj.pausa();
        noooFallo();
        reloj.continua();
        avanceLetra("fallo");
      }

    }
  }
  else
    avanceLetra("pasapalabra");

  if (letraEnJuego === null) {
    usuarioEnJuego.tiempoSobrante = reloj.verTiempoRestante();
    usuarioEnJuego.puntuacion = usuarioEnJuego.acertados * usuarioEnJuego.tiempoSobrante;
    return 3;
  }

  return 0;
};

const muestraPanelAciertos = (panelCompleto) => {
  let mensaje = "";
  mensaje = "Hola " + usuarioEnJuego.nombre + ", este ha sido tu resultado:\n\n" +
    String.fromCodePoint(0x1f535) + " Aciertos: " + usuarioEnJuego.acertados + "\n";
  
  if (panelCompleto) {
    mensaje += String.fromCodePoint(0x1f534) + " Fallos: " + usuarioEnJuego.fallidos + "\n" +
      String.fromCodePoint(0x231B) + " Tiempo sobrante: " + usuarioEnJuego.tiempoSobrante + " segundos.\n" +
      String.fromCodePoint(0x1f3c6) + " Total Puntos: " + usuarioEnJuego.puntuacion
  };

  alert (mensaje);
};

const mostrarRanking = () => {
  let mensaje = "Ranking:\n";

  const usuariosOrdenados = usuarios;
  usuariosOrdenados.sort((a, b) => b.puntuacion - a.puntuacion);
  
  usuariosOrdenados.forEach ((usuario, indice) => 
    mensaje += (indice <= 2 ? String.fromCodePoint(0x1f3c6) : String.fromCodePoint(0x1f3c5)) + `${indice + 1}- ${usuario.nombre}: ${usuario.puntuacion} puntos y ${usuario.acertados} aciertos\n`
  )

  alert (mensaje);

}





const pasapalabra = (tiempo) => {

  let estadoRespuesta;
  const finDeTiempo = 1, roscoCompleto = 3, salidaUsuario = 2, respuestaValida = 0; 

  

  bienvenida();

  do {  
    inicializaEstadoLetras();

    while (nuevoUsuario() === "") {

      if (confirm ("Deseas abandonar el juego?")) return null;

    }

    seleccionDeRosco();

    reloj.iniciar(tiempo);

    do {
      estadoRespuesta = controlRespuesta(prompt(rellenaTableroJuego(letraEnJuego)));
    } while (estadoRespuesta === respuestaValida)


    switch (estadoRespuesta) {
      case finDeTiempo:
        finDelTiempo();
        break;
      case roscoCompleto:
        muestraPanelAciertos(true);
        usuarios.push(usuarioEnJuego);
        mostrarRanking();
        break;
      case salidaUsuario:
        muestraPanelAciertos(false);
        break;
    }

  } while (confirm ("Otra partida? " + String.fromCodePoint(0x1f3ae)) === true)

};

pasapalabra(130);

