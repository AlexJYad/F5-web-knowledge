// ===============================
// 1. SUMA DE NÚMEROS PARES / СУММА ЧЁТНЫХ ЧИСЕЛ
// ===============================
/**
 * Descripción (ES):
 * Dada una lista de números, escribe una función que devuelva la suma de todos los números pares.
 * La función debe iterar sobre cada número, comprobar si es par y añadirlo a la suma total.
 *
 * Пример (RU):
 * Есть список чисел, нужно написать функцию, которая возвращает сумму всех чётных чисел.
 * Функция проходит по каждому числу, проверяет, чётное ли оно, и добавляет к общей сумме.
 *
 * Ejemplo de uso / Пример использования:
 * sumarPares([2,4,5,6,7,8,3,1,10,4]) → 34
 */

import console = require("node:console");

function sumarPares(a: number[]): number {
   let sum = a.filter((n) => !(n % 2)).reduce((sum, n) => sum + n, 0);

   return sum;
}

console.log(sumarPares([2, 4, 5, 6, 7, 8, 3, 1, 10, 4]));
//→ 34

// ===============================
// 2. ORDENAR DATOS DEL ALUMNO / ПЕРЕСТАВИТЬ ДАННЫЕ УЧЕНИКА
// ===============================
/**
 * Descripción (ES):
 * Recibimos un array con datos de un alumno. Debemos colocar el nombre al principio,
 * antes del apellido, y añadir al final la nota media.
 *
 * Пример (RU):
 * Получаем массив с данными студента. Нужно поставить имя в начало перед фамилией
 * и добавить в конце среднюю оценку.
 *
 * Ejemplo de uso / Пример использования:
 * ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara']) → Clara,Rodriguez,8,9,5,4,6.5
 */

function ordenDatos(array: any): any {
   let sum = 0;
   let nombre = "";

   for (const element of array) {
      if (Number(element)) {
         sum += Number(element);
      } else {
         nombre = element;
      }
   }

   array.pop(nombre);
   array.unshift(nombre);

   array.push(sum / (array.length - 2));

   return array;
}

console.log(ordenDatos(["Rodriguez", "8", 9, "5", 4, "Clara"]));
// → Clara,Rodriguez,8,9,5,4,6.5

// Aquí va tu código / Здесь пишем код задания 2

// ===============================
// 3. FILTRAR PALABRAS QUE EMPIEZAN CON “Z” / УДАЛИТЬ СЛОВА НА “Z”
// ===============================
/**
 * Descripción (ES):
 * Partiendo de un array de palabras, elimina las que empiezan con la letra "Z"
 * y devuelve el array filtrado.
 *
 * Пример (RU):
 * Из массива слов удалить те, что начинаются с буквы "Z" и вернуть новый массив.
 *
 * Ejemplo de uso / Пример использования:
 * filterWords(["Bob", "Alex", "Zoello"]) → ["Bob", "Alex"]
 * filterWords(["León", "Zebra", "Gacela"]) → ["León", "Gacela"]
 * filterWords(["Mercedes", "Bmw", "Audi", "Porche"]) → ["Mercedes","Bmw","Audi","Porche"]
 */

// Aquí va tu código / Здесь пишем код задания 3

function filterWords(a: string[]): string[] {
   return a.filter((n) => !n.startsWith("Z"));
}

console.log(filterWords(["Bob", "Alex", "Zoello"]));
// → ["Bob", "Alex"]);
console.log(filterWords(["León", "Zebra", "Gacela"]));
// → ["León", "Gacela"]
console.log(filterWords(["Mercedes", "Bmw", "Audi", "Porche"]));
// → ["Mercedes","Bmw","Audi","Porche"])

// ===============================
// 4. NÚMERO MAYOR DEL ARRAY / НАИБОЛЬШЕЕ ЧИСЛО В МАССИВЕ
// ===============================
/**
 * Descripción (ES):
 * Usando forEach, recorre un array de números y muestra por pantalla el número mayor.
 *
 * Пример (RU):
 * Используя forEach, пройти по массиву чисел и вывести на экран наибольшее число.
 *
 * Ejemplo de uso / Пример использования:
 * var numbers = [3, 27, 95, 7, 25, 95, 81];
 * → 95
 */

let numbers = [3, 27, 95, 7, 25, 95, 81];
// → 95

let max = numbers[0]!;

numbers.forEach((element) => {
   if (element > max) max = element;
});

console.log(max);

// ===============================
// 5. STRING MÁS LARGO / САМОЕ ДЛИННОЕ СЛОВО
// ===============================
/**
 * Descripción (ES):
 * Usando forEach, recorre un array de strings y muestra el string más largo.
 *
 * Пример (RU):
 * Используя forEach, пройти по массиву строк и вывести самую длинную строку.
 *
 * Ejemplo de uso / Пример использования:
 * var myStrings = ['first', 'second', 'third', 'fourth', 'reallyLongString', 'sixth'];
 * → 'reallyLongString'
 */

let myStrings: string[] = [
   "first",
   "second",
   "third",
   "fourth",
   "reallyLongString",
   "sixth",
];
// → 'reallyLongString'

let maxLenght = myStrings[0]!.length;
let elementMaxLenght = "";
myStrings.forEach((element) => {
   if (element.length > maxLenght) {
      maxLenght = element.length;
      elementMaxLenght = element;
   }
});

console.log(elementMaxLenght);

// ===============================
// 6. MESES QUE EMPIEZAN POR VOCAL / МЕСЯЦЫ, НАЧИНАЮЩИЕСЯ С ГЛАСНОЙ
// ===============================
/**
 * Descripción (ES):
 * Dado un array con los meses del año, obtiene todos los meses que empiezan por una vocal.
 *
 * Пример (RU):
 * Данный массив с месяцами, нужно вернуть все месяцы, начинающиеся на гласную.
 *
 * Ejemplo de uso / Пример использования:
 * var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
 * → ['Enero','Abril','Agosto','Octubre']
 */
let meses = [
   "Enero",
   "Febrero",
   "Marzo",
   "Abril",
   "Mayo",
   "Junio",
   "Julio",
   "Agosto",
   "Septiembre",
   "Octubre",
   "Noviembre",
   "Diciembre",
];
// → ['Enero','Abril','Agosto','Octubre']

let mesesVocal: string[] = [];

meses.forEach((element) => {
   if (/^[aeiou]/i.test(element)) {
      // ^ — начало строки,
      // [aeiou] — любая гласная,
      // i — игнорировать регистр.
      mesesVocal.push(element);
   }
});

console.log(mesesVocal);

// ===============================
// 7. DÍAS DE LA SEMANA / ДНИ НЕДЕЛИ
// ===============================
/**
 * Descripción (ES):
 * Dado un array con los días de la semana:
 * - Obtén el primer día que empieza por ‘M’.
 * - Obtén la posición del día que empieza por ‘V’.
 * - Indica si algún día empieza por ‘S’.
 * - Indica si todos los días acaban por ‘s’.
 *
 * Пример (RU):
 * Дан массив с днями недели:
 * - Найти первый день, который начинается на 'M'.
 * - Найти индекс дня, который начинается на 'V'.
 * - Проверить, есть ли день, который начинается на 'S'.
 * - Проверить, все ли дни заканчиваются на 's'.
 *
 * Ejemplo de uso / Пример использования:
 * var dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
 */

let dias = [
   "lunes",
   "martes",
   "miércoles",
   "jueves",
   "viernes",
   "sábado",
   "domingo",
];

dias.some((element) => {
   if (element.toUpperCase().startsWith("M")) {
      console.log(element);
      return true;
   }
   return false;
});

dias.some((element, i) => {
   if (element.toUpperCase().startsWith("V")) console.log(i);
});

if (dias.some((n) => n.toUpperCase().startsWith("S"))) {
   console.log(`Sí, algún día empieza por "S"`);
} else {
   console.log(`No, algún día empieza por "S"`);
}

if (dias.every((n) => n.toLowerCase().endsWith("s"))) {
   console.log(`Sí, todos los días acaban por "s"`);
} else {
   console.log(`No, todos los días acaban por "s"`);
}

// ===============================
// 8. NOTAS / ОЦЕНКИ
// ===============================
/**
 * Descripción (ES):
 * Dado un array de notas [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]:
 * - Calcula la nota media
 * - Obtén la primera nota superior a 5
 * - Cambia las notas de escala 10 a escala 20
 *
 * Пример (RU):
 * Дан массив оценок [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]:
 * - Найти среднюю оценку
 * - Найти первую оценку выше 5
 * - Перевести оценки с 10-балльной шкалы на 20-балльную
 *
 * Ejemplo de uso / Пример использования:
 * var notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];
 */

let notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

console.log(
   (notas.reduce((arr, element) => (arr += element), 0) / notas.length).toFixed(
      2,
   ),
);

notas.some((n) => {
   if (n > 5) {
      console.log(n);
      return true;
   }
   return false;
});

console.log(notas.map((n) => n * 2));
