# Herramientas de Desarrollo Web

## 1. Ingeniería de prompts y Vibe Coding

### 1.1 Wizards para generar boilerplates

#### Boilerplate

Estructura base de un proyecto con carpetas, archivos, dependencias y scripts. Facilita un inicio rápido en desarrollo web.

#### Wizards basados en lenguaje natural

Asistentes de IA que generan el boilerplate y componentes iniciales según tu descripción.  
Ejemplos: GPT-4, Copilot, StackBlitz AI.

#### Cómo usar

1. **Describe el proyecto:** stack, páginas, estructura (`Angular 16 + TypeScript + Tailwind + Router con Home y About`)
2. **Ejecuta el wizard/IA:** crea archivos, carpetas, `package.json` y `tsconfig.json`
3. **Revisa y ajusta:** dependencias, scripts, layout base.
4. **Ejecuta:** `npm install && ng serve`

#### Ventajas

- Ahorra tiempo
- Personalizable según el stack
- Permite ver la estructura del proyecto

#### Limitaciones

- No contempla todos los detalles de proyectos complejos
- Puede generar código incompleto
- Mejor usar como base inicial, no para producción final

### 1.2 Uso de la IA para explicar errores

La IA puede usarse para **entender por qué ocurre un error**, no solo para corregirlo.

#### Por qué es importante

Si la IA solo corrige, se resuelve **una vez**; si explica, permite entender:

- la causa del error
- cómo funciona el lenguaje o framework
- cómo evitarlo en el futuro

#### Cómo usar la IA

- **Pedir explicación, no solo solución**  
  Mal: `Arregla este error`  
  Mejor: `Explica por qué ocurre este error y qué significa`
- **Dar contexto:** mensaje de error, fragmento de código, cuándo aparece
- **Explicación paso a paso:** significado del mensaje, ubicación del problema, mecanismo que lo provoca

#### Beneficios

- Mejor comprensión del código
- Desarrollo de habilidades de debugging
- Menos errores repetidos

### 1.3 Vibe Coding

#### Qué es Vibe Coding

Enfoque donde el desarrollador **describe la tarea en lenguaje natural** y la IA genera gran parte del código.  
El desarrollador revisa, adapta y mejora el resultado.

#### Para qué es útil

- **Prototipado rápido:** crear MVP y probar ideas
- **Aprendizaje:** ver ejemplos y entender estructuras
- **Código repetitivo:** componentes, llamadas a APIs, operaciones CRUD

#### Limitaciones

- Código generado puede no ser óptimo
- Pueden aparecer errores
- Arquitectura del proyecto requiere control del desarrollador

#### Conclusión

Vibe Coding acelera el desarrollo, pero **no sustituye al desarrollador**. La IA ayuda, pero **el control y comprensión siguen siendo humanos**

### 1.4 Herramientas para prototipos: v0.dev y Framer AI

Permiten crear **interfaces y prototipos** desde descripciones en lenguaje natural, sin escribir todo el código manualmente.

#### Tabla comparativa

| Herramienta   | Función principal      | Generación de código | Tecnologías usadas      | Dirigido a              | Características                                 |
| ------------- | ---------------------- | -------------------- | ----------------------- | ----------------------- | ----------------------------------------------- |
| **v0.dev**    | Componentes UI         | Sí                   | React, Tailwind CSS     | Desarrolladores         | Copia el código al proyecto; componentes listos |
| **Framer AI** | Sitios y landing pages | No                   | HTML/CSS, editor visual | Diseñadores, prototipos | Diseño, animaciones, publicación rápida         |

#### Para qué es útil

- Crear prototipos rápidamente
- Acelerar la generación de UI
- Mostrar ideas a equipos o clientes

#### Limitaciones

- Código puede requerir ajustes
- Estructura no siempre óptima
- Mejor usar para prototipos, no para proyectos finales

### 1.5 Diferencias entre Framer y programar desde cero

#### Framer AI

- Creación visual de sitios y landing pages
- Genera automáticamente maquetas, animaciones, textos e imágenes
- Prototipado rápido
- Ideal para mostrar ideas sin conocimientos profundos de código
- Control limitado sobre la estructura y lógica

#### Programación desde cero

- Escribir manualmente HTML, CSS, JS y componentes
- Control total del código y arquitectura
- Permite lógica compleja y soluciones personalizadas
- Requiere más tiempo y conocimientos técnicos

#### Convivencia

- Usar Framer para prototipos rápidos
- Implementar el proyecto final mediante código
- Exportar diseños de Framer y adaptarlos permite combinar **velocidad y control**

---

## 2. Visual Studio Code

---

## 3. Node.js, npm y package.json

Definición: ¿Es Node.js un lenguaje de programación o un entorno de ejecución? ¿Para qué sirve en el desarrollo Frontend?
Gestión de paquetes: ¿Qué es npm? Pon un ejemplo de un "paquete" o librería que podrías necesitar instalar para un proyecto.
El mapa del proyecto: ¿Qué función cumple el archivo package.json? ¿Por qué es el primer archivo que debes mirar al descargar un proyecto de otra persona?

---

## 4. Vite y Hot Module Replacement

Qué es y para qué sirve.
Investiga qué es el Hot Module Replacement. ¿Cómo mejora esto la experiencia del desarrollador mientras escribe código?
