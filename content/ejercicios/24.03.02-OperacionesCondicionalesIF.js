const prompt = require("prompt-sync")();
console.log("Ejercicio №2: operaciones condicionales - IF");

// ---------- Ejercicio 1 ----------
console.log("2.1 Muestra si el número es positivo, negativo o cero.");

let num = Number(prompt("Numero: "));
if (num > 0) {
   console.log("! positivo");
} else if (num < 0) {
   console.log("! negativo");
} else {
   console.log("! cero");
}

// ---------- Ejercicio 2 ----------
console.log(
   "\n2.2 Muestra si la persona es niño, adolescente, adulto o anciano según la edad.",
);

let edad = Number(prompt("Edad: "));

if (edad > 64) {
   console.log("un anciano");
} else if (edad > 17) {
   console.log("un adulto");
} else if (edad > 12) {
   console.log("un adolescente");
} else if (edad >= 0) {
   console.log("un niño");
} else {
   console.log("Error");
}

// ---------- Ejercicio 3 ----------
console.log(
   "\n2.3 Muestra el día de la semana correspondiente al número ingresado.",
);

num = Number(prompt("Numero de Dia: "));

switch (num) {
   case 1:
      console.log("Lunes");
      break;

   case 2:
      console.log("Martes");
      break;

   case 3:
      console.log("Miercoles");
      break;

   case 4:
      console.log("Jueves");
      break;

   case 5:
      console.log("Viernes");
      break;

   case 6:
      console.log("Sábado");
      break;

   case 7:
      console.log("Domingo");
      break;

   default:
      console.log("Error");
      break;
}

// ---------- Ejercicio 4 ----------
console.log(
   "\n2.4 Muestra la letra de calificación correspondiente según el número ingresado.",
);

let calificación = Number(prompt("Calificación: "));
let letra;

if (calificación < 20) {
   letra = 5;
} else if (calificación < 40) {
   letra = 4;
} else if (calificación < 60) {
   letra = 3;
} else if (calificación < 80) {
   letra = 2;
} else if (calificación < 100) {
   letra = 1;
}

switch (letra) {
   case 1:
      console.log("A");
      break;
   case 2:
      console.log("B");
      break;
   case 3:
      console.log("C");
      break;
   case 4:
      console.log("D");
      break;
   case 5:
      console.log("F");
      break;
   default:
      console.log("E - error");
      break;
}
// ---------- Ejercicio 5 ----------
console.log(
   "\n2.5 Muestra el nombre del mes correspondiente al número ingresado.",
);

let mes = Number(prompt("Numero de mes: "));

switch (mes) {
   case 1:
      console.log("Enero");
      break;
   case 2:
      console.log("Febrero");
      break;
   case 3:
      console.log("Marzo");
      break;
   case 4:
      console.log("Abril");
      break;
   case 5:
      console.log("Mayo");
      break;
   case 6:
      console.log("Junio");
      break;
   case 7:
      console.log("Julio");
      break;
   case 8:
      console.log("Agosto");
      break;
   case 9:
      console.log("Septiembre");
      break;
   case 10:
      console.log("Octubre");
      break;
   case 11:
      console.log("Noviembre");
      break;
   case 12:
      console.log("Diciembre");
      break;

   default:
      console.log("Error");
      break;
}
