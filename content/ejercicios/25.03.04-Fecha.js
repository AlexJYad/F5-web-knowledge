const prompt = require("prompt-sync")();
console.log("Ejercicio №4: Fecha");

let date = new Date();

// ---------- Ejercicio 1 ----------
console.log("\n4.1");

console.log(date.toLocaleString("es-ES"));

// ---------- Ejercicio 2 ----------
console.log("\n4.2");
// date = new Date("2026,03,25,8,30");

if (0 < date.getDay < 6) {
   const hora = date.getHours(); // 0–23
   const minuto = date.getMinutes(); // 0–59
   if (
      (hora > 8 && hora < 16) ||
      (hora === 8 && minuto >= 30) ||
      (hora === 16 && minuto <= 30)
   ) {
      console.log("на занятии");
   } else {
      console.log("нет занятии");
   }
} else {
   console.log("нет занятии");
}

// ---------- Ejercicio 3 ----------
console.log("\n4.3");

let dateNextBirthDay = new Date(2026, 5, 11, 15, 15);
let sec = Math.round((dateNextBirthDay - date) / 100) / 10;
let min = Math.round(sec / 6) / 10;
let hour = Math.round(min / 6) / 10;
let day = Math.round(hour / 2.4) / 10;

console.log(`sec = ${sec}\nmin = ${min}\nhour = ${hour}\ndays = ${day}\n`);

// ---------- Ejercicio 4 ----------
console.log("\n4.4");

for (let i = 2026; i < 2061; i++) {
   let SJ = new Date(i, 3, 23).getDay();
   if (SJ === 0) {
      console.log(i + " - Domingo");
   } else if (SJ === 6) {
      console.log(i + " - Sábado");
   } else {
      //break;
   }
}

// ---------- Ejercicio 5 ----------
console.log("\n4.5");

let dateMiBirthDay = new Date(1996, 5, 11, 15, 15);
console.log(dateMiBirthDay.toLocaleString("es-ES"));
let dateFriendBirthDay = new Date(1997, 2, 27);
//= new Date(prompt("Tu nacimiento: ")); //1997-3-27
console.log(dateFriendBirthDay.toLocaleString("es-ES"));

if (dateMiBirthDay < dateFriendBirthDay) {
   console.log("Yo es mayor");
} else if (dateFriendBirthDay < dateMiBirthDay) {
   console.log("Tu es mayor");
} else {
   console.log("igual");
}

let days = Math.abs(
   Math.round((dateMiBirthDay - dateFriendBirthDay) / (1000 * 60 * 60 * 24)),
);
let years = Math.round((days * 10) / 365) / 10;
let mes = Math.round(years * 10 * 12) / 10;

console.log(`For ${days} days\nor\nFor ${mes} mounths\nor\nFor ${years} years`);
