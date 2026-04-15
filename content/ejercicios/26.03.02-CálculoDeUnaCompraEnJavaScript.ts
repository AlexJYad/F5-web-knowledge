// ===============================
// ACTIVIDAD: Cálculo de una compra en JavaScript
// АКТИВНОСТЬ: Расчет покупки на JavaScript
// ===============================

const prompt = require("prompt-sync")();
console.log("Ejercicio №2: Cálculo de una compra en JavaScript");

interface Producto {
   nombre: string;
   precio: number;
   cantidad: number;
}

let productos: Producto[] = [];

function Init(
   productos: Producto[],
   nombre: string,
   precio: number,
   cantidad: number = 1,
) {
   productos.push({ nombre, precio, cantidad });
}

// let isFine = true;

// while (isFine) {
for (let i = 0; i < 1; i++) {
   let nombre: string = prompt("Nombre del producto: ");
   let precio = parseFloat(prompt("Precio: "));
   let cantidad = parseInt(prompt("Cantidad: "));
   if (cantidad) Init(productos, nombre, precio, cantidad);
   else Init(productos, nombre, precio);
}

// productos = [
//    { nombre: "pomedor", precio: 1.3, cantidad: 5 },
//    { nombre: "pipino", precio: 3.5, cantidad: 3 },
//    { nombre: "patata", precio: 0.89, cantidad: 2 },
//    { nombre: "arroz", precio: 2.3, cantidad: 4 },
// ];

console.log(productos);

// ===============================
// 1. Función normal / Обычная функция
// Crear función básica que calcule el total
// Создать базовую функцию, которая считает общую сумму
// ===============================

function Normal(productos: Producto[]): string {
   return productos.reduce((arr, n) => arr + n.precio * n.precio, 0).toFixed(2);
}

console.log(Normal(productos));

// 1.1 Pedir datos al usuario con prompt
// 1.1 Запросить данные у пользователя с помощью prompt
// - nombre del producto / название продукта
// - precio / цена
// - cantidad / количество

// 1.2 Convertir strings a números
// 1.2 Преобразовать строки в числа
// - parseFloat() para precios con decimales
// - parseInt() para cantidades enteras

// 1.3 Llamar a la función y guardar resultado
// 1.3 Вызвать функцию и сохранить результат

// 1.4 Mostrar resultado con alert
// 1.4 Показать результат с помощью alert

// ===============================
// 2. Parámetros por defecto / Аргументы по умолчанию
// Si el usuario no introduce cantidad → usar 1
// Если пользователь не вводит количество → использовать 1
// ===============================

// 2.1 Definir parámetro por defecto en la función
// 2.1 Задать значение по умолчанию в функции

// 2.2 Comprobar si el prompt está vacío
// 2.2 Проверить, оставил ли пользователь пустой ввод

// 2.3 Llamar a la función pasando undefined para activar valor por defecto
// 2.3 Вызвать функцию, передав undefined для активации значения по умолчанию

// ===============================
// 3. Rest parameters (...) / Rest параметры (...)
// Permitir varios precios y sumarlos
// Разрешить несколько цен и суммировать их
// ===============================

// 3.1 Crear función con ...precios
// 3.1 Создать функцию с ...precios

// 3.2 Recorrer array de precios
// 3.2 Пройтись по массиву цен

// 3.3 Pedir varios precios con prompt
// 3.3 Запросить несколько цен через prompt

// 3.4 Llamar a la función con varios valores
// 3.4 Вызвать функцию с несколькими значениями

// ===============================
// 4. Callbacks / Функции обратного вызова
// Aplicar operación extra (descuento)
// Применить дополнительную операцию (скидка)
// ===============================

// 4.1 La función debe recibir otra función como parámetro
// 4.1 Функция должна принимать другую функцию как параметр

// 4.2 Calcular total dentro de la función y aplicar callback
// 4.2 Вычислить total внутри функции и применить callback

// 4.3 Crear función de operación (por ejemplo, descuento)
// 4.3 Создать функцию операции (например, скидка)

// 4.4 Llamar a la función pasando la operación
// 4.4 Вызвать функцию, передав операцию

// ===============================
// 5. Función anónima / Анонимная функция
// Crear función sin nombre
// Создать функцию без имени
// ===============================

// 5.1 Usar arrow function o función anónima en variable o argumento
// 5.1 Использовать стрелочную функцию или анонимную функцию в переменной или аргументе

// ===============================
// 6. TypeScript / Типизация в TypeScript
// Añadir tipos a parámetros y funciones
// Добавить типы для параметров и функций
// ===============================

// 6.1 Tipear parámetros: precio: number, cantidad: number
// 6.1 Типизировать параметры: precio: number, cantidad: number

// 6.2 Tipear función: devuelve number
// 6.2 Типизировать функцию: возвращает number

// 6.3 Tipear callback: operacion: (total: number) => number
// 6.3 Типизировать callback: operacion: (total: number) => number

// 6.4 Recordar convertir string de prompt a number
// 6.4 Не забывать конвертировать строку из prompt в число

// ===============================
// CONSEJO / СОВЕТ
// ✅ Usar alert() para mostrar resultados
// ✅ Usar prompt() para pedir datos
// ✅ Mantener la consistencia en todas las funciones
// ✅ Использовать alert() для показа результата
// ✅ Использовать prompt() для ввода данных
// ✅ Соблюдать единый стиль во всех функциях
// ===============================
