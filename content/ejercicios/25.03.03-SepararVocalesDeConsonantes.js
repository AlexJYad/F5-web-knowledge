// 📌 Plan
// Convertir el string a minúsculas
// Recorrer el string carácter por carácter
// Si no es una letra → ignorar
// Si es vocal → añadir a vocales
// Si es consonante → añadir a consonantes
// Devolver vocales + consonantes

function separarVocalesDeConsonantes(str) {
   let strNew = str.toLocaleLowerCase();
   let char;
   let vocales = "";
   let consonantes = "";
   for (let i = 0; i < strNew.length; i++) {
      char = strNew[i];
      if (char >= "a" && char <= "z") {
         if ("aeiou".includes(char)) {
            vocales += char;
         } else {
            consonantes += char;
         }
      }
   }
   return vocales + consonantes;
}

console.log(separarVocalesDeConsonantes("Alex"));
console.log(separarVocalesDeConsonantes("Concatenation"));
console.log(separarVocalesDeConsonantes("I don't speak Espanol"));
console.log(separarVocalesDeConsonantes(""));
