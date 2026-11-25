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
//      nivel: "NIVEL 1 | Título del nivel",   // opcional: se muestra arriba de la pregunta
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
//  - Si algo está mal escrito, la página te muestra qué revisar.
// =====================================================================

const CONFIG = {
  titulo: "¿Cuánto conocés a la pequeña?",
  subtitulo: "Respondé las preguntas y descubrí quién la conoce mejor",
  mezclarPreguntas: false,   // true = cambia el orden en cada partida (mezcla los niveles)
  mezclarOpciones: false,    // true = mezcla a/b/c dentro de cada pregunta
  mostrarCorrecta: true,     // true = si errás, te marca cuál era la correcta
};

const N1 = "NIVEL 1 | Desde que llegó al mundo";
const N2 = "NIVEL 2 | Conociendo a la pequeña";
const N3 = "NIVEL 3 | ¡A ver quién conoce sus travesuras!";
const NX = "PREGUNTAS EXTRA";

const PREGUNTAS = [
  // ---------------- NIVEL 1 ----------------
  {
    nivel: N1,
    pregunta: "¿En qué fecha nació?",
    opciones: { a: "17 de marzo", b: "19 de marzo", c: "21 de marzo" },
    correcta: "b",
    explicacion: "",
  },
  {
    nivel: N1,
    pregunta: "¿A qué hora nació?",
    opciones: { a: "12:31", b: "12:13", c: "13:21" },
    correcta: "a",
    explicacion: "",
  },
  {
    nivel: N1,
    pregunta: "¿Cuánto pesó al nacer?",
    opciones: { a: "3,250 kg", b: "3,380 kg", c: "3,490 kg" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: N1,
    pregunta: "¿Cuánto midió?",
    opciones: { a: "47 cm", b: "49 cm", c: "51 cm" },
    correcta: "b",
    explicacion: "",
  },
  {
    nivel: N1,
    pregunta: "¿En qué lugar nació?",
    opciones: { a: "Hospital Alemán", b: "Hospital Italiano", c: "Sanatorio Otamendi" },
    correcta: "a",
    explicacion: "",
  },

  // ---------------- NIVEL 2 ----------------
  {
    nivel: N2,
    pregunta: "¿Cuál fue su primera palabra?",
    opciones: { a: "Mamá", b: "Tomi", c: "Papá" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: N2,
    pregunta: "¿Cuál es su comida favorita?",
    opciones: { a: "Puré", b: "Teta", c: "Banana" },
    correcta: "b",
    explicacion: "",
  },
  {
    nivel: N2,
    pregunta: "¿Qué juguete o peluche es su preferido?",
    opciones: { a: "Las etiquetas", b: "El sonajero", c: "El mordillo" },
    correcta: "a",
    explicacion: "¡Ni peluche ni juguete: las etiquetas!",
  },
  {
    nivel: N2,
    pregunta: "¿Qué canción o dibujito le gusta más?",
    opciones: {
      a: "La vaca Lola",
      b: "Un elefante se balanceaba",
      c: "Saco una manita y la hago bailar",
    },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: N2,
    pregunta: "¿Qué es lo que más disfruta hacer?",
    opciones: { a: "Pasear en cochecito", b: "Bañarse", c: "Que le canten canciones" },
    correcta: "a",
    explicacion: "",
  },

  // ---------------- NIVEL 3 ----------------
  {
    nivel: N3,
    pregunta: "¿Quién logra hacerla reír más fácilmente?",
    opciones: { a: "Mamá", b: "Tomi", c: "Papá" },
    correcta: "b",
    explicacion: "¡Tomi, su hermano!",
  },
  {
    nivel: N3,
    pregunta: "¿Qué hace cuando tiene sueño?",
    opciones: {
      a: "Se chupa el dedo y se queda quieta",
      b: "Se pone mimosa y pide upa",
      c: "Llora y se restriega los ojos",
    },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: N3,
    pregunta: "¿Cuál es su travesura o maña más característica?",
    opciones: { a: "Rola sin parar hasta caerse", b: "Treparse", c: "Ambas son correctas" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: N3,
    pregunta: "¿Qué cosa no le gusta para nada?",
    opciones: { a: "Estar atada", b: "Que le cambien el pañal", c: "Que la vistan" },
    correcta: "a",
    explicacion: "",
  },
  {
    nivel: N3,
    pregunta: "¿A quién se parece más en su personalidad o gestos?",
    opciones: { a: "Mamá", b: "Tomi", c: "Papá" },
    correcta: "b",
    explicacion: "¡A Tomi, su hermano!",
  },

  // ---------------- EXTRA ----------------
  {
    nivel: NX,
    pregunta: "¿Quién eligió su nombre?",
    opciones: { a: "Papá", b: "Mamá", c: "Tomi" },
    correcta: "a",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Cuál fue el primer viaje que hizo?",
    opciones: { a: "Uruguay", b: "La Costa", c: "Brasil" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Cuál fue su primer alimento?",
    opciones: { a: "Banana pisada", b: "Puré", c: "Papilla de manzana" },
    correcta: "b",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Con quién suele quedarse más tiempo jugando?",
    opciones: { a: "Papá", b: "Tomi", c: "Mamá" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Qué es lo que más le gusta hacer con mamá o papá?",
    opciones: {
      a: "Abrazarlos",
      b: "Que le hagan cosquillas",
      c: "Jugar a «¿dónde está? ¡acá está!»",
    },
    correcta: "a",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Cuál fue la primera mascota que conoció?",
    opciones: { a: "Kobi", b: "Burak", c: "Malena" },
    correcta: "a",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Qué integrante de la familia la hace reír más?",
    opciones: { a: "Papá", b: "Tomi", c: "Abuela Ana" },
    correcta: "b",
    explicacion: "¡Tomi, su hermano!",
  },
  {
    nivel: NX,
    pregunta: "¿Con quién hace videollamada todos los días?",
    opciones: { a: "Abuelo", b: "Tía", c: "Abuela Ana" },
    correcta: "c",
    explicacion: "",
  },
  {
    nivel: NX,
    pregunta: "¿Cuánto pelito tenía al nacer?",
    opciones: { a: "Nada", b: "Poquito", c: "Una peluca negra importante" },
    correcta: "c",
    explicacion: "",
  },
];
