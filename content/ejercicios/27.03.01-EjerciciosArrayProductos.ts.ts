// ===============================
// EJERCICIOS DE PRODUCTOS / ЗАДАНИЯ С ПРОДУКТАМИ
// ===============================

/**
 * Tenemos un array de productos, cada uno con nombre, precio y stock.
 * Realiza los siguientes pasos:
 *
 * 1. Filtra solo los productos con stock = true
 * 2. Obtén un array solo con los nombres de esos productos
 * 3. Calcula el precio total de los productos en stock
 * 4. Ordénalos de menor a mayor precio
 */

interface Producto {
   nombre: string;
   precio: number;
   stock: boolean;
}

// Ejemplo de productos
const productos: Producto[] = [
   { nombre: "Teclado", precio: 45, stock: true }, // 0 // key : ?
   { nombre: "Ratón", precio: 25, stock: false }, //1
   { nombre: "Monitor", precio: 320, stock: true }, //2
   { nombre: "Webcam", precio: 89, stock: true }, //3
];

for (let element of productos) {
   // element === P[i]
   if (element.stock) {
      console.log(element.nombre);
   }
}

// ===============================
// 1. Filtrar productos en stock
// ===============================

let enStock = productos.filter((n) => n.stock);

// ===============================
// 2. Array con nombres de productos en stock
// ===============================

console.log(enStock.map((n) => n.nombre));

// ===============================
// 3. Precio total de productos en stock
// ===============================

console.log(enStock.reduce((sum, n) => sum + n.precio, 0));

// ===============================
// 4. Productos ordenados por precio (menor a mayor)
// ===============================

console.log(enStock.sort((a, b) => a.precio - b.precio));
