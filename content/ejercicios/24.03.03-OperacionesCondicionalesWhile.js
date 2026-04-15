const prompt = require("prompt-sync")();

console.log("Ejercicio №3: Operaciones condicionales While/do While");

// ---------- Ejercicio 1 ----------

console.log("\n3.1 - Ingrese un número mayor a 10");
let n;
do {
   n = Number(prompt("Numero: "));
} while (10 > n);

// ---------- Ejercicio 2 ----------

console.log("\n3.2 - Ingrese números para sumar, termina con un negativo");
n = Number(prompt("Numero: "));
let sum = 0;

while (n >= 0) {
   sum += n;
   n = Number(prompt("Numero: "));
}
console.log(sum);

// ---------- Ejercicio 3 ----------

console.log("\n3.3 - Ingrese su nombre (mínimo 3 caracteres)");
let nombre;
do {
   nombre = prompt("Nombre: ");
   console.log(nombre.length);
} while (nombre.length < 3);

// ---------- Ejercicio 4 ----------

console.log("\n3.4 - Adivina el número (1-20), ingrese 0 para rendirse)");

let num = Math.floor(Math.random() * 20) + 1;
let numU;

do {
   numU = Number(prompt("Numero: "));
} while (numU != num && numU != 0);

console.log("Numero es: " + numU);
