const prompt = require("prompt-sync")();
console.log("Ejercicio №1: Operaciones aritméticas básicas");

// ---------- Ejercicio 1 ----------

console.log("1.1 Saludo por nombre");
let name = prompt("Nombre: ");
console.log(`Hola, ${name}!`);

// ---------- Ejercicio 2 ----------
console.log("\n1.2 Operaciones básicas con dos números");
let n1 = Number(prompt("Numero №1: "));
let n2 = Number(prompt("Numero №2: "));

console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
if (n2 !== 0) {
   console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

// ---------- Ejercicio 3 ----------
console.log("\n1.3 Verificar si es mayor de edad");
let edad = Number(prompt("Introduce tu edad: "));
if (edad >= 18) {
   console.log("Eres mayor de edad.");
} else {
   console.log("Eres menor de edad.");
}

// ---------- Ejercicio 4 ----------

console.log("\n1.4 Mostrar números del 1 al 10");
for (i = 1; i < 11; i++) {
   console.log(i);
}

// ---------- Ejercicio 5 ----------

console.log("\n1.5 Determinar si los números son pares o impares");
for (let i = 0; i < 4; i++) {
   let n = Number(prompt("Numero: "));
   if (n % 2) {
      console.log(" - impar");
   } else {
      console.log(" - par");
   }
}

// ---------- Ejercicio 6 ----------

console.log("\n1.6 Calcular potencia de dos números");
n1 = Number(prompt("Numero №1: "));
n2 = Number(prompt("Numero №2: "));
console.log(`${n1} ^ ${n2} = ${n1 ** n2}`);

// ---------- Ejercicio 7 ----------
console.log("\n1.7 Descuento según la edad");

edad = Number(prompt("Tu edad: "));

if (edad < 18 || edad > 65) {
   console.log();
} else {
   console.log();
}

// ---------- Ejercicio 8 ----------
console.log("\n1.8 Verificar nivel de acceso");

let nivel = Number(prompt("Tu nivel: "));

switch (nivel) {
   case 1:
   case 2:
      console.log("acceso denegado");
      break;
   case 3:
   case 4:
   case 5:
      console.log("acceso permitido");
      break;
   default:
      console.log("datos incorrecta");
      break;
}

// ---------- Ejercicio 9 ----------
console.log("\n1.9 Inicio de sesión (usuario y contraseña)");

let usernameAdmin = "admin";
let passwordAdmin = "1234";

let username = prompt("Username: ");
let password = prompt("Password: ");

if (username === usernameAdmin && password === passwordAdmin) {
   console.log("Succses");
} else {
   console.log("Error");
}
