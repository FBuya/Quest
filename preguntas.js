// =====================================================================
//  PREGUNTAS DEL CUESTIONARIO
//  Este es el ÚNICO archivo que tenés que tocar para cambiar el juego.
// =====================================================================
//
//  Cómo agregar una pregunta:
//  copiá un bloque { ... }, pegalo dentro de la lista PREGUNTAS
//  (separado por coma) y cambiá los textos.
//
//    {
//      pregunta: "Texto de la pregunta",
//      opciones: {
//        a: "Opción A",
//        b: "Opción B",
//        c: "Opción C",
//      },
//      correcta: "b",          // "a", "b" o "c"
//      explicacion: "",        // opcional: se muestra después de responder
//    },
//
//  Reglas:
//  - Los textos van entre comillas "...".
//  - Si un texto lleva comillas adentro, usá comillas simples: 'el "mejor"'.
//  - Cada bloque termina con coma.
//  - Si algo está mal escrito, la página te muestra qué pregunta revisar.
// =====================================================================

const CONFIG = {
  titulo: "Trivia",
  subtitulo: "Respondé las preguntas y mirá cuántas acertás",
  mezclarPreguntas: false,   // true = cambia el orden en cada partida
  mezclarOpciones: false,    // true = mezcla a/b/c dentro de cada pregunta
  mostrarCorrecta: true,     // true = si errás, te marca cuál era la correcta
};

const PREGUNTAS = [
  {
    pregunta: "Pregunta de ejemplo 1",
    opciones: {
      a: "Respuesta A",
      b: "Respuesta B",
      c: "Respuesta C",
    },
    correcta: "a",
    explicacion: "Acá podés poner una explicación (o dejarlo vacío).",
  },
  {
    pregunta: "Pregunta de ejemplo 2",
    opciones: {
      a: "Respuesta A",
      b: "Respuesta B",
      c: "Respuesta C",
    },
    correcta: "b",
    explicacion: "",
  },
  {
    pregunta: "Pregunta de ejemplo 3",
    opciones: {
      a: "Respuesta A",
      b: "Respuesta B",
      c: "Respuesta C",
    },
    correcta: "c",
    explicacion: "",
  },
];
