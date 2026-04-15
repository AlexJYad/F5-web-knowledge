const prompt = require("prompt-sync")();
console.log("Ejercicio №2: Ejercicios varios con Strings");

// ---------- Ejercicio 1 ----------

console.log("2.1 ");

function obtenStringEmpiezaConAs(str) {
   if (!(str.toLocaleLowerCase().startsWith("as") || str.length < 1)) {
      return "As" + str;
   }
   return str;
}

console.log(obtenStringEmpiezaConAs("ASTerisco")); // → 'Asterisco'
console.log(obtenStringEmpiezaConAs("TEroide")); // → 'Asteroide'
console.log(obtenStringEmpiezaConAs("")); // → ''

// ---------- Ejercicio 2 ----------

console.log("2.2 ");

function eliminaCaracterPosicion(str, num) {
   if (str.length > num) {
      return str.slice(0, num) + str.slice(num + 1);
   }
   return str;
}

console.log(eliminaCaracterPosicion("murcielago", 3)); // → 'mucielago'
console.log(eliminaCaracterPosicion("rinoceronte", 12)); // → 'rinoceronte'

// ---------- Ejercicio 3 ----------

console.log("2.3 ");

function swap(str) {
   if (str.length > 1) {
      return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
   }
   return str;
}

console.log(swap("Alex"));
console.log(swap("I don't speak Espanol"));
console.log(swap(""));
console.log(swap("1"));
