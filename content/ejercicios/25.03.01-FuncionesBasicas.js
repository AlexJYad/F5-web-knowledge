const prompt = require("prompt-sync")();
console.log("Ejercicio №1: Funciones basicas");

// ---------- Ejercicio 1 ----------
console.log("1.1 Determinar cuál de dos números es mayor");
// Haz una función que de dos números pasados por parámetros indica (saca por consola) cuál de ellos es mayor.
// (Создайте функцию, которая принимает два числа в качестве параметров и выводит в консоль, какое из них больше.)

function NumeroMayor(num1, num2) {
   if (num1 > num2) {
      console.log(num1);
   } else if (num2 > num1) {
      console.log(num2);
   } else {
      console.log("los numeros son iguales");
   }
}

NumeroMayor(12, 32);

// ---------- Ejercicio 2 ----------
console.log("1.2 Calcular la multiplicación de dos números sin usar *");
// Haz una función que calcule (sin usar *) la multiplicación de dos números.
// (Создайте функцию, которая вычисляет произведение двух чисел, не используя оператор умножения *.)

function MultiplicarArtesanal(num1, num2) {
   if (num1 === 0 || num2 === 0) {
      console.log(0);
      return;
   }

   let x;
   let y;

   if (num1 > 0) {
      x = num1;
      y = num2;
   } else if (num2 > 0) {
      x = num2;
      y = num1;
   } else {
      x = Math.abs(num1);
      y = Math.abs(num2);
   }

   let sum = 0;
   for (let i = 1; i <= x; i++) {
      sum += y;
   }
   console.log(sum);
}

MultiplicarArtesanal(-4, -5);

// ---------- Ejercicio 3 ----------
console.log(
   "1.3 Calcular la multiplicación de tres números usando la función anterior",
);
// Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.
// (Используя предыдущую функцию, создайте новую, которая вычисляет произведение трех чисел.)

function MultiplicarArtesanal(num1, num2) {
   if (num1 === 0 || num2 === 0) {
      console.log(0);
      return;
   }

   let x;
   let y;

   if (num1 > 0) {
      x = num1;
      y = num2;
   } else if (num2 > 0) {
      x = num2;
      y = num1;
   } else {
      x = Math.abs(num1);
      y = Math.abs(num2);
   }

   let sum = 0;
   for (let i = 1; i <= x; i++) {
      sum += y;
   }
   return sum;
}

function MultiplicarArtesanalTres(num1, num2, num3) {
   console.log(MultiplicarArtesanal(MultiplicarArtesanal(num1, num2), num3));
}

MultiplicarArtesanalTres(-4, -5, -2);

// ---------- Ejercicio 4 ----------
console.log("1.4 Calcular la media de tres notas con un decimal");
// Crea una función que permita calcular la nota media de 3 notas para que devuelva la media con 1 decimal.
// (Создайте функцию для расчета среднего балла по трем оценкам, которая возвращает результат с одним знаком после запятой.)

function Media(num1, num2, num3) {
   return Math.round(((num1 + num2 + num3) * 10) / 3) / 10;
}

console.log(Media(1, 2, 3));
// ---------- Ejercicio 5 ----------
console.log(
   "1.5 Encontrar números cuya suma de los cubos de sus cifras sea igual al mismo número (hasta 10000)",
);
// Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:
// (Найдите среди первых 10 000 натуральных чисел те, которые обладают следующим свойством: сумма кубов их цифр равна самому числу.)

// // Пример: 153 → 1
// // 3
// //  +5
// // 3
// //  +3
// // 3
// //  =1+125+27=153
function findArmstrongNumbers() {
   for (let i = 1; i < 10001; i++) {
      let sn = String(i);
      let cifras = 0;
      for (let j = 0; j < sn.length; j++) {
         cifras += Number(sn[j]) ** 3;
      }
      if (i === cifras) {
         console.log(cifras);
      }
   }
}

function findArmstrongNumbers2() {
   let cifras;
   let mult;
   let num;

   for (let i = 1; i < 10001; i++) {
      mult = 0;
      num = i;

      do {
         cifras = num % 10;
         num = Math.floor(num / 10);
         mult += cifras ** 3;
      } while (num >= 10);

      mult += num ** 3;
      if (mult == i) {
         console.log(i);
      }
   }
}

findArmstrongNumbers();
findArmstrongNumbers2();

// ---------- Ejercicio 6 ----------
console.log(
   "Devolver el cubo de un número, comprobando si es entero; si no, mostrar alert",
);
// (optativo) Crea una función que devuelva el cubo (numero^3) de un número pero que compruebe si el parámetro pasado es un número entero. Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false.
// (Дополнительно: Создайте функцию, которая возвращает куб числа, но сначала проверяет, является ли переданный параметр целым числом. Если это не число или не целое число, выведите alert с описанием проблемы и верните false.)

function name(num) {
   if (typeof num === "number") {
      if (Number.isInteger(num)) {
         return num ** 3;
      } else {
         console.log("No es un número entero");
      }
   } else {
      console.log("No es un número");
   }
}

console.log(name(5));
console.log(name(-5));
console.log(name(2));
console.log(name(4.5));
console.log(name("4.5"));
