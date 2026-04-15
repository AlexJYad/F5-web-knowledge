// ===============================
// EJERCICIOS DE FUNCIONES Y VARIABLES / ЗАДАНИЯ ПО ФУНКЦИЯМ И ПЕРЕМЕННЫМ
// ===============================

// ===============================
// EJERCICIO 1 / ЗАДАНИЕ 1
// Crear función que sume 2 números, un argumento tiene valor por defecto
// Создать функцию, которая складывает 2 числа, один аргумент имеет значение по умолчанию
// ===============================

function multiplarPi(a: number, b: number = 3.14): void {
   console.log(a + b);
}

multiplarPi(5);
multiplarPi(5, 3);
multiplarPi(5, 3.1);

// ===============================
// EJERCICIO 2 / ЗАДАНИЕ 2
// Sumatoria de números usando spread operator (...)
// Сумма чисел с использованием spread operator (...)
// ===============================

function multiplar(...numbers: number[]): void {
   let sum = 0;
   for (const num of numbers) {
      sum += num;
   }
   console.log(sum);
}

multiplar(1, 2, 3, 4, 5, 6, 7, 8, 9);
multiplar(1, 2);
multiplar(1);

// Consejo / Совет:
// Recordad poner los puntos suspensivos en el argumento
// Использовать троеточие (...) в аргументе
// Para el bucle, usar for (let i of <argumento>)
// Для цикла: for (let i of <аргумент>)

// ===============================
// EJERCICIO 3 / ЗАДАНИЕ 3
// Programa que use más de una función y devuelva un saludo (callback)
// Программа, использующая несколько функций и возвращающая приветствие (callback)
// ===============================

function Hi(): string {
   return "Hi";
}

function Bye(): string {
   return "Bye";
}

function saludo(callback: () => string): void {
   console.log(callback());
}

saludo(Hi);
saludo(Bye);

// Consejo / Совет: Callback es una función que se pasa como argumento
// Callback — функция, передаваемая как аргумент

// ===============================
// EJERCICIO 4 / ЗАДАНИЕ 4
// Suma 2 números usando función anónima (arrow function)
// Складываем 2 числа с использованием анонимной функции (arrow function)
// ===============================

const sumar = (a: number, b: number): number => {
   return a + b;
};

console.log(sumar(2, 3));
console.log(sumar(4, 1));

// Consejo / Совет: Las funciones flecha permiten asignarlas a variables
// Функции стрелки можно присваивать переменным

// ===============================
// EJERCICIO 5 / ЗАДАНИЕ 5
// Tipar variables en TypeScript / Типизация переменных в TypeScript
// ===============================

let a: number = 29;
let st: string = "Alex";
let flag: boolean = true;
let nan: null = null;
let un: undefined;

console.log(
   `${a} es typo de ${typeof a}
${st} es typo de ${typeof st}
${flag} es typo de ${typeof flag}
${nan} es typo de ${typeof nan}
${un} es typo de ${typeof un}`,
);

// Consejo / Совет:
// Recordad que TypeScript es case sensitive
// TypeScript чувствителен к регистру
// Los tipos básicos: string, number, boolean, null, undefined

export {};
