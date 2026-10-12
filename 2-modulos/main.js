import agregar, {filtrarProblemasPorDificultad} from "./funciones.js";
import {problemas} from "./datos.js";

const dificulatDificil = filtrarProblemasPorDificultad(problemas,  "dificil");
console.log(`Los problemas de dificultad dificil es :`);
console.log(dificulatDificil);

agregar(problemas, "programar una pagina de la NBA", "medio");
console.log("se agrego exitosamente...");
console.log(problemas);