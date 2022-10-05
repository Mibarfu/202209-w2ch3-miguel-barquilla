// ****************************************************************************************************************
//    Para que este juego sea mas agradable visualmente, se le ha  añadido una serie de codigos Unicode acordes
//    al momento del texto. Se han elejido codigos UTF- 8 que esten incluidas todas las plataformas UTF-8, 
//    aunque entre ellas el aspecto pueda variar.
// ****************************************************************************************************************


let letras = [
  {
    letra: "a",
    palabra: "abducir",
    estado: 1,
    preguntas:[
      "Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas",
      "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "Silogismo cuya premisa mayor es evidente y la menor menos evidente o solo probable"
    ]
  },
  {
    letra: "b",
    palabra: "bingo",
    estado: 0,
    preguntas:[
      "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      "Juego en el que la suerte depende de la bola que salga del bombo",
      "Juego en el que se canta..."
    ]
  },
  {
    letra: "c",
    palabra: "churumbel",
    estado: 0,
    preguntas: [
      "Niño, crío, bebé",
      "Muchacho pequeño",
      "Forma de nombrar a un niño pequeño de forma cariñosa"
    ]
  },
  {
    letra: "d",
    palabra: "diarrea",
    estado: 0,
    preguntas: [
      "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "Mejor que no te pase si no tienes un baño cerca",
      "A veces te mancha lo que deberia de estar seco"
    ]
  },
  {
    letra: "e",
    palabra: "ectoplasma",
    estado: 0,
    preguntas: [
      "Gelatinoso y se encuentra debajo de la membrana plasmática.", 
      "Los cazafantasmas medían su radiación",
      "Sustancia blanca y vaporosa que un médium emite por la boca"
    ]
  },
  {
    letra: "f",
    palabra: "facil",
    estado: 0,
    preguntas: [
      "Que no requiere gran esfuerzo, capacidad o dificultad",
      "Lo es montar en bici",
      "Se dice cuando algo esta chupa'o..."
    ]
  },
  {
    letra: "g",
    palabra: "galaxia",
    estado: 0,
    preguntas:[
      "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "Forma parte del nombre de una de las sagas de George Lucas",
      "La mas cercana a la nuestra esta a 2.537 millones de años luz."
    ]
  },
  {
    letra: "h",
    palabra: "harakiri",
    estado: 0,
    preguntas: [
      "Suicidio ritual japonés por desentrañamiento",
      "Se usa una daga llamada Tantò para hacerselo",
      "El samurai se lo hacia cuando la cagaba"
    ]
  },
  {
    letra: "i",
    palabra: "iglesia",
    estado: 0,
    preguntas: [
      "Templo cristiano",
      "Casa de diós",
      "Donde se realizan las misas"
    ]
  },
  {
    letra: "j",
    palabra: "jabali",
    estado: 0,
    preguntas: [
      "Variedad salvaje del cerdo",
      "Personaje de la película 'El Rey León', de nombre Pumba",
      "Animal de piel gruesa con colmillos exteriores en el lateral inferior de la boca"
    ]
  },
  {
    letra: "k",
    palabra: "kamikaze",
    estado: 0,
    preguntas: [
      "Esta persona no teme por su vida, es un...",
      "Persona que se juega la vida realizando una acción temeraria",
      "El famoso piloto japones Kiyoshi Ogawa conocido por se un..."
    ]
  },
  {
    letra: "l",
    palabra: "linterna",
    estado: 0,
    preguntas: [
      "Aparato usado para alumbrar",
      "Aparte de manu, los hay de frotal",
      "Antiguamente eran de aceite, ahora son de led"
    ]
  },
  {
    letra: "m",
    palabra: "martillo",
    estado: 0,
    preguntas: [
      "Herramienta para golpear",
      "Arma de Thor",
      "Los pianos tienen muchos para golpear las cuerdas"
    ]
  },
  {
    letra: "n",
    palabra: "necedad",
    estado: 0,
    preguntas: [
      "Demostración de poca inteligencia",
      "Dicho o hecho propios de la persona necia.",
      "cualidad o adjetivo que describe al individuo necio"
    ]
  },
  {
    letra: "ñ",
    palabra: "señal",
    estado: 0,
    preguntas: [
      "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "Las carreteras estan llenas de ellas",
      "Se suele utilizar el dedo indice para ejecutar esa accion"
    ]
  },
  {
    letra: "o",
    palabra: "ojo",
    estado: 0,
    preguntas: [
      "Puedes cerrar uno y no pierdes el sentido",
      "Lagrimea",
      "Mientras duermes no los necesitas"
    ]
  },
  {
    letra: "p",
    palabra: "petardo",
    estado: 0,
    preguntas: [
      "Usado en fiestas donde se usa pa pirotecnia",
      "La malloria contiene mecha",
      "Hacen Pummm"
    ]
  },
  {
    letra: "q",
    palabra: "queso",
    estado: 0,
    preguntas: [
      "Producto obtenido por la maduración de la cuajada de la leche",
      "Usado en los dibujos animados para atraer a los ratones",
      "Alimento el cual alguno de su variedad esta lleno de agujeros"
    ]
  },
  { 
    letra: "r",
    palabra: "raton",
    estado: 0,
    preguntas: [
      "Roedor",
      "Periferico del ordenador con nombre de animal",
      "Animal al que segun los dibujos animados les gusta mucho el queso"
    ]
  },
  {
    letra: "s",
    palabra: "stackoverflow",
    estado: 0,
    preguntas: [
      "Comunidad salvadora de todo desarrollador informático",
      "La gente pregunta temas de programacion y respuesta mas valida la tildan como buena",
      "Web donde resuelves dudas de programacion por medio de preguntas de terceros"
    ]
  },
  {
    letra: "t",
    palabra: "terminator",
    estado: 0,
    preguntas: [
      "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "Sayonara Baby",
      "El androide justiciero"
    ]
  },
  {
    letra: "u",
    palabra: "unamuno",
    estado: 0,
    preguntas: [
      "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "Autor del libro 'Niebla' de 1914",
      "Escritor español nacido en Bilbao el 29 de Septiembre de 1936"
    ]
  },
  {
    letra: "v",
    palabra: "vikingos",
    estado: 0,
    preguntas: [
      "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "Serie realizada entre el 1972 y 1974 en el que el protagonista llamado Vicke era uno de este tipo de guerreros",
      "Guerreos ilustrados normalmente con cascos de cuernos, ropajes de pieles y achas como armas"
    ]
  },
  {
    letra: "w",
    palabra: "sandwich",
    estado: 0,
    preguntas: [
      "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "Se suele en españa hacer con pan de molde y a veces se pone a la plancha",
      "Si lo pones en una plancha de presion, se convierte en un biquini"
    ]
  },
  {
    letra: "x",
    palabra: "botox",
    estado: 0,
    preguntas: [
      "Toxina bacteriana utilizada en cirujía estética",
      "Muchas famosas se lo han puesto en los labios",
      "Se usa para engrandecer o aumetar zonas localizadas del cuerpo, sobre todo la cara"
    ]
  },
  {
    letra: "y",
    palabra: "popeye",
    estado: 0,
    preguntas: [
      "Conocido por comer muchas espinacas",
      "Serie del marinero con la pipa, que cierto alimento le daba una estraordinaria fuerza",
      "Serie en la que el protagonista tenia como pareja una tal Olivia"
    ]
  },
  {
    letra: "z",
    palabra: "zen",
    estado: 0,
    preguntas: [
      "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "Disciplina que busca transformar la conciencia y depertarno del mundo",
      "Escuela de budismo mahāyāna que se originó en China durante la dinastía Tang"
    ]
  },
];


let usuarios = [];

let letraEnJuego = {};

let usuarioEnJuego = {};



function Temporizador () {
  
  const tiempoActual = new Date();
  let _tiempoInicio;
  let _segundos;
  let _segundosEnPausa;

  this.iniciar = function(_segundosADescontar) {
    _segundos = _segundosADescontar * 1000;
    _tiempoInicio = Date.now();
  }

  this.verTiempoRestante = function() {
    return Math.floor((_segundos - (Date.now() - _tiempoInicio)) / 1000);
  }

  this.pausa = function() {
    _segundosEnPausa = _segundos - (Date.now() - _tiempoInicio);
  }

  this.continua = function () {
    _segundos = _segundosEnPausa;
    _tiempoInicio = Date.now();
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
  tableroJuego += "         " + String.fromCodePoint(0x2757) + (letraEnJuego.palabra[0].toLowerCase() === letraEnJuego.letra ?
    " Con la " : " Contiene la ");
  tableroJuego += letraEnJuego.letra.toUpperCase() + " " + String.fromCodePoint(0x2757) +"\n\n";
  tableroJuego += letraEnJuego.preguntas[Math.floor(Math.random() * 3)] + "\n";
  
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
    letraEnJuego.preguntas + "...\n" +
    "...es: " + String.fromCodePoint(0x2757) + letraEnJuego.palabra + String.fromCodePoint(0x2757)
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
      else if (respuesta === letraEnJuego.palabra) {
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
  const FINDETIEMPO = 1, ROSCOCOMPLETO = 3, SALIDAUSUARIO = 2, RESPUESTAVALIDA = 0; 

  bienvenida();

  do {  
    inicializaEstadoLetras();

    while (nuevoUsuario() === "") {

      if (confirm ("Deseas abandonar el juego?")) return null;

    }


    reloj.iniciar(tiempo);

    do {
      estadoRespuesta = controlRespuesta(prompt(rellenaTableroJuego(letraEnJuego)));
    } while (estadoRespuesta === RESPUESTAVALIDA)


    switch (estadoRespuesta) {
      case FINDETIEMPO:
        finDelTiempo();
        break;
      case ROSCOCOMPLETO:
        muestraPanelAciertos(true);
        usuarios.push(usuarioEnJuego);
        mostrarRanking();
        break;
      case SALIDAUSUARIO:
        muestraPanelAciertos(false);
        break;
    }

  } while (confirm ("Otra partida? " + String.fromCodePoint(0x1f3ae)) === true)

};

pasapalabra(130);

